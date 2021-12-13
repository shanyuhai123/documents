import{e as n}from"./app.ac5f11ab.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5C9B\u5C7F\u7684\u5468\u957F" tabindex="-1"><a class="header-anchor" href="#\u5C9B\u5C7F\u7684\u5468\u957F" aria-hidden="true">#</a> \u5C9B\u5C7F\u7684\u5468\u957F</h1><p>\u4E8C\u7EF4\u6570\u7EC4\u4E2D <code>1</code> \u4E3A\u9646\u5730\u3002</p><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">islandPerimeter</span><span class="token punctuation">(</span>grid<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sides <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">const</span> row <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span> col <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> rounds <span class="token operator">=</span> <span class="token number">4</span>
        <span class="token comment">// \u4E0A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u53F3</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> col <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u4E0B</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> row <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5DE6</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          rounds<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        sides <span class="token operator">+=</span> rounds
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sides
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
