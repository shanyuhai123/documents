import{_ as i,M as l,p as c,q as u,R as s,t as n,N as e,V as r,a1 as p}from"./framework-e3e34937.js";const m={},k={href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum",target:"_blank",rel:"noopener noreferrer"},d={id:"_2-安装-python",tabindex:"-1"},b={href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html",target:"_blank",rel:"noopener noreferrer"},g={id:"_1-command",tabindex:"-1"},v={href:"https://docs.ansible.com/ansible/latest/modules/command_module.html",target:"_blank",rel:"noopener noreferrer"},f={id:"_2-shell",tabindex:"-1"},x={href:"https://docs.ansible.com/ansible/latest/modules/shell_module.html",target:"_blank",rel:"noopener noreferrer"},w={id:"_3-copy",tabindex:"-1"},_={href:"https://docs.ansible.com/ansible/latest/modules/copy_module.html",target:"_blank",rel:"noopener noreferrer"},q={id:"_4-script",tabindex:"-1"},L={href:"https://docs.ansible.com/ansible/latest/modules/script_module.html",target:"_blank",rel:"noopener noreferrer"},I={id:"_5-file",tabindex:"-1"},S={href:"https://docs.ansible.com/ansible/latest/modules/file_module.html",target:"_blank",rel:"noopener noreferrer"},A={id:"_6-yum",tabindex:"-1"},M={href:"https://docs.ansible.com/ansible/latest/modules/yum_module.html",target:"_blank",rel:"noopener noreferrer"},N={id:"_7-systemd",tabindex:"-1"},j={href:"https://docs.ansible.com/ansible/latest/modules/systemd_module.html",target:"_blank",rel:"noopener noreferrer"},E={id:"_8-cron",tabindex:"-1"},V={href:"https://docs.ansible.com/ansible/latest/modules/cron_module.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/ansible/ansible-examples",target:"_blank",rel:"noopener noreferrer"};function R(Y,a){const o=l("RouterLink"),t=l("ExternalLinkIcon");return c(),u("div",null,[a[45]||(a[45]=s("h1",{id:"分发脚本-ansible",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#分发脚本-ansible","aria-hidden":"true"},"#"),n(" 分发脚本 ansible")],-1)),a[46]||(a[46]=s("p",null,"虽然也可以自己写 Shell 实现分发脚本，但由于缺乏运维系统概念，混乱、零碎的写法总是让人难受，一接触到 ansible 就知道很难回去了。",-1)),s("p",null,[a[1]||(a[1]=n("Ansible 是一个用来批量管理部署远程主机上服务的工具，它通过 SSH 协议实现管理节点与远程节点之间的通信，所以首先需要完成 ")),e(o,{to:"/os/linux/login-with-rsa-key.html#%E7%94%9F%E6%88%90-rsa"},{default:r(()=>a[0]||(a[0]=[n("SSH 配置")])),_:1}),a[2]||(a[2]=n("。"))]),a[47]||(a[47]=p(`<p>需要注意的是 Ansible 需要开启公钥认证，也就是添加到 <code>known_hosts</code> 中，对于大批量的操作可以禁用该行为：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/ansible/ansible.cfg
<span class="token comment"># 修改以下内容</span>
host_key_checking <span class="token operator">=</span> False <span class="token comment"># 取消注释</span>
</code></pre></div><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2>`,3)),s("p",null,[a[4]||(a[4]=n("虽然可以很简单的直接使用 ")),s("a",k,[a[3]||(a[3]=n("yum 安装")),e(t)]),a[5]||(a[5]=n("，但由于 ansible 是一个 python 编写的工具，这样就会导致 ansible 依赖于全局的 python，当全局依赖发生变化的时候可能导致 ansible 出现冲突或潜在的安全问题，所以需要隔离 ansible 与其他应用。"))]),a[48]||(a[48]=p(`<h3 id="_1-关闭限制" tabindex="-1"><a class="header-anchor" href="#_1-关闭限制" aria-hidden="true">#</a> 1. 关闭限制</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld <span class="token comment"># 验证</span>

<span class="token function">vim</span> /etc/sysconfig/selinux
<span class="token comment"># 修改以下内容</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled

<span class="token function">reboot</span>
getenforce <span class="token comment"># 验证 Disabled</span>
</code></pre></div>`,2)),s("h3",d,[a[7]||(a[7]=s("a",{class:"header-anchor",href:"#_2-安装-python","aria-hidden":"true"},"#",-1)),a[8]||(a[8]=n(" 2. 安装 ")),s("a",b,[a[6]||(a[6]=n("python")),e(t)])]),a[49]||(a[49]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://www.python.org/ftp/python/3.6.9/Python-3.6.9.tar.xz
<span class="token function">tar</span> xf Python-3.6.9.tar.xz
<span class="token builtin class-name">cd</span> Python-3.6.9
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local --with-ensurepip<span class="token operator">=</span>install --enable-shared <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-Wl,-rpath /usr/local/lib&quot;</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> altinstall
<span class="token function">which</span> pip3.6
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/pip3.6 /usr/local/bin/pip <span class="token comment"># 建立软连接</span>
pip <span class="token function">install</span> virtualenv
</code></pre></div><h3 id="_3-创建实例" tabindex="-1"><a class="header-anchor" href="#_3-创建实例" aria-hidden="true">#</a> 3. 创建实例</h3><p>需要创建一个 ansible 用户，并在该系统用户下创建一个 python3.6 版本的 virtualenv 实例。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> deploy
<span class="token function">su</span> - deploy
virtualenv <span class="token parameter variable">-p</span> /usr/local/bin/python3.6 .py3-a2.8-env <span class="token comment"># 创建实例</span>
<span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/bin/activate
pip <span class="token function">install</span> paramiko PyYAML  jinja2 <span class="token comment"># 安装依赖，保持顺序</span>
</code></pre></div><h3 id="_4-安装-ansible" tabindex="-1"><a class="header-anchor" href="#_4-安装-ansible" aria-hidden="true">#</a> 4. 安装 ansible</h3>`,5)),s("p",null,[s("a",h,[a[9]||(a[9]=n("官网")),e(t)]),a[11]||(a[11]=n("推荐的安装方式，当下载速度极慢时的")),e(o,{to:"/tools/github/download-huge-project-from-github.html"},{default:r(()=>a[10]||(a[10]=[n("解决方案")])),_:1}),a[12]||(a[12]=n("。"))]),a[50]||(a[50]=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/shanyuhai123/ansible.git
<span class="token function">mv</span> ansible .py3-a2.8-env/
<span class="token builtin class-name">cd</span> .py3-a2.8-env/ansible
<span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token comment"># 查看分支</span>
<span class="token function">git</span> checkout stable-2.8
<span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/ansible/hacking/env-setup <span class="token parameter variable">-q</span>
ansible <span class="token parameter variable">--version</span> <span class="token comment"># 验证</span>
</code></pre></div><h3 id="_5-启用-ansible" tabindex="-1"><a class="header-anchor" href="#_5-启用-ansible" aria-hidden="true">#</a> 5. 启用 ansible</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment"># 重启</span>

<span class="token function">su</span> - deploy
<span class="token builtin class-name">source</span> .py3-a2.8-env/bin/activate <span class="token comment"># 加载 py3</span>
<span class="token builtin class-name">source</span> .py3-a2.8-env/ansible/hacking/env-setup <span class="token parameter variable">-q</span> <span class="token comment"># 加载 ansible</span>
ansible <span class="token parameter variable">--version</span> <span class="token comment"># 验证</span>
</code></pre></div><h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory" aria-hidden="true">#</a> inventory</h2>`,4)),s("p",null,[a[14]||(a[14]=n("Ansible 可同事操作属于一个组的多台主机，组和主机之间的关系通过 ")),s("a",y,[a[13]||(a[13]=n("inventory")),e(t)]),a[15]||(a[15]=n(" 文件配置。默认的文件路径为 ")),a[16]||(a[16]=s("code",null,"/etc/ansible/hosts",-1)),a[17]||(a[17]=n("，除默认文件外，还可以使用多个 inventory 文件，当然也可以从云上拉取配置信息。"))]),a[51]||(a[51]=p(`<h3 id="_1-ini-like" tabindex="-1"><a class="header-anchor" href="#_1-ini-like" aria-hidden="true">#</a> 1. INI-like</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mail.example.com

<span class="token punctuation">[</span>t1<span class="token punctuation">]</span>
<span class="token number">192.168</span>.1.11
<span class="token number">192.168</span>.1.12

<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
www<span class="token punctuation">[</span>01:50<span class="token punctuation">]</span>.example.com

<span class="token punctuation">[</span>db<span class="token punctuation">]</span>
db-<span class="token punctuation">[</span>a:f<span class="token punctuation">]</span>.example.com

<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
foo.example.com
bar.example.com

<span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>
one.example.com
two.example.com
three.example.com:5309
</code></pre></div><h3 id="_2-yaml" tabindex="-1"><a class="header-anchor" href="#_2-yaml" aria-hidden="true">#</a> 2. YAML</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">all</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token key atrule">mail.example.com</span><span class="token punctuation">:</span>
  <span class="token key atrule">children</span><span class="token punctuation">:</span>
    <span class="token key atrule">webservers</span><span class="token punctuation">:</span>
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
        <span class="token key atrule">foo.example.com</span><span class="token punctuation">:</span>
        <span class="token key atrule">bar.example.com</span><span class="token punctuation">:</span>
    <span class="token key atrule">dbservers</span><span class="token punctuation">:</span>
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
        <span class="token key atrule">one.example.com</span><span class="token punctuation">:</span>
        <span class="token key atrule">two.example.com</span><span class="token punctuation">:</span>
        <span class="token key atrule">three.example.com</span><span class="token punctuation">:</span>
</code></pre></div><h3 id="_3-inheriting-variable-values" tabindex="-1"><a class="header-anchor" href="#_3-inheriting-variable-values" aria-hidden="true">#</a> 3. Inheriting variable values</h3><p>在这种情况下自己书写规则 INI-like 风格更方便一些，但是接手他人的时候更希望看到 YAML 风格，更一目了然。</p><ul><li><p>INI-like</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atlanta<span class="token punctuation">]</span>
host1
host2

<span class="token punctuation">[</span>raleigh<span class="token punctuation">]</span>
host2
host3

<span class="token punctuation">[</span>southeast:children<span class="token punctuation">]</span>
atlanta
raleigh

<span class="token punctuation">[</span>southeast:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">some_server</span><span class="token operator">=</span>foo.southeast.example.com
<span class="token assign-left variable">halon_system_timeout</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">self_destruct_countdown</span><span class="token operator">=</span><span class="token number">60</span>
<span class="token assign-left variable">escape_pods</span><span class="token operator">=</span><span class="token number">2</span>

<span class="token punctuation">[</span>usa:children<span class="token punctuation">]</span>
southeast
northeast
southwest
northwest
</code></pre></div></li><li><p>YAML</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">all</span><span class="token punctuation">:</span>
  <span class="token key atrule">children</span><span class="token punctuation">:</span>
    <span class="token key atrule">usa</span><span class="token punctuation">:</span>
      <span class="token key atrule">children</span><span class="token punctuation">:</span>
        <span class="token key atrule">southeast</span><span class="token punctuation">:</span>
          <span class="token key atrule">children</span><span class="token punctuation">:</span>
            <span class="token key atrule">atlanta</span><span class="token punctuation">:</span>
              <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
                <span class="token key atrule">host1</span><span class="token punctuation">:</span>
                <span class="token key atrule">host2</span><span class="token punctuation">:</span>
            <span class="token key atrule">raleigh</span><span class="token punctuation">:</span>
              <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
                <span class="token key atrule">host2</span><span class="token punctuation">:</span>
                <span class="token key atrule">host3</span><span class="token punctuation">:</span>
          <span class="token key atrule">vars</span><span class="token punctuation">:</span>
            <span class="token key atrule">some_server</span><span class="token punctuation">:</span> foo.southeast.example.com
            <span class="token key atrule">halon_system_timeout</span><span class="token punctuation">:</span> <span class="token number">30</span>
            <span class="token key atrule">self_destruct_countdown</span><span class="token punctuation">:</span> <span class="token number">60</span>
            <span class="token key atrule">escape_pods</span><span class="token punctuation">:</span> <span class="token number">2</span>
        <span class="token key atrule">northeast</span><span class="token punctuation">:</span>
        <span class="token key atrule">northwest</span><span class="token punctuation">:</span>
        <span class="token key atrule">southwest</span><span class="token punctuation">:</span>
</code></pre></div></li></ul><h3 id="_4-参数" tabindex="-1"><a class="header-anchor" href="#_4-参数" aria-hidden="true">#</a> 4. 参数</h3><table><thead><tr><th style="text-align:center;">参数</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">ansible_connection</td><td>连接类型到主机。</td></tr><tr><td style="text-align:center;">ansible_host</td><td>要连接的主机的名称。</td></tr><tr><td style="text-align:center;">ansible_port</td><td>连接端口号。</td></tr><tr><td style="text-align:center;">ansible_user</td><td>连接到主机时要使用的用户名。</td></tr><tr><td style="text-align:center;">ansible_password</td><td>身份验证的密码。</td></tr><tr><td style="text-align:center;">ansible_ssh_private_key_file</td><td>ssh使用的私钥文件。</td></tr><tr><td style="text-align:center;">ansible_ssh_common_args</td><td>此设置始终附加到sftp，scp和ssh的默认命令行。</td></tr><tr><td style="text-align:center;">ansible_sftp_extra_args</td><td>此设置始终附加到默认的sftp命令行。</td></tr><tr><td style="text-align:center;">ansible_scp_extra_args</td><td>此设置始终附加到默认scp命令行。</td></tr><tr><td style="text-align:center;">ansible_ssh_extra_args</td><td>此设置始终附加到默认的ssh命令行。</td></tr><tr><td style="text-align:center;">ansible_ssh_pipelining</td><td>确定是否使用SSH流水线。</td></tr><tr><td style="text-align:center;">ansible_ssh_executable</td><td>此设置将覆盖使用系统ssh的默认行为。</td></tr><tr><td style="text-align:center;">ansible_shell_type</td><td>目标系统的shell类型。</td></tr><tr><td style="text-align:center;">ansible_python_interpreter</td><td>目标主机python路径。</td></tr></tbody></table><h2 id="ad-hoc" tabindex="-1"><a class="header-anchor" href="#ad-hoc" aria-hidden="true">#</a> ad-hoc</h2><p>ad-hoc 可以帮助完成临时任务，很多时候并不需要 Ansible 的强大力量（playbook）。</p><p>命令格式：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible <span class="token operator">&lt;</span>pattern_goes_here<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>module_name<span class="token operator">&gt;</span> <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>arguments<span class="token operator">&gt;</span>
</code></pre></div><p>仅列出部分示例。</p>`,14)),s("h3",g,[a[19]||(a[19]=s("a",{class:"header-anchor",href:"#_1-command","aria-hidden":"true"},"#",-1)),a[20]||(a[20]=n(" 1. ")),s("a",v,[a[18]||(a[18]=n("command")),e(t)])]),a[52]||(a[52]=p(`<p>Execute <strong>command</strong>s on targets。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;free -m&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;df -h&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;ls /root&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;cat redhat-release&quot;</span>
</code></pre></div>`,3)),s("h3",f,[a[22]||(a[22]=s("a",{class:"header-anchor",href:"#_2-shell","aria-hidden":"true"},"#",-1)),a[23]||(a[23]=n(" 2. ")),s("a",x,[a[21]||(a[21]=n("shell")),e(t)])]),a[53]||(a[53]=p(`<p>Execute shell commands on targets。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;echo hello &gt; /tmp/tmp.txt&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;cat /tmp/tmp.txt&quot;</span> <span class="token comment"># 验证</span>
</code></pre></div>`,3)),s("h3",w,[a[25]||(a[25]=s("a",{class:"header-anchor",href:"#_3-copy","aria-hidden":"true"},"#",-1)),a[26]||(a[26]=n(" 3. ")),s("a",_,[a[24]||(a[24]=n("copy")),e(t)])]),a[54]||(a[54]=p(`<p>Copy files to remote locations。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible t1 <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/root/shell dest=/tmp&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;ls /tmp&quot;</span> <span class="token comment"># 验证</span>
ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;wc -l /tmp/shell&quot;</span> <span class="token comment"># 验证</span>
</code></pre></div>`,3)),s("h3",q,[a[28]||(a[28]=s("a",{class:"header-anchor",href:"#_4-script","aria-hidden":"true"},"#",-1)),a[29]||(a[29]=n(" 4. ")),s("a",L,[a[27]||(a[27]=n("script")),e(t)])]),a[55]||(a[55]=p(`<p>Runs a local script on a remote node after transferring it。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;echo hello&quot;</span> <span class="token operator">&gt;</span> /tmp/hello.sh
<span class="token function">cat</span> /tmp/hello.sh <span class="token comment"># 验证</span>
ansible t1 <span class="token parameter variable">-m</span> script <span class="token parameter variable">-a</span> <span class="token string">&quot;/tmp/hello.sh&quot;</span> 
</code></pre></div>`,3)),s("h3",I,[a[31]||(a[31]=s("a",{class:"header-anchor",href:"#_5-file","aria-hidden":"true"},"#",-1)),a[32]||(a[32]=n(" 5. ")),s("a",S,[a[30]||(a[30]=n("file")),e(t)])]),a[56]||(a[56]=s("p",null,"Manage files and file properties。",-1)),s("h3",A,[a[34]||(a[34]=s("a",{class:"header-anchor",href:"#_6-yum","aria-hidden":"true"},"#",-1)),a[35]||(a[35]=n(" 6. ")),s("a",M,[a[33]||(a[33]=n("yum")),e(t)])]),a[57]||(a[57]=p(`<p>Manages packages with the yum package manager。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;free -m&quot;</span> <span class="token comment"># 验证</span>

ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=installed&quot;</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># 验证 nginx version: nginx/1.12.2</span>
<span class="token comment"># 可以注意到并非是最新版 nginx</span>
<span class="token comment"># 参照示例 https://docs.shanyuhai.top/os/centos/install-the-latest-version-of-nginx.html</span>
ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=yum-utils state=installed&quot;</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;ll /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># 验证</span>
<span class="token function">vim</span> /etc/yum.repos.d/nginx.repo
<span class="token function">cat</span> /etc/yum.repos.d/nginx.repo <span class="token comment"># 验证</span>
<span class="token comment"># 追加内容参考示例</span>
ansible webservers <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/etc/yum.repos.d/nginx.repo dest=/etc/yum.repos.d/nginx.repo&quot;</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;cat /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># 验证</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;yum-config-manager --enable nginx-mainline&quot;</span>
ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=installed&quot;</span> <span class="token comment"># 更新</span>
<span class="token comment"># installed 测试时未能更新，可能需要 present 参数</span>
<span class="token comment"># 不推荐使用 yum 卸载</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># 验证 </span>
</code></pre></div>`,3)),s("h3",N,[a[37]||(a[37]=s("a",{class:"header-anchor",href:"#_7-systemd","aria-hidden":"true"},"#",-1)),a[38]||(a[38]=n(" 7. ")),s("a",j,[a[36]||(a[36]=n("systemd")),e(t)])]),a[58]||(a[58]=p(`<p>Manage services。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最好将服务写完整</span>
ansible t1 <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=crond.service  enabled=yes state=started&quot;</span>
ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;systemctl status crond&quot;</span> <span class="token comment"># 验证</span>
</code></pre></div>`,3)),s("h3",E,[a[40]||(a[40]=s("a",{class:"header-anchor",href:"#_8-cron","aria-hidden":"true"},"#",-1)),a[41]||(a[41]=n(" 8. ")),s("a",V,[a[39]||(a[39]=n("cron")),e(t)])]),a[59]||(a[59]=p(`<p>Manage cron.d and crontab entries。</p><p>实践：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ansible webservers <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=&#39;sync time&#39; minute=00 hour=00 job=&#39;/usr/sbin/ntpdate time.nist.gov &gt; /dev/null 2&gt;&amp;1&#39;&quot;</span> 
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># 验证</span>

<span class="token comment"># 删除任务</span>
ansible webservers <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=&#39;sync time&#39; state=absent&quot;</span> 
ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># 验证</span>
</code></pre></div><h2 id="playbooks" tabindex="-1"><a class="header-anchor" href="#playbooks" aria-hidden="true">#</a> playbooks</h2><p>相对于 ad-hoc，playbooks 则强大的多，当然也复杂得多。playbook 由一个或多个 plays 组成，在 play 中，一组机器被映射为定义好的角色，其内容被称为 tasks（任务），在基本层次的应用中，一个任务是一个对 ansible 模块的调用。</p>`,5)),s("p",null,[a[43]||(a[43]=n("对于如何良好的实践这些内容，有一些整套的 ")),s("a",P,[a[42]||(a[42]=n("playbooks")),e(t)]),a[44]||(a[44]=n("。"))]),a[60]||(a[60]=p(`<h3 id="_1-one-play" tabindex="-1"><a class="header-anchor" href="#_1-one-play" aria-hidden="true">#</a> 1. one play</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">200</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file
    <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/httpd.j2
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> restart apache
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
</code></pre></div><h3 id="_2-multiple-plays" tabindex="-1"><a class="header-anchor" href="#_2-multiple-plays" aria-hidden="true">#</a> 2. multiple plays</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root

  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file
    <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/httpd.j2
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd.conf

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root

  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure postgresql is at the latest version
    <span class="token key atrule">yum</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> postgresql
      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure that postgresql is started
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> postgresql
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
</code></pre></div><h3 id="_3-directory-layout" tabindex="-1"><a class="header-anchor" href="#_3-directory-layout" aria-hidden="true">#</a> 3. Directory Layout</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>production                <span class="token comment"># inventory file for production servers</span>
staging                   <span class="token comment"># inventory file for staging environment</span>

group_vars/
   group1.yml             <span class="token comment"># here we assign variables to particular groups</span>
   group2.yml
host_vars/
   hostname1.yml          <span class="token comment"># here we assign variables to particular systems</span>
   hostname2.yml

library/                  <span class="token comment"># if any custom modules, put them here (optional)</span>
module_utils/             <span class="token comment"># if any custom module_utils to support modules, put them here (optional)</span>
filter_plugins/           <span class="token comment"># if any custom filter plugins, put them here (optional)</span>

site.yml                  <span class="token comment"># master playbook</span>
webservers.yml            <span class="token comment"># playbook for webserver tier</span>
dbservers.yml             <span class="token comment"># playbook for dbserver tier</span>

roles/
    common/               <span class="token comment"># this hierarchy represents a &quot;role&quot;</span>
        tasks/            <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- tasks file can include smaller files if warranted</span>
        handlers/         <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- handlers file</span>
        templates/        <span class="token comment">#  &lt;-- files for use with the template resource</span>
            ntp.conf.j2   <span class="token comment">#  &lt;------- templates end in .j2</span>
        files/            <span class="token comment">#</span>
            bar.txt       <span class="token comment">#  &lt;-- files for use with the copy resource</span>
            foo.sh        <span class="token comment">#  &lt;-- script files for use with the script resource</span>
        vars/             <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- variables associated with this role</span>
        defaults/         <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- default lower priority variables for this role</span>
        meta/             <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- role dependencies</span>
        library/          <span class="token comment"># roles can also include custom modules</span>
        module_utils/     <span class="token comment"># roles can also include custom module_utils</span>
        lookup_plugins/   <span class="token comment"># or other types of plugins, like lookup in this case</span>

    webtier/              <span class="token comment"># same kind of structure as &quot;common&quot; was above, done for the webtier role</span>
    monitoring/           <span class="token comment"># &quot;&quot;</span>
    fooapp/               <span class="token comment"># &quot;&quot;</span>
</code></pre></div><p>备用方案：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>inventories/
   production/
      hosts               <span class="token comment"># inventory file for production servers</span>
      group_vars/
         group1.yml       <span class="token comment"># here we assign variables to particular groups</span>
         group2.yml
      host_vars/
         hostname1.yml    <span class="token comment"># here we assign variables to particular systems</span>
         hostname2.yml

   staging/
      hosts               <span class="token comment"># inventory file for staging environment</span>
      group_vars/
         group1.yml       <span class="token comment"># here we assign variables to particular groups</span>
         group2.yml
      host_vars/
         stagehost1.yml   <span class="token comment"># here we assign variables to particular systems</span>
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
</code></pre></div>`,8))])}const C=i(m,[["render",R],["__file","ansible.html.vue"]]);export{C as default};
