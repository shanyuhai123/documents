import{e as n}from"./app.9d96353f.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u4E24\u4E2A\u5217\u8868\u7684\u6700\u5C0F\u7D22\u5F15\u603B\u548C" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u5217\u8868\u7684\u6700\u5C0F\u7D22\u5F15\u603B\u548C" aria-hidden="true">#</a> \u4E24\u4E2A\u5217\u8868\u7684\u6700\u5C0F\u7D22\u5F15\u603B\u548C</h1><h2 id="\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868</h2><p>\u627E\u76F8\u540C\u4E14\u4E0D\u91CD\u590D\uFF0C\u5F88\u5BB9\u6613\u8054\u60F3\u5230\u54C8\u5E0C\u8868\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findRestaurant</span><span class="token punctuation">(</span>list1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">Infinity</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  list1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
  list2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mi <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mi <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> i <span class="token operator">+</span> mi
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        min <span class="token operator">=</span> index
        strs <span class="token operator">=</span> <span class="token punctuation">[</span>l<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> strs
<span class="token punctuation">}</span>
</code></pre></div>`,4);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
