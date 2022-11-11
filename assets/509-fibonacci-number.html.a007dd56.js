import{e as n}from"./app.5799edae.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6590\u6CE2\u90A3\u5951\u6570" tabindex="-1"><a class="header-anchor" href="#\u6590\u6CE2\u90A3\u5951\u6570" aria-hidden="true">#</a> \u6590\u6CE2\u90A3\u5951\u6570</h1><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BB0\u5FC6\u5DF2\u8BA1\u7B97\u7684\u503C</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> rec <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">rec</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rec</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    s<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">rec</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> \u52A8\u6001\u89C4\u5212</h2><p>\u52A8\u6001\u89C4\u5212\u5165\u95E8\u9898\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n

  <span class="token comment">// \u4F18\u5316\u7A7A\u95F4\u590D\u6742\u5EA6</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> prev <span class="token operator">+</span> cur
    prev <span class="token operator">=</span> cur
    cur <span class="token operator">=</span> sum
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> cur
<span class="token punctuation">}</span>
</code></pre></div>`,6);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
