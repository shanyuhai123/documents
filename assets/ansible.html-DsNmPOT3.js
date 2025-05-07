import{_ as o,c,b as a,a as l,d as n,e as p,w as t,r as i,o as r}from"./app-BCSwjUcF.js";const u={};function m(k,s){const e=i("RouteLink");return r(),c("div",null,[s[7]||(s[7]=a("h1",{id:"分发脚本-ansible",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#分发脚本-ansible"},[a("span",null,"分发脚本 ansible")])],-1)),s[8]||(s[8]=a("p",null,"虽然也可以自己写 Shell 实现分发脚本，但由于缺乏运维系统概念，混乱、零碎的写法总是让人难受，一接触到 ansible 就知道很难回去了。",-1)),a("p",null,[s[1]||(s[1]=n("Ansible 是一个用来批量管理部署远程主机上服务的工具，它通过 SSH 协议实现管理节点与远程节点之间的通信，所以首先需要完成 ")),p(e,{to:"/os/linux/login-with-rsa-key.html#%E7%94%9F%E6%88%90-rsa"},{default:t(()=>s[0]||(s[0]=[n("SSH 配置")])),_:1}),s[2]||(s[2]=n("。"))]),s[9]||(s[9]=l(`<p>需要注意的是 Ansible 需要开启公钥认证，也就是添加到 <code>known_hosts</code> 中，对于大批量的操作可以禁用该行为：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /etc/ansible/ansible.cfg</span>
<span class="line"><span class="token comment"># 修改以下内容</span></span>
<span class="line">host_key_checking <span class="token operator">=</span> False <span class="token comment"># 取消注释</span></span>
<span class="line"></span></code></pre></div><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>install</span></a></h2><p>虽然可以很简单的直接使用 <a href="https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum" target="_blank" rel="noopener noreferrer">yum 安装</a>，但由于 ansible 是一个 python 编写的工具，这样就会导致 ansible 依赖于全局的 python，当全局依赖发生变化的时候可能导致 ansible 出现冲突或潜在的安全问题，所以需要隔离 ansible 与其他应用。</p><h3 id="_1-关闭限制" tabindex="-1"><a class="header-anchor" href="#_1-关闭限制"><span>1. 关闭限制</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">systemctl stop firewalld</span>
<span class="line">systemctl disable firewalld</span>
<span class="line">systemctl status firewalld <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token function">vim</span> /etc/sysconfig/selinux</span>
<span class="line"><span class="token comment"># 修改以下内容</span></span>
<span class="line"><span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled</span>
<span class="line"></span>
<span class="line"><span class="token function">reboot</span></span>
<span class="line">getenforce <span class="token comment"># 验证 Disabled</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-安装-python" tabindex="-1"><a class="header-anchor" href="#_2-安装-python"><span>2. 安装 <a href="https://www.python.org/downloads/source/" target="_blank" rel="noopener noreferrer">python</a></span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> https://www.python.org/ftp/python/3.6.9/Python-3.6.9.tar.xz</span>
<span class="line"><span class="token function">tar</span> xf Python-3.6.9.tar.xz</span>
<span class="line"><span class="token builtin class-name">cd</span> Python-3.6.9</span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local --with-ensurepip<span class="token operator">=</span>install --enable-shared <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-Wl,-rpath /usr/local/lib&quot;</span></span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> altinstall</span>
<span class="line"><span class="token function">which</span> pip3.6</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/pip3.6 /usr/local/bin/pip <span class="token comment"># 建立软连接</span></span>
<span class="line">pip <span class="token function">install</span> virtualenv</span>
<span class="line"></span></code></pre></div><h3 id="_3-创建实例" tabindex="-1"><a class="header-anchor" href="#_3-创建实例"><span>3. 创建实例</span></a></h3><p>需要创建一个 ansible 用户，并在该系统用户下创建一个 python3.6 版本的 virtualenv 实例。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">useradd</span> deploy</span>
<span class="line"><span class="token function">su</span> - deploy</span>
<span class="line">virtualenv <span class="token parameter variable">-p</span> /usr/local/bin/python3.6 .py3-a2.8-env <span class="token comment"># 创建实例</span></span>
<span class="line"><span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/bin/activate</span>
<span class="line">pip <span class="token function">install</span> paramiko PyYAML  jinja2 <span class="token comment"># 安装依赖，保持顺序</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-安装-ansible" tabindex="-1"><a class="header-anchor" href="#_4-安装-ansible"><span>4. 安装 ansible</span></a></h3>`,12)),a("p",null,[s[4]||(s[4]=a("a",{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum",target:"_blank",rel:"noopener noreferrer"},"官网",-1)),s[5]||(s[5]=n("推荐的安装方式，当下载速度极慢时的")),p(e,{to:"/tools/github/download-huge-project-from-github.html"},{default:t(()=>s[3]||(s[3]=[n("解决方案")])),_:1}),s[6]||(s[6]=n("。"))]),s[10]||(s[10]=l(`<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://gitee.com/shanyuhai123/ansible.git</span>
<span class="line"><span class="token function">mv</span> ansible .py3-a2.8-env/</span>
<span class="line"><span class="token builtin class-name">cd</span> .py3-a2.8-env/ansible</span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-a</span> <span class="token comment"># 查看分支</span></span>
<span class="line"><span class="token function">git</span> checkout stable-2.8</span>
<span class="line"><span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/ansible/hacking/env-setup <span class="token parameter variable">-q</span></span>
<span class="line">ansible <span class="token parameter variable">--version</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_5-启用-ansible" tabindex="-1"><a class="header-anchor" href="#_5-启用-ansible"><span>5. 启用 ansible</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now <span class="token comment"># 重启</span></span>
<span class="line"></span>
<span class="line"><span class="token function">su</span> - deploy</span>
<span class="line"><span class="token builtin class-name">source</span> .py3-a2.8-env/bin/activate <span class="token comment"># 加载 py3</span></span>
<span class="line"><span class="token builtin class-name">source</span> .py3-a2.8-env/ansible/hacking/env-setup <span class="token parameter variable">-q</span> <span class="token comment"># 加载 ansible</span></span>
<span class="line">ansible <span class="token parameter variable">--version</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory"><span>inventory</span></a></h2><p>Ansible 可同事操作属于一个组的多台主机，组和主机之间的关系通过 <a href="https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html" target="_blank" rel="noopener noreferrer">inventory</a> 文件配置。默认的文件路径为 <code>/etc/ansible/hosts</code>，除默认文件外，还可以使用多个 inventory 文件，当然也可以从云上拉取配置信息。</p><h3 id="_1-ini-like" tabindex="-1"><a class="header-anchor" href="#_1-ini-like"><span>1. INI-like</span></a></h3><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mail.example.com</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>t1<span class="token punctuation">]</span></span>
<span class="line"><span class="token number">192.168</span>.1.11</span>
<span class="line"><span class="token number">192.168</span>.1.12</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>web<span class="token punctuation">]</span></span>
<span class="line">www<span class="token punctuation">[</span>01:50<span class="token punctuation">]</span>.example.com</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>db<span class="token punctuation">]</span></span>
<span class="line">db-<span class="token punctuation">[</span>a:f<span class="token punctuation">]</span>.example.com</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>webservers<span class="token punctuation">]</span></span>
<span class="line">foo.example.com</span>
<span class="line">bar.example.com</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span></span>
<span class="line">one.example.com</span>
<span class="line">two.example.com</span>
<span class="line">three.example.com:5309</span>
<span class="line"></span></code></pre></div><h3 id="_2-yaml" tabindex="-1"><a class="header-anchor" href="#_2-yaml"><span>2. YAML</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">all</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">mail.example.com</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">children</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">webservers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">foo.example.com</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">bar.example.com</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">dbservers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">one.example.com</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">two.example.com</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">three.example.com</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-inheriting-variable-values" tabindex="-1"><a class="header-anchor" href="#_3-inheriting-variable-values"><span>3. Inheriting variable values</span></a></h3><p>在这种情况下自己书写规则 INI-like 风格更方便一些，但是接手他人的时候更希望看到 YAML 风格，更一目了然。</p><ul><li><p>INI-like</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>atlanta<span class="token punctuation">]</span></span>
<span class="line">host1</span>
<span class="line">host2</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>raleigh<span class="token punctuation">]</span></span>
<span class="line">host2</span>
<span class="line">host3</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>southeast:children<span class="token punctuation">]</span></span>
<span class="line">atlanta</span>
<span class="line">raleigh</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>southeast:vars<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">some_server</span><span class="token operator">=</span>foo.southeast.example.com</span>
<span class="line"><span class="token assign-left variable">halon_system_timeout</span><span class="token operator">=</span><span class="token number">30</span></span>
<span class="line"><span class="token assign-left variable">self_destruct_countdown</span><span class="token operator">=</span><span class="token number">60</span></span>
<span class="line"><span class="token assign-left variable">escape_pods</span><span class="token operator">=</span><span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>usa:children<span class="token punctuation">]</span></span>
<span class="line">southeast</span>
<span class="line">northeast</span>
<span class="line">southwest</span>
<span class="line">northwest</span>
<span class="line"></span></code></pre></div></li><li><p>YAML</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">all</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">children</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">usa</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">children</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">southeast</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">children</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">atlanta</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">host1</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">host2</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">raleigh</span><span class="token punctuation">:</span></span>
<span class="line">              <span class="token key atrule">hosts</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">host2</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token key atrule">host3</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">vars</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">some_server</span><span class="token punctuation">:</span> foo.southeast.example.com</span>
<span class="line">            <span class="token key atrule">halon_system_timeout</span><span class="token punctuation">:</span> <span class="token number">30</span></span>
<span class="line">            <span class="token key atrule">self_destruct_countdown</span><span class="token punctuation">:</span> <span class="token number">60</span></span>
<span class="line">            <span class="token key atrule">escape_pods</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="line">        <span class="token key atrule">northeast</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">northwest</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">southwest</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="_4-参数" tabindex="-1"><a class="header-anchor" href="#_4-参数"><span>4. 参数</span></a></h3><table><thead><tr><th style="text-align:center;">参数</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">ansible_connection</td><td>连接类型到主机。</td></tr><tr><td style="text-align:center;">ansible_host</td><td>要连接的主机的名称。</td></tr><tr><td style="text-align:center;">ansible_port</td><td>连接端口号。</td></tr><tr><td style="text-align:center;">ansible_user</td><td>连接到主机时要使用的用户名。</td></tr><tr><td style="text-align:center;">ansible_password</td><td>身份验证的密码。</td></tr><tr><td style="text-align:center;">ansible_ssh_private_key_file</td><td>ssh使用的私钥文件。</td></tr><tr><td style="text-align:center;">ansible_ssh_common_args</td><td>此设置始终附加到sftp，scp和ssh的默认命令行。</td></tr><tr><td style="text-align:center;">ansible_sftp_extra_args</td><td>此设置始终附加到默认的sftp命令行。</td></tr><tr><td style="text-align:center;">ansible_scp_extra_args</td><td>此设置始终附加到默认scp命令行。</td></tr><tr><td style="text-align:center;">ansible_ssh_extra_args</td><td>此设置始终附加到默认的ssh命令行。</td></tr><tr><td style="text-align:center;">ansible_ssh_pipelining</td><td>确定是否使用SSH流水线。</td></tr><tr><td style="text-align:center;">ansible_ssh_executable</td><td>此设置将覆盖使用系统ssh的默认行为。</td></tr><tr><td style="text-align:center;">ansible_shell_type</td><td>目标系统的shell类型。</td></tr><tr><td style="text-align:center;">ansible_python_interpreter</td><td>目标主机python路径。</td></tr></tbody></table><h2 id="ad-hoc" tabindex="-1"><a class="header-anchor" href="#ad-hoc"><span>ad-hoc</span></a></h2><p>ad-hoc 可以帮助完成临时任务，很多时候并不需要 Ansible 的强大力量（playbook）。</p><p>命令格式：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible <span class="token operator">&lt;</span>pattern_goes_here<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>module_name<span class="token operator">&gt;</span> <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>arguments<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre></div><p>仅列出部分示例。</p><h3 id="_1-command" tabindex="-1"><a class="header-anchor" href="#_1-command"><span>1. <a href="https://docs.ansible.com/ansible/latest/modules/command_module.html" target="_blank" rel="noopener noreferrer">command</a></span></a></h3><p>Execute <strong>command</strong>s on targets。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;free -m&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;df -h&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;ls /root&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;cat redhat-release&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-shell" tabindex="-1"><a class="header-anchor" href="#_2-shell"><span>2. <a href="https://docs.ansible.com/ansible/latest/modules/shell_module.html" target="_blank" rel="noopener noreferrer">shell</a></span></a></h3><p>Execute shell commands on targets。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;echo hello &gt; /tmp/tmp.txt&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;cat /tmp/tmp.txt&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-copy" tabindex="-1"><a class="header-anchor" href="#_3-copy"><span>3. <a href="https://docs.ansible.com/ansible/latest/modules/copy_module.html" target="_blank" rel="noopener noreferrer">copy</a></span></a></h3><p>Copy files to remote locations。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible t1 <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/root/shell dest=/tmp&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;ls /tmp&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;wc -l /tmp/shell&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_4-script" tabindex="-1"><a class="header-anchor" href="#_4-script"><span>4. <a href="https://docs.ansible.com/ansible/latest/modules/script_module.html" target="_blank" rel="noopener noreferrer">script</a></span></a></h3><p>Runs a local script on a remote node after transferring it。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;echo hello&quot;</span> <span class="token operator">&gt;</span> /tmp/hello.sh</span>
<span class="line"><span class="token function">cat</span> /tmp/hello.sh <span class="token comment"># 验证</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> script <span class="token parameter variable">-a</span> <span class="token string">&quot;/tmp/hello.sh&quot;</span> </span>
<span class="line"></span></code></pre></div><h3 id="_5-file" tabindex="-1"><a class="header-anchor" href="#_5-file"><span>5. <a href="https://docs.ansible.com/ansible/latest/modules/file_module.html" target="_blank" rel="noopener noreferrer">file</a></span></a></h3><p>Manage files and file properties。</p><h3 id="_6-yum" tabindex="-1"><a class="header-anchor" href="#_6-yum"><span>6. <a href="https://docs.ansible.com/ansible/latest/modules/yum_module.html" target="_blank" rel="noopener noreferrer">yum</a></span></a></h3><p>Manages packages with the yum package manager。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;free -m&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=installed&quot;</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># 验证 nginx version: nginx/1.12.2</span></span>
<span class="line"><span class="token comment"># 可以注意到并非是最新版 nginx</span></span>
<span class="line"><span class="token comment"># 参照示例 https://docs.shanyuhai.top/os/centos/install-the-latest-version-of-nginx.html</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=yum-utils state=installed&quot;</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;ll /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"><span class="token function">vim</span> /etc/yum.repos.d/nginx.repo</span>
<span class="line"><span class="token function">cat</span> /etc/yum.repos.d/nginx.repo <span class="token comment"># 验证</span></span>
<span class="line"><span class="token comment"># 追加内容参考示例</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=/etc/yum.repos.d/nginx.repo dest=/etc/yum.repos.d/nginx.repo&quot;</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;cat /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;yum-config-manager --enable nginx-mainline&quot;</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=nginx state=installed&quot;</span> <span class="token comment"># 更新</span></span>
<span class="line"><span class="token comment"># installed 测试时未能更新，可能需要 present 参数</span></span>
<span class="line"><span class="token comment"># 不推荐使用 yum 卸载</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># 验证 </span></span>
<span class="line"></span></code></pre></div><h3 id="_7-systemd" tabindex="-1"><a class="header-anchor" href="#_7-systemd"><span>7. <a href="https://docs.ansible.com/ansible/latest/modules/systemd_module.html" target="_blank" rel="noopener noreferrer">systemd</a></span></a></h3><p>Manage services。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 最好将服务写完整</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> systemd <span class="token parameter variable">-a</span> <span class="token string">&quot;name=crond.service  enabled=yes state=started&quot;</span></span>
<span class="line">ansible t1 <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;systemctl status crond&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h3 id="_8-cron" tabindex="-1"><a class="header-anchor" href="#_8-cron"><span>8. <a href="https://docs.ansible.com/ansible/latest/modules/cron_module.html" target="_blank" rel="noopener noreferrer">cron</a></span></a></h3><p>Manage cron.d and crontab entries。</p><p>实践：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=&#39;sync time&#39; minute=00 hour=00 job=&#39;/usr/sbin/ntpdate time.nist.gov &gt; /dev/null 2&gt;&amp;1&#39;&quot;</span> </span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除任务</span></span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token function">cron</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=&#39;sync time&#39; state=absent&quot;</span> </span>
<span class="line">ansible webservers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># 验证</span></span>
<span class="line"></span></code></pre></div><h2 id="playbooks" tabindex="-1"><a class="header-anchor" href="#playbooks"><span>playbooks</span></a></h2><p>相对于 ad-hoc，playbooks 则强大的多，当然也复杂得多。playbook 由一个或多个 plays 组成，在 play 中，一组机器被映射为定义好的角色，其内容被称为 tasks（任务），在基本层次的应用中，一个任务是一个对 ansible 模块的调用。</p><p>对于如何良好的实践这些内容，有一些整套的 <a href="https://github.com/ansible/ansible-examples" target="_blank" rel="noopener noreferrer">playbooks</a>。</p><h3 id="_1-one-play" tabindex="-1"><a class="header-anchor" href="#_1-one-play"><span>1. one play</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers</span>
<span class="line">  <span class="token key atrule">vars</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root</span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version</span>
<span class="line">    <span class="token key atrule">yum</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file</span>
<span class="line">    <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/httpd.j2</span>
<span class="line">      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd.conf</span>
<span class="line">    <span class="token key atrule">notify</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> restart apache</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is running</span>
<span class="line">    <span class="token key atrule">service</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> started</span>
<span class="line">  <span class="token key atrule">handlers</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache</span>
<span class="line">      <span class="token key atrule">service</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd</span>
<span class="line">        <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted</span>
<span class="line"></span></code></pre></div><h3 id="_2-multiple-plays" tabindex="-1"><a class="header-anchor" href="#_2-multiple-plays"><span>2. multiple plays</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers</span>
<span class="line">  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure apache is at the latest version</span>
<span class="line">    <span class="token key atrule">yum</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> write the apache config file</span>
<span class="line">    <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/httpd.j2</span>
<span class="line">      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd.conf</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> databases</span>
<span class="line">  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure postgresql is at the latest version</span>
<span class="line">    <span class="token key atrule">yum</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> postgresql</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> latest</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure that postgresql is started</span>
<span class="line">    <span class="token key atrule">service</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> postgresql</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> started</span>
<span class="line"></span></code></pre></div><h3 id="_3-directory-layout" tabindex="-1"><a class="header-anchor" href="#_3-directory-layout"><span>3. Directory Layout</span></a></h3><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">production                <span class="token comment"># inventory file for production servers</span></span>
<span class="line">staging                   <span class="token comment"># inventory file for staging environment</span></span>
<span class="line"></span>
<span class="line">group_vars/</span>
<span class="line">   group1.yml             <span class="token comment"># here we assign variables to particular groups</span></span>
<span class="line">   group2.yml</span>
<span class="line">host_vars/</span>
<span class="line">   hostname1.yml          <span class="token comment"># here we assign variables to particular systems</span></span>
<span class="line">   hostname2.yml</span>
<span class="line"></span>
<span class="line">library/                  <span class="token comment"># if any custom modules, put them here (optional)</span></span>
<span class="line">module_utils/             <span class="token comment"># if any custom module_utils to support modules, put them here (optional)</span></span>
<span class="line">filter_plugins/           <span class="token comment"># if any custom filter plugins, put them here (optional)</span></span>
<span class="line"></span>
<span class="line">site.yml                  <span class="token comment"># master playbook</span></span>
<span class="line">webservers.yml            <span class="token comment"># playbook for webserver tier</span></span>
<span class="line">dbservers.yml             <span class="token comment"># playbook for dbserver tier</span></span>
<span class="line"></span>
<span class="line">roles/</span>
<span class="line">    common/               <span class="token comment"># this hierarchy represents a &quot;role&quot;</span></span>
<span class="line">        tasks/            <span class="token comment">#</span></span>
<span class="line">            main.yml      <span class="token comment">#  &lt;-- tasks file can include smaller files if warranted</span></span>
<span class="line">        handlers/         <span class="token comment">#</span></span>
<span class="line">            main.yml      <span class="token comment">#  &lt;-- handlers file</span></span>
<span class="line">        templates/        <span class="token comment">#  &lt;-- files for use with the template resource</span></span>
<span class="line">            ntp.conf.j2   <span class="token comment">#  &lt;------- templates end in .j2</span></span>
<span class="line">        files/            <span class="token comment">#</span></span>
<span class="line">            bar.txt       <span class="token comment">#  &lt;-- files for use with the copy resource</span></span>
<span class="line">            foo.sh        <span class="token comment">#  &lt;-- script files for use with the script resource</span></span>
<span class="line">        vars/             <span class="token comment">#</span></span>
<span class="line">            main.yml      <span class="token comment">#  &lt;-- variables associated with this role</span></span>
<span class="line">        defaults/         <span class="token comment">#</span></span>
<span class="line">            main.yml      <span class="token comment">#  &lt;-- default lower priority variables for this role</span></span>
<span class="line">        meta/             <span class="token comment">#</span></span>
<span class="line">            main.yml      <span class="token comment">#  &lt;-- role dependencies</span></span>
<span class="line">        library/          <span class="token comment"># roles can also include custom modules</span></span>
<span class="line">        module_utils/     <span class="token comment"># roles can also include custom module_utils</span></span>
<span class="line">        lookup_plugins/   <span class="token comment"># or other types of plugins, like lookup in this case</span></span>
<span class="line"></span>
<span class="line">    webtier/              <span class="token comment"># same kind of structure as &quot;common&quot; was above, done for the webtier role</span></span>
<span class="line">    monitoring/           <span class="token comment"># &quot;&quot;</span></span>
<span class="line">    fooapp/               <span class="token comment"># &quot;&quot;</span></span>
<span class="line"></span></code></pre></div><p>备用方案：</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">inventories/</span>
<span class="line">   production/</span>
<span class="line">      hosts               <span class="token comment"># inventory file for production servers</span></span>
<span class="line">      group_vars/</span>
<span class="line">         group1.yml       <span class="token comment"># here we assign variables to particular groups</span></span>
<span class="line">         group2.yml</span>
<span class="line">      host_vars/</span>
<span class="line">         hostname1.yml    <span class="token comment"># here we assign variables to particular systems</span></span>
<span class="line">         hostname2.yml</span>
<span class="line"></span>
<span class="line">   staging/</span>
<span class="line">      hosts               <span class="token comment"># inventory file for staging environment</span></span>
<span class="line">      group_vars/</span>
<span class="line">         group1.yml       <span class="token comment"># here we assign variables to particular groups</span></span>
<span class="line">         group2.yml</span>
<span class="line">      host_vars/</span>
<span class="line">         stagehost1.yml   <span class="token comment"># here we assign variables to particular systems</span></span>
<span class="line">         stagehost2.yml</span>
<span class="line"></span>
<span class="line">library/</span>
<span class="line">module_utils/</span>
<span class="line">filter_plugins/</span>
<span class="line"></span>
<span class="line">site.yml</span>
<span class="line">webservers.yml</span>
<span class="line">dbservers.yml</span>
<span class="line"></span>
<span class="line">roles/</span>
<span class="line">    common/</span>
<span class="line">    webtier/</span>
<span class="line">    monitoring/</span>
<span class="line">    fooapp/</span>
<span class="line"></span></code></pre></div>`,60))])}const h=o(u,[["render",m]]),b=JSON.parse('{"path":"/os/linux/ansible.html","title":"分发脚本 ansible","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"install","slug":"install","link":"#install","children":[{"level":3,"title":"1. 关闭限制","slug":"_1-关闭限制","link":"#_1-关闭限制","children":[]},{"level":3,"title":"2. 安装 python","slug":"_2-安装-python","link":"#_2-安装-python","children":[]},{"level":3,"title":"3. 创建实例","slug":"_3-创建实例","link":"#_3-创建实例","children":[]},{"level":3,"title":"4. 安装 ansible","slug":"_4-安装-ansible","link":"#_4-安装-ansible","children":[]},{"level":3,"title":"5. 启用 ansible","slug":"_5-启用-ansible","link":"#_5-启用-ansible","children":[]}]},{"level":2,"title":"inventory","slug":"inventory","link":"#inventory","children":[{"level":3,"title":"1. INI-like","slug":"_1-ini-like","link":"#_1-ini-like","children":[]},{"level":3,"title":"2. YAML","slug":"_2-yaml","link":"#_2-yaml","children":[]},{"level":3,"title":"3. Inheriting variable values","slug":"_3-inheriting-variable-values","link":"#_3-inheriting-variable-values","children":[]},{"level":3,"title":"4. 参数","slug":"_4-参数","link":"#_4-参数","children":[]}]},{"level":2,"title":"ad-hoc","slug":"ad-hoc","link":"#ad-hoc","children":[{"level":3,"title":"1. command","slug":"_1-command","link":"#_1-command","children":[]},{"level":3,"title":"2. shell","slug":"_2-shell","link":"#_2-shell","children":[]},{"level":3,"title":"3. copy","slug":"_3-copy","link":"#_3-copy","children":[]},{"level":3,"title":"4. script","slug":"_4-script","link":"#_4-script","children":[]},{"level":3,"title":"5. file","slug":"_5-file","link":"#_5-file","children":[]},{"level":3,"title":"6. yum","slug":"_6-yum","link":"#_6-yum","children":[]},{"level":3,"title":"7. systemd","slug":"_7-systemd","link":"#_7-systemd","children":[]},{"level":3,"title":"8. cron","slug":"_8-cron","link":"#_8-cron","children":[]}]},{"level":2,"title":"playbooks","slug":"playbooks","link":"#playbooks","children":[{"level":3,"title":"1. one play","slug":"_1-one-play","link":"#_1-one-play","children":[]},{"level":3,"title":"2. multiple plays","slug":"_2-multiple-plays","link":"#_2-multiple-plays","children":[]},{"level":3,"title":"3. Directory Layout","slug":"_3-directory-layout","link":"#_3-directory-layout","children":[]}]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/ansible.md"}');export{h as comp,b as data};
