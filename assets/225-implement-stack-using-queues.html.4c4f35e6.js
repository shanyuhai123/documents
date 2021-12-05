import{e as n}from"./app.12dbcc98.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u7528\u961F\u5217\u5B9E\u73B0\u6808" tabindex="-1"><a class="header-anchor" href="#\u7528\u961F\u5217\u5B9E\u73B0\u6808" aria-hidden="true">#</a> \u7528\u961F\u5217\u5B9E\u73B0\u6808</h1><h2 id="\u590D\u523B" tabindex="-1"><a class="header-anchor" href="#\u590D\u523B" aria-hidden="true">#</a> \u590D\u523B</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyStack</span> <span class="token punctuation">{</span>
  #queue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">push</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
  <span class="token punctuation">}</span>

  <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
