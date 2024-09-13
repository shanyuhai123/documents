import{_ as r,M as t,p as l,q as p,a1 as s,R as a,t as e,N as i}from"./framework-e3e34937.js";const d="/assets/konsole-profile-command-4c719844.png",c={},k={href:"https://forum.manjaro.org/t/konsole-settings-are-not-persistent/2471/6",target:"_blank",rel:"noopener noreferrer"};function h(m,n){const o=t("ExternalLinkIcon");return l(),p("div",null,[n[5]||(n[5]=s('<h1 id="konsole-无法启动" tabindex="-1"><a class="header-anchor" href="#konsole-无法启动" aria-hidden="true">#</a> Konsole 无法启动</h1><p>修改了 Konsole Profile 的 Command 后无法启动。</p><p><img src="'+d+`" alt="Konsole 无法启动"></p><h2 id="排查问题" tabindex="-1"><a class="header-anchor" href="#排查问题" aria-hidden="true">#</a> 排查问题</h2><h3 id="_1-默认操作" tabindex="-1"><a class="header-anchor" href="#_1-默认操作" aria-hidden="true">#</a> 1. 默认操作</h3><p>直接卸载重装 <code>Konsole</code>，失败。</p><h3 id="_2-删除配置文件" tabindex="-1"><a class="header-anchor" href="#_2-删除配置文件" aria-hidden="true">#</a> 2. 删除配置文件</h3><p>不要模仿，其余软件可能导致问题。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> konsole
<span class="token comment"># /usr/bin/konsole /usr/share/konsole</span>
<span class="token comment"># 删除以上文件夹内容，重装依旧失败</span>
</code></pre></div><h3 id="_3-找到-konsole-profile-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-找到-konsole-profile-配置文件" aria-hidden="true">#</a> 3. 找到 konsole profile 配置文件</h3><p>所以最后的问题就是找到 konsole profile 的配置文件。</p>`,11)),a("p",null,[n[1]||(n[1]=e("多番查找下找到了参考")),a("a",k,[n[0]||(n[0]=e("内容")),i(o)]),n[2]||(n[2]=e("，其中指出了配置文件所在位置为 ")),n[3]||(n[3]=a("code",null,"~/.local/share/konsole/xxx.profile",-1)),n[4]||(n[4]=e("。"))]),n[6]||(n[6]=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/konsole/Shell.profile

<span class="token comment"># 找到以下内容</span>
<span class="token punctuation">[</span>General<span class="token punctuation">]</span>
<span class="token assign-left variable">Command</span><span class="token operator">=</span>error <span class="token function">bash</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Shell
<span class="token assign-left variable">Parent</span><span class="token operator">=</span>FALLBACK/
<span class="token assign-left variable">StartInCurrentSessionDir</span><span class="token operator">=</span>true

<span class="token comment"># 将 Command 恢复</span>
</code></pre></div><p>重启启动 <code>Konsole</code>，启用成功。</p>`,2))])}const u=r(c,[["render",h],["__file","konsole-profile-command.html.vue"]]);export{u as default};
