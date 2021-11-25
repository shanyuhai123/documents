import{e as n}from"./app.bb1abaaa.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6700\u5C0F\u6808" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u6808" aria-hidden="true">#</a> \u6700\u5C0F\u6808</h1><h2 id="\u53CC\u6808" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6808" aria-hidden="true">#</a> \u53CC\u6808</h2><p>\u989D\u5916\u521B\u5EFA\u4E00\u4E2A\u6808\u4FDD\u7559\u6700\u5C0F\u503C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MinStack</span> <span class="token punctuation">{</span>
  #stack<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  #minStack<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">Infinity</span><span class="token punctuation">]</span>

  <span class="token function">push</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token comment">// \u5E94\u5BF9 pop\uFF0C\u4FDD\u7559\u5C0F\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,c){return p}var k=s(a,[["render",t]]);export{k as default};