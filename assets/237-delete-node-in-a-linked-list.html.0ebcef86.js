import{e as n}from"./app.c20c51e5.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n('<h1 id="删除链表中的节点" tabindex="-1"><a class="header-anchor" href="#删除链表中的节点" aria-hidden="true">#</a> 删除链表中的节点</h1><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2><p>入参为删除的节点，所以无法直接将上级的 <code>next</code> 指向下级。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    root<span class="token punctuation">.</span>val <span class="token operator">=</span> root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val\n    root<span class="token punctuation">.</span>next <span class="token operator">=</span> root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',4);var p=a(s,[["render",function(n,a){return t}]]);export{p as default};