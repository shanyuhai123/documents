import{_ as a,p as s,q as e,a1 as t}from"./framework-e3e34937.js";const p={};function c(o,n){return s(),e("div",null,n[0]||(n[0]=[t(`<h1 id="ubuntu-下安装最新版本的-nginx" tabindex="-1"><a class="header-anchor" href="#ubuntu-下安装最新版本的-nginx" aria-hidden="true">#</a> Ubuntu 下安装最新版本的 Nginx</h1><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> gnupg2 ca-certificates lsb-release
</code></pre></div><h2 id="更新源" tabindex="-1"><a class="header-anchor" href="#更新源" aria-hidden="true">#</a> 更新源</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 稳定版</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://nginx.org/packages/ubuntu <span class="token variable"><span class="token variable">\`</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">\`</span></span> nginx&quot;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list

<span class="token comment"># 最新版</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://nginx.org/packages/mainline/ubuntu <span class="token variable"><span class="token variable">\`</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">\`</span></span> nginx&quot;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list
</code></pre></div><h2 id="验证-nginx" tabindex="-1"><a class="header-anchor" href="#验证-nginx" aria-hidden="true">#</a> 验证 Nginx</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://nginx.org/keys/nginx_signing.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token comment"># 输出 OK 则正确</span>
<span class="token function">sudo</span> apt-key fingerprint ABF5BD827BD9BF62
<span class="token comment"># 对比输出结果是否为</span>
<span class="token comment"># pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]</span>
<span class="token comment">#      573B FD6B 3D8F BC64 1079  A6AB ABF5 BD82 7BD9 BF62</span>
<span class="token comment"># uid   [ unknown] nginx signing key &lt;signing-key@nginx.com&gt;</span>
</code></pre></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token comment"># 更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx <span class="token comment"># 安装</span>

nginx <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>
<span class="token comment"># nginx version: nginx/1.17.3</span>
</code></pre></div>`,9)]))}const l=a(p,[["render",c],["__file","install-the-latest-version-of-nginx.html.vue"]]);export{l as default};
