import{e as n}from"./app.ad86f39c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5FEB\u4E50\u6570" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u4E50\u6570" aria-hidden="true">#</a> \u5FEB\u4E50\u6570</h1><p>\u5BFB\u627E\u5176\u7EC8\u7ED3\u6761\u4EF6\u3002</p><h2 id="\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868</h2><p>\u6570\u5B57\u91CD\u590D\u65F6\u81EA\u7136\u5C31\u53EF\u4EE5\u7ED3\u675F\u4E86\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53EF\u5207\u6362\u4E3A\u9012\u5F52</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    n <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5FEB\u6162\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6162\u6307\u9488" aria-hidden="true">#</a> \u5FEB\u6162\u6307\u9488</h2><p>\u4F1A\u91CD\u590D\u7684\u95EE\u9898\u53EF\u4EE5\u8BE5\u601D\u8DEF\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">calcNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> <span class="token function">String</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> slow <span class="token operator">=</span> n
  <span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span>
    fast <span class="token operator">=</span> <span class="token function">calcNext</span><span class="token punctuation">(</span><span class="token function">calcNext</span><span class="token punctuation">(</span>fast<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> fast <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
