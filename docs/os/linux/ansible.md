---
title: 分发脚本 ansible
---

## 介绍

虽然也可以自己写 Shell 实现分发脚本，但由于缺乏运维系统概念，混乱、零碎的写法总是让人难受，一接触到 ansible 就知道很难回去了。

Ansible 是一个用来批量管理部署远程主机上服务的工具，它通过 SSH 协议实现管理节点与远程节点之间的通信，所以首先需要完成 [SSH 配置](/os/linux/login-with-rsa-key.html#生成-rsa)。

需要注意的是 Ansible 需要开启公钥认证，也就是添加到 `known_hosts` 中，对于大批量的操作可以禁用该行为：

```bash
vim /etc/ansible/ansible.cfg
# 修改以下内容
host_key_checking = False # 取消注释
```



## install

虽然可以很简单的直接使用 [yum 安装](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum)，但由于 ansible 是一个 python 编写的工具，这样就会导致 ansible 依赖于全局的 python，当全局依赖发生变化的时候可能导致 ansible 出现冲突或潜在的安全问题，所以需要隔离 ansible 与其他应用。

### 1. 关闭限制

```bash
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld # 验证

vim /etc/sysconfig/selinux
# 修改以下内容
SELINUX=disabled

reboot
getenforce # 验证 Disabled
```

### 2. 安装 [python](https://www.python.org/downloads/source/)

```bash
wget https://www.python.org/ftp/python/3.6.9/Python-3.6.9.tar.xz
tar xf Python-3.6.9.tar.xz
cd Python-3.6.9
./configure --prefix=/usr/local --with-ensurepip=install --enable-shared LDFLAGS="-Wl,-rpath /usr/local/lib"
make && make altinstall
which pip3.6
ln -s /usr/local/bin/pip3.6 /usr/local/bin/pip # 建立软连接
pip install virtualenv
```

### 3. 创建实例

需要创建一个 ansible 用户，并在该系统用户下创建一个 python3.6 版本的 virtualenv 实例。

```bash
useradd deploy
su - deploy
virtualenv -p /usr/local/bin/python3.6 .py3-a2.8-env # 创建实例
source /home/deploy/.py3-a2.8-env/bin/activate
pip install paramiko PyYAML  jinja2 # 安装依赖，保持顺序
```

### 4. 安装 ansible

[官网](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum)推荐的安装方式，当下载速度极慢时的[解决方案](/tools/github/download-huge-project-from-github.html)。

```bash
git clone https://gitee.com/shanyuhai123/ansible.git
mv ansible .py3-a2.8-env/
cd .py3-a2.8-env/ansible
git branch -a # 查看分支
git checkout stable-2.8
source /home/deploy/.py3-a2.8-env/ansible/hacking/env-setup -q
ansible --version # 验证
```

### 5. 启用 ansible

```bash
shutdown -r now # 重启

su - deploy
source .py3-a2.8-env/bin/activate # 加载 py3
source .py3-a2.8-env/ansible/hacking/env-setup -q # 加载 ansible
ansible --version # 验证
```



## inventory

Ansible 可同事操作属于一个组的多台主机，组和主机之间的关系通过 [inventory](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html) 文件配置。默认的文件路径为 `/etc/ansible/hosts`，除默认文件外，还可以使用多个 inventory 文件，当然也可以从云上拉取配置信息。

### 1. INI-like

```bash
mail.example.com

[t1]
192.168.1.11
192.168.1.12

[web]
www[01:50].example.com

[db]
db-[a:f].example.com

[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com:5309
```

### 2. YAML

```yaml
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
```

### 3. Inheriting variable values

在这种情况下自己书写规则 INI-like 风格更方便一些，但是接手他人的时候更希望看到 YAML 风格，更一目了然。

+ INI-like

  ```bash
  [atlanta]
  host1
  host2
  
  [raleigh]
  host2
  host3
  
  [southeast:children]
  atlanta
  raleigh
  
  [southeast:vars]
  some_server=foo.southeast.example.com
  halon_system_timeout=30
  self_destruct_countdown=60
  escape_pods=2
  
  [usa:children]
  southeast
  northeast
  southwest
  northwest
  ```

+ YAML

  ```yaml
  all:
    children:
      usa:
        children:
          southeast:
            children:
              atlanta:
                hosts:
                  host1:
                  host2:
              raleigh:
                hosts:
                  host2:
                  host3:
            vars:
              some_server: foo.southeast.example.com
              halon_system_timeout: 30
              self_destruct_countdown: 60
              escape_pods: 2
          northeast:
          northwest:
          southwest:
  ```

### 4. 参数

|             参数             | 说明                                         |
| :--------------------------: | -------------------------------------------- |
|      ansible_connection      | 连接类型到主机。                             |
|         ansible_host         | 要连接的主机的名称。                         |
|         ansible_port         | 连接端口号。                                 |
|         ansible_user         | 连接到主机时要使用的用户名。                 |
|       ansible_password       | 身份验证的密码。                             |
| ansible_ssh_private_key_file | ssh使用的私钥文件。                          |
|   ansible_ssh_common_args    | 此设置始终附加到sftp，scp和ssh的默认命令行。 |
|   ansible_sftp_extra_args    | 此设置始终附加到默认的sftp命令行。           |
|    ansible_scp_extra_args    | 此设置始终附加到默认scp命令行。              |
|    ansible_ssh_extra_args    | 此设置始终附加到默认的ssh命令行。            |
|    ansible_ssh_pipelining    | 确定是否使用SSH流水线。                      |
|    ansible_ssh_executable    | 此设置将覆盖使用系统ssh的默认行为。          |
|      ansible_shell_type      | 目标系统的shell类型。                        |
|  ansible_python_interpreter  | 目标主机python路径。                         |



## ad-hoc

ad-hoc 可以帮助完成临时任务，很多时候并不需要 Ansible 的强大力量（playbook）。

命令格式：

```bash
ansible <pattern_goes_here> -m <module_name> -a <arguments>
```

仅列出部分示例。

### 1. [command](https://docs.ansible.com/ansible/latest/modules/command_module.html)

Execute **command**s on targets。

实践：

```bash
ansible t1 -m command -a "free -m"
ansible t1 -m command -a "df -h"
ansible t1 -m command -a "ls /root"
ansible t1 -m command -a "cat redhat-release"
```

### 2. [shell](https://docs.ansible.com/ansible/latest/modules/shell_module.html)

Execute shell commands on targets。


实践：

```bash
ansible t1 -m shell -a "echo hello > /tmp/tmp.txt"
ansible t1 -m shell -a "cat /tmp/tmp.txt" # 验证
```

### 3. [copy](https://docs.ansible.com/ansible/latest/modules/copy_module.html)

Copy files to remote locations。

实践：

```bash
ansible t1 -m copy -a "src=/root/shell dest=/tmp"
ansible t1 -m shell -a "ls /tmp" # 验证
ansible t1 -m shell -a "wc -l /tmp/shell" # 验证
```

### 4. [script](https://docs.ansible.com/ansible/latest/modules/script_module.html)

Runs a local script on a remote node after transferring it。

实践：

```bash
echo "echo hello" > /tmp/hello.sh
cat /tmp/hello.sh # 验证
ansible t1 -m script -a "/tmp/hello.sh" 
```

### 5. [file](https://docs.ansible.com/ansible/latest/modules/file_module.html)

Manage files and file properties。

### 6. [yum](https://docs.ansible.com/ansible/latest/modules/yum_module.html)

 Manages packages with the yum package manager。

实践：

```bash
ansible webservers -m command -a "free -m" # 验证

ansible webservers -m yum -a "name=nginx state=installed"
ansible webservers -m command -a "nginx -v" # 验证 nginx version: nginx/1.12.2
# 可以注意到并非是最新版 nginx
# 参照示例 https://docs.shanyuhai.top/os/centos/install-the-latest-version-of-nginx.html
ansible webservers -m yum -a "name=yum-utils state=installed"
ansible webservers -m command -a "ll /etc/yum.repos.d/nginx.repo" # 验证
vim /etc/yum.repos.d/nginx.repo
cat /etc/yum.repos.d/nginx.repo # 验证
# 追加内容参考示例
ansible webservers -m copy -a "src=/etc/yum.repos.d/nginx.repo dest=/etc/yum.repos.d/nginx.repo"
ansible webservers -m command -a "cat /etc/yum.repos.d/nginx.repo" # 验证
ansible webservers -m command -a "yum-config-manager --enable nginx-mainline"
ansible webservers -m yum -a "name=nginx state=installed" # 更新
# installed 测试时未能更新，可能需要 present 参数
# 不推荐使用 yum 卸载
ansible webservers -m command -a "nginx -v" # 验证 
```

### 7. [systemd](https://docs.ansible.com/ansible/latest/modules/systemd_module.html)

Manage services。

实践：

```bash
# 最好将服务写完整
ansible t1 -m systemd -a "name=crond.service  enabled=yes state=started"
ansible t1 -m command -a "systemctl status crond" # 验证
```

### 8. [cron](https://docs.ansible.com/ansible/latest/modules/cron_module.html)

Manage cron.d and crontab entries。

实践：

```bash
ansible webservers -m cron -a "name='sync time' minute=00 hour=00 job='/usr/sbin/ntpdate time.nist.gov > /dev/null 2>&1'" 
ansible webservers -m command -a "crontab -l" # 验证

# 删除任务
ansible webservers -m cron -a "name='sync time' state=absent" 
ansible webservers -m command -a "crontab -l" # 验证
```



## playbooks

相对于 ad-hoc，playbooks 则强大的多，当然也复杂得多。playbook 由一个或多个 plays 组成，在 play 中，一组机器被映射为定义好的角色，其内容被称为 tasks（任务），在基本层次的应用中，一个任务是一个对 ansible 模块的调用。

对于如何良好的实践这些内容，有一些整套的 [playbooks](https://github.com/ansible/ansible-examples)。

### 1. one play

```yaml
---
- hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  remote_user: root
  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
  - name: write the apache config file
    template:
      src: /srv/httpd.j2
      dest: /etc/httpd.conf
    notify:
    - restart apache
  - name: ensure apache is running
    service:
      name: httpd
      state: started
  handlers:
    - name: restart apache
      service:
        name: httpd
        state: restarted
```

### 2. multiple plays

```yaml
---
- hosts: webservers
  remote_user: root

  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
  - name: write the apache config file
    template:
      src: /srv/httpd.j2
      dest: /etc/httpd.conf

- hosts: databases
  remote_user: root

  tasks:
  - name: ensure postgresql is at the latest version
    yum:
      name: postgresql
      state: latest
  - name: ensure that postgresql is started
    service:
      name: postgresql
      state: started
```

### 3. Directory Layout

```yaml
production                # inventory file for production servers
staging                   # inventory file for staging environment

group_vars/
   group1.yml             # here we assign variables to particular groups
   group2.yml
host_vars/
   hostname1.yml          # here we assign variables to particular systems
   hostname2.yml

library/                  # if any custom modules, put them here (optional)
module_utils/             # if any custom module_utils to support modules, put them here (optional)
filter_plugins/           # if any custom filter plugins, put them here (optional)

site.yml                  # master playbook
webservers.yml            # playbook for webserver tier
dbservers.yml             # playbook for dbserver tier

roles/
    common/               # this hierarchy represents a "role"
        tasks/            #
            main.yml      #  <-- tasks file can include smaller files if warranted
        handlers/         #
            main.yml      #  <-- handlers file
        templates/        #  <-- files for use with the template resource
            ntp.conf.j2   #  <------- templates end in .j2
        files/            #
            bar.txt       #  <-- files for use with the copy resource
            foo.sh        #  <-- script files for use with the script resource
        vars/             #
            main.yml      #  <-- variables associated with this role
        defaults/         #
            main.yml      #  <-- default lower priority variables for this role
        meta/             #
            main.yml      #  <-- role dependencies
        library/          # roles can also include custom modules
        module_utils/     # roles can also include custom module_utils
        lookup_plugins/   # or other types of plugins, like lookup in this case

    webtier/              # same kind of structure as "common" was above, done for the webtier role
    monitoring/           # ""
    fooapp/               # ""
```

备用方案：

```yaml
inventories/
   production/
      hosts               # inventory file for production servers
      group_vars/
         group1.yml       # here we assign variables to particular groups
         group2.yml
      host_vars/
         hostname1.yml    # here we assign variables to particular systems
         hostname2.yml

   staging/
      hosts               # inventory file for staging environment
      group_vars/
         group1.yml       # here we assign variables to particular groups
         group2.yml
      host_vars/
         stagehost1.yml   # here we assign variables to particular systems
         stagehost2.yml

library/
module_utils/
filter_plugins/

site.yml
webservers.yml
dbservers.yml

roles/
    common/
    webtier/
    monitoring/
    fooapp/
```
