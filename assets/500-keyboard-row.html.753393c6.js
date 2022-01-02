import{e as n}from"./app.9226fedc.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u952E\u76D8\u884C" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u884C" aria-hidden="true">#</a> \u952E\u76D8\u884C</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findWords</span><span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> lines <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;qwertyuiop&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;asdfghjkl&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;zxcvbnm&#39;</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> lines<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>line <span class="token operator">=&gt;</span> line<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span>

    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>line<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
