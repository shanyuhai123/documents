import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="爬楼梯" tabindex="-1"><a class="header-anchor" href="#爬楼梯"><span>爬楼梯</span></a></h1><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h2><p>最后一步可能是跨了一级台阶，也肯能是两级，所以可以得到: <code>$f(x) = f(x - 1) + f(x -2)$</code> 公式。</p><p>再配合基础的 <code>f(1) = 1</code>，<code>f(2) = 2</code>。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 缓存数据，否则容易超时</span></span>
<span class="line"><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> value</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h2><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">climbStairs</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 初始化状态</span></span>
<span class="line">  <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 状态转移</span></span>
<span class="line">    <span class="token keyword">const</span> sum <span class="token operator">=</span> p <span class="token operator">+</span> q</span>
<span class="line">    p <span class="token operator">=</span> q</span>
<span class="line">    q <span class="token operator">=</span> sum</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> q</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,7)]))}const i=s(e,[["render",o],["__file","70-climbing-stairs.html.vue"]]),r=JSON.parse('{"path":"/algorithms/70-climbing-stairs.html","title":"爬楼梯","lang":"zh-CN","frontmatter":{"autoSort":-70},"headers":[{"level":2,"title":"递归","slug":"递归","link":"#递归","children":[]},{"level":2,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[]}],"git":{"updatedTime":1639583436000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/70-climbing-stairs.md"}');export{i as comp,r as data};
