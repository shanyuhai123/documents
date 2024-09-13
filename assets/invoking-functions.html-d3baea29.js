import{_ as a,p as s,q as t,a1 as p}from"./framework-e3e34937.js";const o={};function e(c,n){return s(),t("div",null,n[0]||(n[0]=[p(`<h1 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h1><p>函数定义从 <code>function</code> 关键字开始，构成函数主体的 JavaScript 代码在定义之时并不会执行，只有调用该函数时，它们才会执行。</p><blockquote><p>var 只有变量声明提前，变量的初始化代码仍然在原来的位置；然而 function 则会使函数名称和函数体均提前。</p></blockquote><h2 id="调用函数的方式" tabindex="-1"><a class="header-anchor" href="#调用函数的方式" aria-hidden="true">#</a> 调用函数的方式</h2><ol><li>作为函数</li><li>作为方法</li><li>作为构造函数</li><li>通过 call 和 apply 方法间接调用</li></ol><h3 id="_1-函数调用" tabindex="-1"><a class="header-anchor" href="#_1-函数调用" aria-hidden="true">#</a> 1. 函数调用</h3><p>对于普通的函数调用，函数的返回值成为调用表达式的值。如果该函数返回是因为解释器到达结尾，返回值就是 undefined。如果函数返回是因为解释器执行到一条 return 语句，返回值就是 return 之后的表达式的值，如果 return 语句没有值，则返回 undefined。</p><p>函数形式调用的函数通常不使用 this 关键字。不过，“this” 可以用来判断当前是否是严格模式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义并调用一个函数来确定当前脚本是否为严格模式</span>
<span class="token keyword">var</span> strict <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-方法调用" tabindex="-1"><a class="header-anchor" href="#_2-方法调用" aria-hidden="true">#</a> 2. 方法调用</h3><p>一个方法无非是个保存在一个对象的属性里的 JavaScript 函数。函数本身就是一个属性访问表达式，这意味着该函数被当做一个方法，而不是一个普通函数来调用。</p><p>对方法调用的参数和返回值的处理，和普通函数调用完全一致。但是，方法调用和函数调用有一个重要的区别，即：调用上下文。属性访问表达式由两部分组成：一个对象和属性名称。在像这样的方法调用表达式中，对象成为调用上下文，函数体可以使用关键字 this 引用该对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> calculator <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 对象直接量</span>
  <span class="token literal-property property">operand1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">operand2</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 指向当前对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>operand1 <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>operand2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 方法调用</span>
calculator<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>方法调用可能包括更复杂的属性访问表达式：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>customer<span class="token punctuation">.</span>surname<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 访问属性为字符串调用原型链上的方法</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在调用 f 结束后继续调用返回值中的方法 m</span>
</code></pre></div><p>和变量不同，关键字 this 没有作用域的限制，嵌套的函数不会从调用它的函数中继承 this。如果嵌套函数作为方法调用，其 this 的值指向调用它的对象。如果嵌套函数作为函数调用，其 this 值不是全局对象（非严格模式下）就是 undefined（严格模式下）。因此若想访问外部函数的 this 值，那么就需要将 this 保存在变量中（变量具有作用域）。</p><h3 id="_3-构造函数调用" tabindex="-1"><a class="header-anchor" href="#_3-构造函数调用" aria-hidden="true">#</a> 3. 构造函数调用</h3><p>如果函数或者方法调用之前带有关键字 new，它就构成构造函数调用。构造函数调用和普通函数的而调用以及方法调用在实参处理、调用上下文和返回值方法都有不同。</p><blockquote><p>上下文的不同也就造成了 <strong>类</strong> 的由来：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通函数 this 在严格模式下为 undefined</span>
<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>如果构造函数调用在圆括号内包含一组实参列表，先计算这些实参表达式，然后传入函数内，这与函数调用和方法调用是一致的。但如果构造函数没有形参，JavaScript 构造函数调用的语法是允许省略实参列表和圆括号的。</p><blockquote><p>当传入的参数个数超过函数定义时的形参个数时，可使用参数对象 <code>arguments</code> 解决该问题。在函数体内，标识符 <code>arguments</code> 是指向实参对象的引用。</p><p>在默认模式下可以通过 <code>arguments[n]</code> 来修改实参对象；在严格模式下，它变成一个保留字，无法给 <code>arguments</code> 赋值。</p><p>严格模式下访问 <code>arguments</code> 的 <code>callee</code> 和 <code>caller（非标准）</code> 会产出错误。</p></blockquote><p>凡是没有形参的构造函数调用都可以省略圆括号，如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">;</span>

o<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><blockquote><p>所有对象都会从它的原型上继承一个 <code>constructor</code> 属性，该属性的值是 “构造函数” 的引用。</p></blockquote><p>构造函数调用会创建一个新的空对象，这个对象继承自构造函数的 prototype 属性。构造函数试图初始化这个新创建的对象，并将这个对象用作其调用上下文，因此构造函数可以使用 this 关键字来引用这个新创建的对象。注意，尽管构造函数看起来像一个方法调用，它依然会使用这个新对象作为调用上下文。也就是说，在表达式 <code>new o.m();</code> 中，调用上下文并不是 o。</p><p>构造函数通常不使用 return 关键字，它们通常初始化新对象，当构造函数的函数体执行完毕时，它会显式返回。在这种情况下，构造函数调用表达式的计算结果就是这个新对象的值。然而如果构造函数显式地使用 return 语句返回一个对象，那么调用表达式的值就是这个对象。如果构造函数使用 return 语句但是没有指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果。</p><h3 id="_4-间接调用" tabindex="-1"><a class="header-anchor" href="#_4-间接调用" aria-hidden="true">#</a> 4. 间接调用</h3><p>JavaScript 中的函数也是对象，和其他 JavaScript 对象没有什么两样，函数对象也可以包含方法。其中两个方法 <code>call</code> 和 <code>apply</code> 可以用来间接地调用函数。两个方法都允许显式指定调用所需的 this 值，也就是说，任何函数可以作为任何对象的方法调用，哪怕这个函数不是那个对象的方法。两个方法都可以指定调用的实参，<code>call</code> 方法使用它自有的实参列表作为函数的参数，<code>apply</code> 方法则要求以数组的形式传入参数。</p>`,28)]))}const u=a(o,[["render",e],["__file","invoking-functions.html.vue"]]);export{u as default};