import{e as n}from"./app.bd2c6a6e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u53CD\u8F6C\u5B57\u7B26\u4E32-ii" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5B57\u7B26\u4E32-ii" aria-hidden="true">#</a> \u53CD\u8F6C\u5B57\u7B26\u4E32 II</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> chars <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

  <span class="token keyword">const</span> reverse <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">unknown</span></span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span>
      left<span class="token operator">++</span>
      right<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> i<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k<span class="token punctuation">,</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
