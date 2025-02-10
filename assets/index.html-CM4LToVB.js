import{_ as s,c as a,a as p,o as t}from"./app-DNXRdI82.js";const o={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h1><blockquote><p>算法是很重要的，但我懒。</p></blockquote><h2 id="一些思想" tabindex="-1"><a class="header-anchor" href="#一些思想"><span>一些思想</span></a></h2><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h3><blockquote><p>要理解递归，就得先理解什么是递归。</p></blockquote><p>递归的基本思想是直接或间接的调用自身，这样原问题的求解就被转为了许多性质相同但是规模更小的子问题。 递归最重要的两个特征：调用自身、结束条件。调用自身是在解决子问题，而结束条件则一般为最简子问题的答案。 执行函数时会创建对应的执行上下文栈，而栈被创建过多层时存在 <strong>栈溢出</strong> 的风险。</p><h3 id="分治" tabindex="-1"><a class="header-anchor" href="#分治"><span>分治</span></a></h3><p>分治的核心思想就是 “分而治之”：</p><ol><li>分解：将原问题分解为相互独立，与原问题形式相同的子问题</li><li>解决：分解到某个容易求解的边界后，递归求解</li><li>合并：将子问题的解合并为原问题的解</li></ol><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h3><blockquote><p>使用分治法时，若子问题并不独立，则更推荐使用动态规划。</p></blockquote><h3 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法"><span>贪心算法</span></a></h3><p>贪心算法是一种在每一步选择中都采取当前状态下最好或最优选择，从而希望导致结果是最好或最优算法。 贪心算法与动态规划的不同在于它对每个问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。</p><h2 id="从排序开始" tabindex="-1"><a class="header-anchor" href="#从排序开始"><span>从排序开始</span></a></h2><h3 id="交换函数" tabindex="-1"><a class="header-anchor" href="#交换函数"><span>交换函数</span></a></h3><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">swap</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> j<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序"><span>冒泡排序</span></a></h3><p>冒泡排序就是重复 “从序列右边开始比较相邻两个数字大小，再根据结果交换两个数字的位置”。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> bubbleSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 每轮 i 循环都能确认最大值</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> arr</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序"><span>选择排序</span></a></h3><p>选择排序就是 “从待排序的数据中寻找最小值，将其放到已排序队列的末尾”。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> selectionSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> i</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        minIndex <span class="token operator">=</span> j</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> minIndex<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> arr</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序"><span>插入排序</span></a></h3><p>插入排序就是 “从右侧的未排序区域内取出一个数据，然后将其插入到已排序区域内合适的位置上”。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> insertionSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 每轮 i 循环为左区域排好序</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> arr</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序"><span>快速排序</span></a></h3><p>快速排序就是 “从待排序的数据原地排序并利用分治的思想解决，有点类似冒泡的增强版”。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 分区操作</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> pivot <span class="token operator">=</span> left</span>
<span class="line">  <span class="token keyword">let</span> index <span class="token operator">=</span> pivot <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 原地排序</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line">      index<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 将基准 pivot 移至中间</span></span>
<span class="line">  <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> pivot<span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> index <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> quickSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> partitionIndex <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span> partitionIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> partitionIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> arr</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,28)]))}const i=s(o,[["render",e],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/algorithms/","title":"算法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一些思想","slug":"一些思想","link":"#一些思想","children":[{"level":3,"title":"递归","slug":"递归","link":"#递归","children":[]},{"level":3,"title":"分治","slug":"分治","link":"#分治","children":[]},{"level":3,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[]},{"level":3,"title":"贪心算法","slug":"贪心算法","link":"#贪心算法","children":[]}]},{"level":2,"title":"从排序开始","slug":"从排序开始","link":"#从排序开始","children":[{"level":3,"title":"交换函数","slug":"交换函数","link":"#交换函数","children":[]},{"level":3,"title":"冒泡排序","slug":"冒泡排序","link":"#冒泡排序","children":[]},{"level":3,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":3,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]},{"level":3,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]}]}],"git":{"updatedTime":1633274623000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":6,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"algorithms/README.md"}');export{i as comp,u as data};
