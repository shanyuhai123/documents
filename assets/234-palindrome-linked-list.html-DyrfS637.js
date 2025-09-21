import{_ as s,c as a,a as p,o as t}from"./app-DLCc4AGN.js";const e={};function o(l,n){return t(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="回文链表" tabindex="-1"><a class="header-anchor" href="#回文链表"><span>回文链表</span></a></h1><p>第一思路就是整成数组，然后就可参考<a href="./125-valid-palindrome">验证回文串</a>。</p><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针"><span>快慢指针</span></a></h2><p>链表难的点就在于不能很快找到中间，所以这一题可以当作找到链表中间的练习，最后配合<a href="./206-reverse-linked-list">反转链表</a>。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> getHalfNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> slow <span class="token operator">=</span> head</span>
<span class="line">  <span class="token keyword">let</span> fast <span class="token operator">=</span> head</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// ts 代码提示还是差一点，slow.next 存在了，fast 还需要加 \`!\`</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token operator">!</span></span>
<span class="line">    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> slow</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> reverseListNode <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span></span>
<span class="line">  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head</span>
<span class="line">  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> n</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">reverseListNode</span><span class="token punctuation">(</span><span class="token function">getHalfNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> left <span class="token operator">=</span> head</span>
<span class="line">  <span class="token keyword">let</span> right <span class="token operator">=</span> end</span>
<span class="line">  <span class="token comment">// 右边可能会少，以右判断结束</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token operator">!</span></span>
<span class="line">    right <span class="token operator">=</span> right<span class="token punctuation">.</span>next</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,5)])])}const r=s(e,[["render",o]]),k=JSON.parse('{"path":"/algorithms/234-palindrome-linked-list.html","title":"回文链表","lang":"zh-CN","frontmatter":{"autoSort":-234},"headers":[{"level":2,"title":"快慢指针","slug":"快慢指针","link":"#快慢指针","children":[]}],"git":{"updatedTime":1635433669000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":1,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/234-palindrome-linked-list.md"}');export{r as comp,k as data};
