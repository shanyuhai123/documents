import{e as n}from"./app.63dea666.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u5BF9\u79F0\u4E8C\u53C9\u6811</h1><p>\u5BF9\u79F0\u4E8C\u53C9\u6811\u53EF\u770B\u4F5C\u4E24\u68F5\u6811\u4E92\u4E3A<strong>\u955C\u50CF</strong>\u3002\u6240\u4EE5\u53EF\u4EE5\u53C2\u8003 <a href="./100-same-tree">\u76F8\u540C\u7684\u6811</a> \u8FDB\u884C\u5B9E\u73B0\uFF0C\u4E0D\u8FC7\u8981\u7A0D\u4F5C\u4FEE\u6539\u3002</p><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!==</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3" aria-hidden="true">#</a> \u8FED\u4EE3</h2><p>\u76F8\u5BF9 <code>same tree</code> \u63D0\u524D\u7ED3\u675F\u5224\u65AD\uFF0C\u4F18\u5316\u4EE3\u7801\u91CF\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> q<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6839\u636E\u961F\u5217\u5148\u8FDB\u5148\u51FA\u5B9E\u73B0\u5E7F\u5EA6\u4F18\u5148</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>p<span class="token punctuation">,</span> q<span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nodeP <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">const</span> nodeQ <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodeP <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>nodeQ<span class="token punctuation">)</span> <span class="token keyword">continue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>nodeP <span class="token operator">||</span> <span class="token operator">!</span>nodeQ<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>val <span class="token operator">!==</span> nodeQ<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeP<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nodeQ<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};