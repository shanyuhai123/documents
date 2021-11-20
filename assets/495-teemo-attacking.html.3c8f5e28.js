import{e as n}from"./app.e1199508.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u63D0\u83AB\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u63D0\u83AB\u653B\u51FB" aria-hidden="true">#</a> \u63D0\u83AB\u653B\u51FB</h1><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findPoisonedDuration</span><span class="token punctuation">(</span>timeSeries<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> expired <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> timeSeries<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> expired<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> duration
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ret <span class="token operator">+=</span> timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> duration <span class="token operator">-</span> expired
    <span class="token punctuation">}</span>

    expired <span class="token operator">=</span> timeSeries<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> duration
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,3);function p(e,o){return t}var i=s(a,[["render",p]]);export{i as default};
