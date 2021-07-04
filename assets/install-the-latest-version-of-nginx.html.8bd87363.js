import{d as n}from"./app.221f0787.js";const a={},s=n('<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> yum-utils\n</code></pre></div><h2 id="更新源" tabindex="-1"><a class="header-anchor" href="#更新源" aria-hidden="true">#</a> 更新源</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/nginx.repo\n\n<span class="token comment"># 配置内容为</span>\n<span class="token punctuation">[</span>nginx-stable<span class="token punctuation">]</span>\n<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx stable repo\n<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/\n<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>\n<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>\n<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key\n\n<span class="token punctuation">[</span>nginx-mainline<span class="token punctuation">]</span>\n<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx mainline repo\n<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/mainline/centos/<span class="token variable">$releasever</span>/<span class="token variable">$basearch</span>/\n<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>\n<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>\n<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://nginx.org/keys/nginx_signing.key\n</code></pre></div><h2 id="启用配置" tabindex="-1"><a class="header-anchor" href="#启用配置" aria-hidden="true">#</a> 启用配置</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --enable nginx-mainline\n<span class="token comment"># 或 nginx-stable</span>\n</code></pre></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> nginx\n\nnginx -v <span class="token comment"># 验证</span>\n<span class="token comment"># nginx version: nginx/1.17.3</span>\n</code></pre></div>',8);a.render=function(n,a){return s};export default a;
