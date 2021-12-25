import{e as n}from"./app.fdddc89c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u53EF\u4EE5\u88AB\u4E00\u6B65\u6355\u83B7\u7684\u68CB\u5B50\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u88AB\u4E00\u6B65\u6355\u83B7\u7684\u68CB\u5B50\u6570" aria-hidden="true">#</a> \u53EF\u4EE5\u88AB\u4E00\u6B65\u6355\u83B7\u7684\u68CB\u5B50\u6570</h1><h2 id="\u66B4\u529B" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B" aria-hidden="true">#</a> \u66B4\u529B</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">numRookCaptures</span><span class="token punctuation">(</span>board<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dx <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> dy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> board<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ry <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// \u5BFB\u627E R</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rx <span class="token operator">=</span> i
        ry <span class="token operator">=</span> j
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6536\u96C6 p</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">;</span> step<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tx <span class="token operator">=</span> rx <span class="token operator">+</span> step <span class="token operator">*</span> dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> ty <span class="token operator">=</span> ry <span class="token operator">+</span> step <span class="token operator">*</span> dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 0 \u4E0D\u505A\u4F4D\u79FB</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>tx <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> tx <span class="token operator">&gt;=</span> n <span class="token operator">||</span> ty <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> ty <span class="token operator">&gt;=</span> n <span class="token operator">||</span> board<span class="token punctuation">[</span>tx<span class="token punctuation">]</span><span class="token punctuation">[</span>ty<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>tx<span class="token punctuation">]</span><span class="token punctuation">[</span>ty<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token operator">++</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
