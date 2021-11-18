import{e as n}from"./app.bd2c6a6e.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u56DE\u6587\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6587\u94FE\u8868" aria-hidden="true">#</a> \u56DE\u6587\u94FE\u8868</h1><p>\u7B2C\u4E00\u601D\u8DEF\u5C31\u662F\u6574\u6210\u6570\u7EC4\uFF0C\u7136\u540E\u5C31\u53EF\u53C2\u8003<a href="./125-valid-palindrome">\u9A8C\u8BC1\u56DE\u6587\u4E32</a>\u3002</p><h2 id="\u5FEB\u6162\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6162\u6307\u9488" aria-hidden="true">#</a> \u5FEB\u6162\u6307\u9488</h2><p>\u94FE\u8868\u96BE\u7684\u70B9\u5C31\u5728\u4E8E\u4E0D\u80FD\u5F88\u5FEB\u627E\u5230\u4E2D\u95F4\uFF0C\u6240\u4EE5\u8FD9\u4E00\u9898\u53EF\u4EE5\u5F53\u4F5C\u627E\u5230\u94FE\u8868\u4E2D\u95F4\u7684\u7EC3\u4E60\uFF0C\u6700\u540E\u914D\u5408<a href="./206-reverse-linked-list">\u53CD\u8F6C\u94FE\u8868</a>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> getHalfNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head

  <span class="token comment">// ts \u4EE3\u7801\u63D0\u793A\u8FD8\u662F\u5DEE\u4E00\u70B9\uFF0Cslow.next \u5B58\u5728\u4E86\uFF0Cfast \u8FD8\u9700\u8981\u52A0 \`!\`</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token operator">!</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> slow
<span class="token punctuation">}</span>

<span class="token keyword">const</span> reverseListNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head

  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span><span class="token function">getHalfNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span>

  <span class="token keyword">let</span> left <span class="token operator">=</span> head
  <span class="token keyword">let</span> right <span class="token operator">=</span> end
  <span class="token comment">// \u53F3\u8FB9\u53EF\u80FD\u4F1A\u5C11\uFF0C\u4EE5\u53F3\u5224\u65AD\u7ED3\u675F</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token operator">!</span>
    right <span class="token operator">=</span> right<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function t(o,e){return p}var k=s(a,[["render",t]]);export{k as default};
