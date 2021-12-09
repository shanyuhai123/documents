import{r as p,c,a as s,b as a,w as l,F as r,d as n,e as t,o as i}from"./app.d7f6ba63.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const d={},m=s("h1",{id:"\u5206\u53D1\u811A\u672C-ansible",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5206\u53D1\u811A\u672C-ansible","aria-hidden":"true"},"#"),n(" \u5206\u53D1\u811A\u672C ansible")],-1),h=s("p",null,"\u867D\u7136\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5199 Shell \u5B9E\u73B0\u5206\u53D1\u811A\u672C\uFF0C\u4F46\u7531\u4E8E\u7F3A\u4E4F\u8FD0\u7EF4\u7CFB\u7EDF\u6982\u5FF5\uFF0C\u6DF7\u4E71\u3001\u96F6\u788E\u7684\u5199\u6CD5\u603B\u662F\u8BA9\u4EBA\u96BE\u53D7\uFF0C\u4E00\u63A5\u89E6\u5230 ansible \u5C31\u77E5\u9053\u5F88\u96BE\u56DE\u53BB\u4E86\u3002",-1),k=n("Ansible \u662F\u4E00\u4E2A\u7528\u6765\u6279\u91CF\u7BA1\u7406\u90E8\u7F72\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u670D\u52A1\u7684\u5DE5\u5177\uFF0C\u5B83\u901A\u8FC7 SSH \u534F\u8BAE\u5B9E\u73B0\u7BA1\u7406\u8282\u70B9\u4E0E\u8FDC\u7A0B\u8282\u70B9\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u6240\u4EE5\u9996\u5148\u9700\u8981\u5B8C\u6210 "),_=n("SSH \u914D\u7F6E"),b=n("\u3002"),y=t(`<p>\u9700\u8981\u6CE8\u610F\u7684\u662F Ansible \u9700\u8981\u5F00\u542F\u516C\u94A5\u8BA4\u8BC1\uFF0C\u4E5F\u5C31\u662F\u6DFB\u52A0\u5230 <code>known_hosts</code> \u4E2D\uFF0C\u5BF9\u4E8E\u5927\u6279\u91CF\u7684\u64CD\u4F5C\u53EF\u4EE5\u7981\u7528\u8BE5\u884C\u4E3A\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/ansible/ansible.cfg
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9</span>
host_key_checking <span class="token operator">=</span> False <span class="token comment"># \u53D6\u6D88\u6CE8\u91CA</span>
</code></pre></div><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2>`,3),g=n("\u867D\u7136\u53EF\u4EE5\u5F88\u7B80\u5355\u7684\u76F4\u63A5\u4F7F\u7528 "),f={href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum",target:"_blank",rel:"noopener noreferrer"},v=n("yum \u5B89\u88C5"),x=n("\uFF0C\u4F46\u7531\u4E8E ansible \u662F\u4E00\u4E2A python \u7F16\u5199\u7684\u5DE5\u5177\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4 ansible \u4F9D\u8D56\u4E8E\u5168\u5C40\u7684 python\uFF0C\u5F53\u5168\u5C40\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u53EF\u80FD\u5BFC\u81F4 ansible \u51FA\u73B0\u51B2\u7A81\u6216\u6F5C\u5728\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u6240\u4EE5\u9700\u8981\u9694\u79BB ansible \u4E0E\u5176\u4ED6\u5E94\u7528\u3002"),w=t(`<h3 id="_1-\u5173\u95ED\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#_1-\u5173\u95ED\u9650\u5236" aria-hidden="true">#</a> 1. \u5173\u95ED\u9650\u5236</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token function">vim</span> /etc/sysconfig/selinux
<span class="token comment"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled

<span class="token function">reboot</span>
getenforce <span class="token comment"># \u9A8C\u8BC1 Disabled</span>
</code></pre></div>`,2),q={id:"_2-\u5B89\u88C5-python",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#_2-\u5B89\u88C5-python","aria-hidden":"true"},"#",-1),j=n(" 2. \u5B89\u88C5 "),S={href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"},A=n("python"),I=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">wget</span> https://www.python.org/ftp/python/3.6.9/Python-3.6.9.tar.xz
<span class="token function">tar</span> xf Python-3.6.9.tar.xz
<span class="token builtin class-name">cd</span> Python-3.6.9
./configure --prefix<span class="token operator">=</span>/usr/local --with-ensurepip<span class="token operator">=</span>install --enable-shared <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-Wl,-rpath /usr/local/lib&quot;</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> altinstall
<span class="token function">which</span> pip3.6
<span class="token function">ln</span> -s /usr/local/bin/pip3.6 /usr/local/bin/pip <span class="token comment"># \u5EFA\u7ACB\u8F6F\u8FDE\u63A5</span>
pip <span class="token function">install</span> virtualenv
</code></pre></div><h3 id="_3-\u521B\u5EFA\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u5B9E\u4F8B" aria-hidden="true">#</a> 3. \u521B\u5EFA\u5B9E\u4F8B</h3><p>\u9700\u8981\u521B\u5EFA\u4E00\u4E2A ansible \u7528\u6237\uFF0C\u5E76\u5728\u8BE5\u7CFB\u7EDF\u7528\u6237\u4E0B\u521B\u5EFA\u4E00\u4E2A python3.6 \u7248\u672C\u7684 virtualenv \u5B9E\u4F8B\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">useradd</span> deploy
<span class="token function">su</span> - deploy
virtualenv -p /usr/local/bin/python3.6 .py3-a2.8-env <span class="token comment"># \u521B\u5EFA\u5B9E\u4F8B</span>
<span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/bin/activate
pip <span class="token function">install</span> paramiko PyYAML  jinja2 <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\uFF0C\u4FDD\u6301\u987A\u5E8F</span>
</code></pre></div><h3 id="_4-\u5B89\u88C5-ansible" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5-ansible" aria-hidden="true">#</a> 4. \u5B89\u88C5 ansible</h3>`,5),M={href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-release-via-dnf-or-yum",target:"_blank",rel:"noopener noreferrer"},N=n("\u5B98\u7F51"),E=n("\u63A8\u8350\u7684\u5B89\u88C5\u65B9\u5F0F\uFF0C\u5F53\u4E0B\u8F7D\u901F\u5EA6\u6781\u6162\u65F6\u7684"),F=n("\u89E3\u51B3\u65B9\u6848"),P=n("\u3002"),V=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/shanyuhai123/ansible.git
<span class="token function">mv</span> ansible .py3-a2.8-env/
<span class="token builtin class-name">cd</span> .py3-a2.8-env/ansible
<span class="token function">git</span> branch -a <span class="token comment"># \u67E5\u770B\u5206\u652F</span>
<span class="token function">git</span> checkout stable-2.8
<span class="token builtin class-name">source</span> /home/deploy/.py3-a2.8-env/ansible/hacking/env-setup -q
ansible --version <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h3 id="_5-\u542F\u7528-ansible" tabindex="-1"><a class="header-anchor" href="#_5-\u542F\u7528-ansible" aria-hidden="true">#</a> 5. \u542F\u7528 ansible</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">shutdown</span> -r now <span class="token comment"># \u91CD\u542F</span>

<span class="token function">su</span> - deploy
<span class="token builtin class-name">source</span> .py3-a2.8-env/bin/activate <span class="token comment"># \u52A0\u8F7D py3</span>
<span class="token builtin class-name">source</span> .py3-a2.8-env/ansible/hacking/env-setup -q <span class="token comment"># \u52A0\u8F7D ansible</span>
ansible --version <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory" aria-hidden="true">#</a> inventory</h2>`,4),Y=n("Ansible \u53EF\u540C\u4E8B\u64CD\u4F5C\u5C5E\u4E8E\u4E00\u4E2A\u7EC4\u7684\u591A\u53F0\u4E3B\u673A\uFF0C\u7EC4\u548C\u4E3B\u673A\u4E4B\u95F4\u7684\u5173\u7CFB\u901A\u8FC7 "),B={href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html",target:"_blank",rel:"noopener noreferrer"},C=n("inventory"),D=n(" \u6587\u4EF6\u914D\u7F6E\u3002\u9ED8\u8BA4\u7684\u6587\u4EF6\u8DEF\u5F84\u4E3A "),H=s("code",null,"/etc/ansible/hosts",-1),R=n("\uFF0C\u9664\u9ED8\u8BA4\u6587\u4EF6\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A inventory \u6587\u4EF6\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4ECE\u4E91\u4E0A\u62C9\u53D6\u914D\u7F6E\u4FE1\u606F\u3002"),z=t(`<h3 id="_1-ini-like" tabindex="-1"><a class="header-anchor" href="#_1-ini-like" aria-hidden="true">#</a> 1. INI-like</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>mail.example.com

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
</code></pre></div><h3 id="_2-yaml" tabindex="-1"><a class="header-anchor" href="#_2-yaml" aria-hidden="true">#</a> 2. YAML</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">all</span><span class="token punctuation">:</span>
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
</code></pre></div><h3 id="_3-inheriting-variable-values" tabindex="-1"><a class="header-anchor" href="#_3-inheriting-variable-values" aria-hidden="true">#</a> 3. Inheriting variable values</h3><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u81EA\u5DF1\u4E66\u5199\u89C4\u5219 INI-like \u98CE\u683C\u66F4\u65B9\u4FBF\u4E00\u4E9B\uFF0C\u4F46\u662F\u63A5\u624B\u4ED6\u4EBA\u7684\u65F6\u5019\u66F4\u5E0C\u671B\u770B\u5230 YAML \u98CE\u683C\uFF0C\u66F4\u4E00\u76EE\u4E86\u7136\u3002</p><ul><li><p>INI-like</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atlanta<span class="token punctuation">]</span>
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
</code></pre></div></li><li><p>YAML</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">all</span><span class="token punctuation">:</span>
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
</code></pre></div></li></ul><h3 id="_4-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u6570" aria-hidden="true">#</a> 4. \u53C2\u6570</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">ansible_connection</td><td>\u8FDE\u63A5\u7C7B\u578B\u5230\u4E3B\u673A\u3002</td></tr><tr><td style="text-align:center;">ansible_host</td><td>\u8981\u8FDE\u63A5\u7684\u4E3B\u673A\u7684\u540D\u79F0\u3002</td></tr><tr><td style="text-align:center;">ansible_port</td><td>\u8FDE\u63A5\u7AEF\u53E3\u53F7\u3002</td></tr><tr><td style="text-align:center;">ansible_user</td><td>\u8FDE\u63A5\u5230\u4E3B\u673A\u65F6\u8981\u4F7F\u7528\u7684\u7528\u6237\u540D\u3002</td></tr><tr><td style="text-align:center;">ansible_password</td><td>\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u5BC6\u7801\u3002</td></tr><tr><td style="text-align:center;">ansible_ssh_private_key_file</td><td>ssh\u4F7F\u7528\u7684\u79C1\u94A5\u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;">ansible_ssh_common_args</td><td>\u6B64\u8BBE\u7F6E\u59CB\u7EC8\u9644\u52A0\u5230sftp\uFF0Cscp\u548Cssh\u7684\u9ED8\u8BA4\u547D\u4EE4\u884C\u3002</td></tr><tr><td style="text-align:center;">ansible_sftp_extra_args</td><td>\u6B64\u8BBE\u7F6E\u59CB\u7EC8\u9644\u52A0\u5230\u9ED8\u8BA4\u7684sftp\u547D\u4EE4\u884C\u3002</td></tr><tr><td style="text-align:center;">ansible_scp_extra_args</td><td>\u6B64\u8BBE\u7F6E\u59CB\u7EC8\u9644\u52A0\u5230\u9ED8\u8BA4scp\u547D\u4EE4\u884C\u3002</td></tr><tr><td style="text-align:center;">ansible_ssh_extra_args</td><td>\u6B64\u8BBE\u7F6E\u59CB\u7EC8\u9644\u52A0\u5230\u9ED8\u8BA4\u7684ssh\u547D\u4EE4\u884C\u3002</td></tr><tr><td style="text-align:center;">ansible_ssh_pipelining</td><td>\u786E\u5B9A\u662F\u5426\u4F7F\u7528SSH\u6D41\u6C34\u7EBF\u3002</td></tr><tr><td style="text-align:center;">ansible_ssh_executable</td><td>\u6B64\u8BBE\u7F6E\u5C06\u8986\u76D6\u4F7F\u7528\u7CFB\u7EDFssh\u7684\u9ED8\u8BA4\u884C\u4E3A\u3002</td></tr><tr><td style="text-align:center;">ansible_shell_type</td><td>\u76EE\u6807\u7CFB\u7EDF\u7684shell\u7C7B\u578B\u3002</td></tr><tr><td style="text-align:center;">ansible_python_interpreter</td><td>\u76EE\u6807\u4E3B\u673Apython\u8DEF\u5F84\u3002</td></tr></tbody></table><h2 id="ad-hoc" tabindex="-1"><a class="header-anchor" href="#ad-hoc" aria-hidden="true">#</a> ad-hoc</h2><p>ad-hoc \u53EF\u4EE5\u5E2E\u52A9\u5B8C\u6210\u4E34\u65F6\u4EFB\u52A1\uFF0C\u5F88\u591A\u65F6\u5019\u5E76\u4E0D\u9700\u8981 Ansible \u7684\u5F3A\u5927\u529B\u91CF\uFF08playbook\uFF09\u3002</p><p>\u547D\u4EE4\u683C\u5F0F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible <span class="token operator">&lt;</span>pattern_goes_here<span class="token operator">&gt;</span> -m <span class="token operator">&lt;</span>module_name<span class="token operator">&gt;</span> -a <span class="token operator">&lt;</span>arguments<span class="token operator">&gt;</span>
</code></pre></div><p>\u4EC5\u5217\u51FA\u90E8\u5206\u793A\u4F8B\u3002</p>`,14),O={id:"_1-command",tabindex:"-1"},G=s("a",{class:"header-anchor",href:"#_1-command","aria-hidden":"true"},"#",-1),T=n(" 1. "),U={href:"https://docs.ansible.com/ansible/latest/modules/command_module.html",target:"_blank",rel:"noopener noreferrer"},W=n("command"),X=t(`<p>Execute <strong>command</strong>s on targets\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible t1 -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;free -m&quot;</span>
ansible t1 -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;df -h&quot;</span>
ansible t1 -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;ls /root&quot;</span>
ansible t1 -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;cat redhat-release&quot;</span>
</code></pre></div>`,3),J={id:"_2-shell",tabindex:"-1"},K=s("a",{class:"header-anchor",href:"#_2-shell","aria-hidden":"true"},"#",-1),Q=n(" 2. "),Z={href:"https://docs.ansible.com/ansible/latest/modules/shell_module.html",target:"_blank",rel:"noopener noreferrer"},$=n("shell"),ss=t(`<p>Execute shell commands on targets\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible t1 -m shell -a <span class="token string">&quot;echo hello &gt; /tmp/tmp.txt&quot;</span>
ansible t1 -m shell -a <span class="token string">&quot;cat /tmp/tmp.txt&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div>`,3),ns={id:"_3-copy",tabindex:"-1"},as=s("a",{class:"header-anchor",href:"#_3-copy","aria-hidden":"true"},"#",-1),es=n(" 3. "),ts={href:"https://docs.ansible.com/ansible/latest/modules/copy_module.html",target:"_blank",rel:"noopener noreferrer"},os=n("copy"),ps=t(`<p>Copy files to remote locations\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible t1 -m copy -a <span class="token string">&quot;src=/root/shell dest=/tmp&quot;</span>
ansible t1 -m shell -a <span class="token string">&quot;ls /tmp&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
ansible t1 -m shell -a <span class="token string">&quot;wc -l /tmp/shell&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div>`,3),ls={id:"_4-script",tabindex:"-1"},cs=s("a",{class:"header-anchor",href:"#_4-script","aria-hidden":"true"},"#",-1),rs=n(" 4. "),is={href:"https://docs.ansible.com/ansible/latest/modules/script_module.html",target:"_blank",rel:"noopener noreferrer"},us=n("script"),ds=t(`<p>Runs a local script on a remote node after transferring it\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;echo hello&quot;</span> <span class="token operator">&gt;</span> /tmp/hello.sh
<span class="token function">cat</span> /tmp/hello.sh <span class="token comment"># \u9A8C\u8BC1</span>
ansible t1 -m script -a <span class="token string">&quot;/tmp/hello.sh&quot;</span> 
</code></pre></div>`,3),ms={id:"_5-file",tabindex:"-1"},hs=s("a",{class:"header-anchor",href:"#_5-file","aria-hidden":"true"},"#",-1),ks=n(" 5. "),_s={href:"https://docs.ansible.com/ansible/latest/modules/file_module.html",target:"_blank",rel:"noopener noreferrer"},bs=n("file"),ys=s("p",null,"Manage files and file properties\u3002",-1),gs={id:"_6-yum",tabindex:"-1"},fs=s("a",{class:"header-anchor",href:"#_6-yum","aria-hidden":"true"},"#",-1),vs=n(" 6. "),xs={href:"https://docs.ansible.com/ansible/latest/modules/yum_module.html",target:"_blank",rel:"noopener noreferrer"},ws=n("yum"),qs=t(`<p>Manages packages with the yum package manager\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;free -m&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>

ansible webservers -m yum -a <span class="token string">&quot;name=nginx state=installed&quot;</span>
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># \u9A8C\u8BC1 nginx version: nginx/1.12.2</span>
<span class="token comment"># \u53EF\u4EE5\u6CE8\u610F\u5230\u5E76\u975E\u662F\u6700\u65B0\u7248 nginx</span>
<span class="token comment"># \u53C2\u7167\u793A\u4F8B https://docs.shanyuhai.top/os/centos/install-the-latest-version-of-nginx.html</span>
ansible webservers -m yum -a <span class="token string">&quot;name=yum-utils state=installed&quot;</span>
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;ll /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
<span class="token function">vim</span> /etc/yum.repos.d/nginx.repo
<span class="token function">cat</span> /etc/yum.repos.d/nginx.repo <span class="token comment"># \u9A8C\u8BC1</span>
<span class="token comment"># \u8FFD\u52A0\u5185\u5BB9\u53C2\u8003\u793A\u4F8B</span>
ansible webservers -m copy -a <span class="token string">&quot;src=/etc/yum.repos.d/nginx.repo dest=/etc/yum.repos.d/nginx.repo&quot;</span>
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;cat /etc/yum.repos.d/nginx.repo&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;yum-config-manager --enable nginx-mainline&quot;</span>
ansible webservers -m yum -a <span class="token string">&quot;name=nginx state=installed&quot;</span> <span class="token comment"># \u66F4\u65B0</span>
<span class="token comment"># installed \u6D4B\u8BD5\u65F6\u672A\u80FD\u66F4\u65B0\uFF0C\u53EF\u80FD\u9700\u8981 present \u53C2\u6570</span>
<span class="token comment"># \u4E0D\u63A8\u8350\u4F7F\u7528 yum \u5378\u8F7D</span>
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;nginx -v&quot;</span> <span class="token comment"># \u9A8C\u8BC1 </span>
</code></pre></div>`,3),Ls={id:"_7-systemd",tabindex:"-1"},js=s("a",{class:"header-anchor",href:"#_7-systemd","aria-hidden":"true"},"#",-1),Ss=n(" 7. "),As={href:"https://docs.ansible.com/ansible/latest/modules/systemd_module.html",target:"_blank",rel:"noopener noreferrer"},Is=n("systemd"),Ms=t(`<p>Manage services\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6700\u597D\u5C06\u670D\u52A1\u5199\u5B8C\u6574</span>
ansible t1 -m systemd -a <span class="token string">&quot;name=crond.service  enabled=yes state=started&quot;</span>
ansible t1 -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;systemctl status crond&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div>`,3),Ns={id:"_8-cron",tabindex:"-1"},Es=s("a",{class:"header-anchor",href:"#_8-cron","aria-hidden":"true"},"#",-1),Fs=n(" 8. "),Ps={href:"https://docs.ansible.com/ansible/latest/modules/cron_module.html",target:"_blank",rel:"noopener noreferrer"},Vs=n("cron"),Ys=t(`<p>Manage cron.d and crontab entries\u3002</p><p>\u5B9E\u8DF5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>ansible webservers -m <span class="token function">cron</span> -a <span class="token string">&quot;name=&#39;sync time&#39; minute=00 hour=00 job=&#39;/usr/sbin/ntpdate time.nist.gov &gt; /dev/null 2&gt;&amp;1&#39;&quot;</span> 
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>

<span class="token comment"># \u5220\u9664\u4EFB\u52A1</span>
ansible webservers -m <span class="token function">cron</span> -a <span class="token string">&quot;name=&#39;sync time&#39; state=absent&quot;</span> 
ansible webservers -m <span class="token builtin class-name">command</span> -a <span class="token string">&quot;crontab -l&quot;</span> <span class="token comment"># \u9A8C\u8BC1</span>
</code></pre></div><h2 id="playbooks" tabindex="-1"><a class="header-anchor" href="#playbooks" aria-hidden="true">#</a> playbooks</h2><p>\u76F8\u5BF9\u4E8E ad-hoc\uFF0Cplaybooks \u5219\u5F3A\u5927\u7684\u591A\uFF0C\u5F53\u7136\u4E5F\u590D\u6742\u5F97\u591A\u3002playbook \u7531\u4E00\u4E2A\u6216\u591A\u4E2A plays \u7EC4\u6210\uFF0C\u5728 play \u4E2D\uFF0C\u4E00\u7EC4\u673A\u5668\u88AB\u6620\u5C04\u4E3A\u5B9A\u4E49\u597D\u7684\u89D2\u8272\uFF0C\u5176\u5185\u5BB9\u88AB\u79F0\u4E3A tasks\uFF08\u4EFB\u52A1\uFF09\uFF0C\u5728\u57FA\u672C\u5C42\u6B21\u7684\u5E94\u7528\u4E2D\uFF0C\u4E00\u4E2A\u4EFB\u52A1\u662F\u4E00\u4E2A\u5BF9 ansible \u6A21\u5757\u7684\u8C03\u7528\u3002</p>`,5),Bs=n("\u5BF9\u4E8E\u5982\u4F55\u826F\u597D\u7684\u5B9E\u8DF5\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u6709\u4E00\u4E9B\u6574\u5957\u7684 "),Cs={href:"https://github.com/ansible/ansible-examples",target:"_blank",rel:"noopener noreferrer"},Ds=n("playbooks"),Hs=n("\u3002"),Rs=t(`<h3 id="_1-one-play" tabindex="-1"><a class="header-anchor" href="#_1-one-play" aria-hidden="true">#</a> 1. one play</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre></div><h3 id="_2-multiple-plays" tabindex="-1"><a class="header-anchor" href="#_2-multiple-plays" aria-hidden="true">#</a> 2. multiple plays</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
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
</code></pre></div><h3 id="_3-directory-layout" tabindex="-1"><a class="header-anchor" href="#_3-directory-layout" aria-hidden="true">#</a> 3. Directory Layout</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code>production                <span class="token comment"># inventory file for production servers</span>
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
</code></pre></div><p>\u5907\u7528\u65B9\u6848\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code>inventories/
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
</code></pre></div>`,8);function zs(Os,Gs){const o=p("RouterLink"),e=p("OutboundLink");return i(),c(r,null,[m,h,s("p",null,[k,a(o,{to:"/os/linux/login-with-rsa-key.html#%E7%94%9F%E6%88%90-rsa"},{default:l(()=>[_]),_:1}),b]),y,s("p",null,[g,s("a",f,[v,a(e)]),x]),w,s("h3",q,[L,j,s("a",S,[A,a(e)])]),I,s("p",null,[s("a",M,[N,a(e)]),E,a(o,{to:"/tools/github/download-huge-project-from-github.html"},{default:l(()=>[F]),_:1}),P]),V,s("p",null,[Y,s("a",B,[C,a(e)]),D,H,R]),z,s("h3",O,[G,T,s("a",U,[W,a(e)])]),X,s("h3",J,[K,Q,s("a",Z,[$,a(e)])]),ss,s("h3",ns,[as,es,s("a",ts,[os,a(e)])]),ps,s("h3",ls,[cs,rs,s("a",is,[us,a(e)])]),ds,s("h3",ms,[hs,ks,s("a",_s,[bs,a(e)])]),ys,s("h3",gs,[fs,vs,s("a",xs,[ws,a(e)])]),qs,s("h3",Ls,[js,Ss,s("a",As,[Is,a(e)])]),Ms,s("h3",Ns,[Es,Fs,s("a",Ps,[Vs,a(e)])]),Ys,s("p",null,[Bs,s("a",Cs,[Ds,a(e)]),Hs]),Rs],64)}var Ws=u(d,[["render",zs]]);export{Ws as default};
