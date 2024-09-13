import{_ as a,p as n,q as s,a1 as t}from"./framework-e3e34937.js";const r={};function c(o,e){return n(),s("div",null,e[0]||(e[0]=[t(`<h1 id="处理-nginx-err" tabindex="-1"><a class="header-anchor" href="#处理-nginx-err" aria-hidden="true">#</a> 处理 Nginx ERR</h1><h2 id="net-err-incomplete-chunked-encoding" tabindex="-1"><a class="header-anchor" href="#net-err-incomplete-chunked-encoding" aria-hidden="true">#</a> Net::ERR_INCOMPLETE_CHUNKED_ENCODING</h2><h3 id="_1-磁盘空间不足" tabindex="-1"><a class="header-anchor" href="#_1-磁盘空间不足" aria-hidden="true">#</a> 1. 磁盘空间不足</h3><p>首先查看 <code>nginx</code> 的日志</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tail -f error.log</span>
<span class="token number">2020</span>/07/08 <span class="token number">16</span>:43:44 <span class="token punctuation">[</span>crit<span class="token punctuation">]</span> <span class="token number">2176</span><span class="token comment">#0: *1 pwritev() &quot;/etc/nginx/proxy_temp/1/00/0000000001&quot; failed (28: No space left on device) while reading upstream</span>
</code></pre></div><p>提示空间不足，再验证磁盘空间</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-h</span>
<span class="token comment"># 果然是磁盘占满</span>
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        99G   96G  <span class="token number">2</span>.7G  <span class="token number">100</span>% /
</code></pre></div><p>清理出一部分空间即可使用了。</p>`,8)]))}const d=a(r,[["render",c],["__file","handle-error.html.vue"]]);export{d as default};