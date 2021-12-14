import{e as n}from"./app.53b3c455.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5B57\u7B26\u4E32\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u76F8\u52A0" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u76F8\u52A0</h1><h2 id="\u6A21\u62DF\u8FDB\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u8FDB\u4F4D" aria-hidden="true">#</a> \u6A21\u62DF\u8FDB\u4F4D</h2><p>\u53EF\u4EE5\u56FA\u5B9A\u6A21 10\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addStrings</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n1 <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n2 <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> carry <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n1 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> n2 <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> carry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>num1<span class="token punctuation">[</span>n1<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>num2<span class="token punctuation">[</span>n2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>carry <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      carry <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      carry <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// push + reverse \u6548\u7387\u66F4\u9AD8</span>
    ret<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
    
    n1<span class="token operator">--</span>
    n2<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};