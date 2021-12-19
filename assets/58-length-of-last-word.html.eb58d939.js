import{e as n}from"./app.e8c3854e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" aria-hidden="true">#</a> \u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6</h1><h2 id="\u53CD\u5411\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u904D\u5386" aria-hidden="true">#</a> \u53CD\u5411\u904D\u5386</h2><p>\u79FB\u9664\u6389\u7A7A\u683C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLastWord</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    index<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> wordLength <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wordLength<span class="token operator">++</span>
    index<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> wordLength
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
