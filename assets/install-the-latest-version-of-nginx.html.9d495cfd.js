import{e as n}from"./app.6e167110.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},e=n(`<h1 id="ubuntu-\u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684-nginx" tabindex="-1"><a class="header-anchor" href="#ubuntu-\u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684-nginx" aria-hidden="true">#</a> Ubuntu \u4E0B\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 Nginx</h1><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> gnupg2 ca-certificates lsb-release
</code></pre></div><h2 id="\u66F4\u65B0\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6E90" aria-hidden="true">#</a> \u66F4\u65B0\u6E90</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u7A33\u5B9A\u7248</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://nginx.org/packages/ubuntu <span class="token variable"><span class="token variable">\`</span>lsb_release -cs<span class="token variable">\`</span></span> nginx&quot;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list

<span class="token comment"># \u6700\u65B0\u7248</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://nginx.org/packages/mainline/ubuntu <span class="token variable"><span class="token variable">\`</span>lsb_release -cs<span class="token variable">\`</span></span> nginx&quot;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list
</code></pre></div><h2 id="\u9A8C\u8BC1-nginx" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1-nginx" aria-hidden="true">#</a> \u9A8C\u8BC1 Nginx</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL https://nginx.org/keys/nginx_signing.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token comment"># \u8F93\u51FA OK \u5219\u6B63\u786E</span>
<span class="token function">sudo</span> apt-key fingerprint ABF5BD827BD9BF62
<span class="token comment"># \u5BF9\u6BD4\u8F93\u51FA\u7ED3\u679C\u662F\u5426\u4E3A</span>
<span class="token comment"># pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]</span>
<span class="token comment">#      573B FD6B 3D8F BC64 1079  A6AB ABF5 BD82 7BD9 BF62</span>
<span class="token comment"># uid   [ unknown] nginx signing key &lt;signing-key@nginx.com&gt;</span>
</code></pre></div><h2 id="\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u5B89\u88C5 Nginx</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token comment"># \u66F4\u65B0</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx <span class="token comment"># \u5B89\u88C5</span>

nginx -v <span class="token comment"># \u9A8C\u8BC1</span>
<span class="token comment"># nginx version: nginx/1.17.3</span>
</code></pre></div>`,9);function t(c,o){return e}var l=s(a,[["render",t]]);export{l as default};
