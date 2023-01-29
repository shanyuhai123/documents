import{_ as e,p as t,q as a,a1 as n}from"./framework-49860b1b.js";const s={},r=n(`<h1 id="nginx-的-rewrite-规则" tabindex="-1"><a class="header-anchor" href="#nginx-的-rewrite-规则" aria-hidden="true">#</a> Nginx 的 rewrite 规则</h1><p><code>rewrite</code> 常用于 <code>url</code> 重写，以及重定向。准确来说 <code>rewrite</code> 是作用于 <code>$request_uri</code>。</p><p>其实理解完修改的是 <code>$request_uri</code> 部分即可理解，我之前是卡在这里了。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span> rewrite regex replacement [flag]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: server, location, if

<span class="token comment"># Example</span>
rewrite ^(.*) https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span> <span class="token comment"># https</span>

<span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~ Chrome)</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">rewrite</span> ^(.*)$ /chrome/<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="flag" tabindex="-1"><a class="header-anchor" href="#flag" aria-hidden="true">#</a> flag</h2><table><thead><tr><th style="text-align:center;">flag</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">last</td><td>使用更改的 URI 匹配新位置。</td></tr><tr><td style="text-align:center;">break</td><td>停止处理当前的指令集。</td></tr><tr><td style="text-align:center;">redirect</td><td>返回 302 （临时）重定向。</td></tr><tr><td style="text-align:center;">permanent</td><td>返回 301 （永久）重定向。</td></tr></tbody></table>`,6),c=[r];function o(l,i){return t(),a("div",null,c)}const p=e(s,[["render",o],["__file","rewrite-rules.html.vue"]]);export{p as default};
