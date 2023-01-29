import{_ as a,p as n,q as s,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="centos-下安装最新版本的-nginx" tabindex="-1"><a class="header-anchor" href="#centos-下安装最新版本的-nginx" aria-hidden="true">#</a> CentOS 下安装最新版本的 Nginx</h1><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> yum-utils
</code></pre></div><h2 id="更新源" tabindex="-1"><a class="header-anchor" href="#更新源" aria-hidden="true">#</a> 更新源</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/nginx.repo

<span class="token comment"># 配置内容为</span>
<span class="token punctuation">[</span>nginx-stable<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx stable repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key

<span class="token punctuation">[</span>nginx-mainline<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx mainline repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/mainline/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key
</code></pre></div><h2 id="启用配置" tabindex="-1"><a class="header-anchor" href="#启用配置" aria-hidden="true">#</a> 启用配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token parameter variable">--enable</span> nginx-mainline
<span class="token comment"># 或 nginx-stable</span>
</code></pre></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> nginx

nginx <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>
<span class="token comment"># nginx version: nginx/1.17.3</span>
</code></pre></div>`,9),o=[p];function l(i,c){return n(),s("div",null,o)}const g=a(t,[["render",l],["__file","install-the-latest-version-of-nginx.html.vue"]]);export{g as default};
