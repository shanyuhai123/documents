import{e as n}from"./app.e62aeb11.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u6700\u957F\u516C\u5171\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u6700\u957F\u516C\u5171\u524D\u7F00" aria-hidden="true">#</a> \u6700\u957F\u516C\u5171\u524D\u7F00</h1><h2 id="\u524D\u7F00\u9012\u589E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F00\u9012\u589E" aria-hidden="true">#</a> \u524D\u7F00\u9012\u589E</h2><p>\u6700\u76F4\u89C2\u7684\u60F3\u6CD5</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> minStr <span class="token operator">=</span> <span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> strs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token punctuation">,</span>r<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> c<span class="token punctuation">.</span>length <span class="token operator">?</span> r <span class="token operator">:</span> c<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>  
  <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">minStr</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
  <span class="token keyword">let</span> prefix <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cur <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>str <span class="token operator">=&gt;</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prefix <span class="token operator">=</span> cur
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> prefix
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F9D\u6B21\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u6B21\u6BD4\u8F83" aria-hidden="true">#</a> \u4F9D\u6B21\u6BD4\u8F83</h2><p>\u53D6\u7B2C\u4E00\u9879\u4E3A\u9ED8\u8BA4\u524D\u7F00\uFF0C\u524D\u7F00\u4F9D\u6B21\u4E0E\u5176\u4ED6\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> reducePrefix <span class="token operator">=</span> <span class="token punctuation">(</span>prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> prefix<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> str<span class="token punctuation">.</span>length <span class="token operator">?</span> str <span class="token operator">:</span> prefix

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> min<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prefix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> min<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> min
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>  
  <span class="token keyword">let</span> prefix <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prefix <span class="token operator">=</span> <span class="token function">reducePrefix</span><span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> prefix
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u51CF\u5C11\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u6BD4\u8F83" aria-hidden="true">#</a> \u51CF\u5C11\u6BD4\u8F83</h2><p>\u5B9E\u9645\u4E0A\u4EC5\u9700\u8981\u6BD4\u8F83\u5B57\u7B26\u4E32\u6700\u77ED\u7684\u90A3\u4E00\u6279\u5C31\u597D\u4E86\uFF0C\u4F46\u6700\u77ED\u7684\u53EA\u6709\u4E00\u4E2A\u65F6\u8FD8\u9700\u8981\u4E0E\u6B21\u77ED\u6570\u636E\u6BD4\u8F83\u3002</p><p>\u4F46\u5B9E\u9645\u4E0A\u6027\u80FD\u6CA1\u6709\u4EC0\u4E48\u4F18\u5316\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">collect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> strs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>length <span class="token operator">===</span> acc<span class="token punctuation">.</span>len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    acc<span class="token punctuation">.</span>least<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> acc<span class="token punctuation">.</span>len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    acc<span class="token punctuation">.</span>len <span class="token operator">=</span> cur<span class="token punctuation">.</span>length
    acc<span class="token punctuation">.</span>less <span class="token operator">=</span> acc<span class="token punctuation">.</span>least
    acc<span class="token punctuation">.</span>least <span class="token operator">=</span> <span class="token punctuation">[</span>cur<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> acc
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  len<span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  least<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  less<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> compare <span class="token operator">=</span> <span class="token punctuation">(</span>str1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> str2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> str1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> str2<span class="token punctuation">.</span>length <span class="token operator">?</span> str2 <span class="token operator">:</span> str1

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> min<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> min<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> min
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>  
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>strs <span class="token operator">||</span> strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> least<span class="token punctuation">,</span> less <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>least<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    least<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>less<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> prefix <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prefix <span class="token operator">=</span> <span class="token function">compare</span><span class="token punctuation">(</span>prefix<span class="token punctuation">,</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> prefix
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5206\u6CBB" tabindex="-1"><a class="header-anchor" href="#\u5206\u6CBB" aria-hidden="true">#</a> \u5206\u6CBB</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> compare <span class="token operator">=</span> <span class="token punctuation">(</span>str1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> str2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">!==</span> str2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> str1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> lcpRec <span class="token operator">=</span> <span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> strs<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      left <span class="token operator">=</span> strs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">,</span>
      right <span class="token operator">=</span> strs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> len<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token function">lcpRec</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">lcpRec</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">longestCommonPrefix</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strs <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  
  <span class="token keyword">return</span> <span class="token function">lcpRec</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13);function t(o,c){return p}var l=s(a,[["render",t]]);export{l as default};
