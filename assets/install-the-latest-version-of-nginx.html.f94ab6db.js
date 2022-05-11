import{e as n}from"./app.76dc00d2.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=n(`<h1 id="centos-\u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684-nginx" tabindex="-1"><a class="header-anchor" href="#centos-\u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684-nginx" aria-hidden="true">#</a> CentOS \u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 Nginx</h1><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> yum-utils
</code></pre></div><h2 id="\u66F4\u65B0\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6E90" aria-hidden="true">#</a> \u66F4\u65B0\u6E90</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/nginx.repo

<span class="token comment"># \u914D\u7F6E\u5185\u5BB9\u4E3A</span>
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
</code></pre></div><h2 id="\u542F\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u542F\u7528\u914D\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --enable nginx-mainline
<span class="token comment"># \u6216 nginx-stable</span>
</code></pre></div><h2 id="\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u5B89\u88C5 Nginx</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> nginx

nginx -v <span class="token comment"># \u9A8C\u8BC1</span>
<span class="token comment"># nginx version: nginx/1.17.3</span>
</code></pre></div>`,9);function t(p,o){return e}var c=a(s,[["render",t]]);export{c as default};
