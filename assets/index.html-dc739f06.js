import{_ as o,M as c,p as l,q as r,a1 as e,R as s,t as a,N as p}from"./framework-e3e34937.js";const k={},i={href:"https://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.typescriptlang.org/docs/handbook/generics.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.typescriptlang.org/docs/handbook/2/types-from-types.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.jsontots.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.typescriptlang.org/docs",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"},h={href:"https://devblogs.microsoft.com/typescript/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/microsoft/TypeScript/tree/spec-update/doc/spec",target:"_blank",rel:"noopener noreferrer"};function f(T,n){const t=c("ExternalLinkIcon");return l(),r("div",null,[n[20]||(n[20]=e('<h1 id="更好维护的-typescript" tabindex="-1"><a class="header-anchor" href="#更好维护的-typescript" aria-hidden="true">#</a> 更好维护的 TypeScript</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>接触了 TypeScript，JavaScript 便成为了备选。</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果一个目录下存在 <code>tsconfig.json</code>，那么被识别为 <code>TypeScript</code> 项目的根目录。</p><h3 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> references</h3><p>当一个大型项目想对不同模块、文件分别编译时，可以使用脚本，也可以使用在 <code>v3</code> 中新增的顶层属性 <code>references</code>，配合上 <code>includes</code> 即可快速实现需求。</p><h2 id="interface-type-aliases" tabindex="-1"><a class="header-anchor" href="#interface-type-aliases" aria-hidden="true">#</a> Interface &amp; Type Aliases</h2><p><code>Type Aliases</code>，即 “类型别名”，注意它是别名而不是真正的类型。</p>',9)),s("p",null,[s("a",i,[n[0]||(n[0]=a("interface")),p(t)]),n[1]||(n[1]=a(" 从官网看来可以描述：对象、函数、数组、Class。"))]),n[21]||(n[21]=e(`<h3 id="相似" tabindex="-1"><a class="header-anchor" href="#相似" aria-hidden="true">#</a> 相似</h3><h4 id="_1-interface-extends-interface" tabindex="-1"><a class="header-anchor" href="#_1-interface-extends-interface" aria-hidden="true">#</a> 1. interface extends interface</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2-type-type" tabindex="-1"><a class="header-anchor" href="#_2-type-type" aria-hidden="true">#</a> 2. type &amp; type</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3-interface-extends-type" tabindex="-1"><a class="header-anchor" href="#_3-interface-extends-type" aria-hidden="true">#</a> 3. interface extends type</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-type-interface" tabindex="-1"><a class="header-anchor" href="#_4-type-interface" aria-hidden="true">#</a> 4. type &amp; interface</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="差异" tabindex="-1"><a class="header-anchor" href="#差异" aria-hidden="true">#</a> 差异</h3><h4 id="_1-tuple" tabindex="-1"><a class="header-anchor" href="#_1-tuple" aria-hidden="true">#</a> 1. Tuple</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Tuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
<span class="token keyword">interface</span> <span class="token class-name">ITuple</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token keyword">as</span> Tuple <span class="token comment">// ERROR</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token keyword">as</span> ITuple <span class="token comment">// OK</span>
</code></pre></div><h4 id="_2-合并" tabindex="-1"><a class="header-anchor" href="#_2-合并" aria-hidden="true">#</a> 2. 合并</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Once</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Once</span> <span class="token operator">=</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
<span class="token comment">// Duplicate identifier &#39;Once&#39;.</span>

<span class="token keyword">interface</span> <span class="token class-name">IOnce</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IOnce</span> <span class="token punctuation">{</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// 合并为</span>
<span class="token comment">// interface IOnce {</span>
<span class="token comment">//   a: string</span>
<span class="token comment">//   b: string</span>
<span class="token comment">// }</span>
</code></pre></div><h4 id="_3-工具类型" tabindex="-1"><a class="header-anchor" href="#_3-工具类型" aria-hidden="true">#</a> 3. 工具类型</h4><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用-unknow-替代-any" tabindex="-1"><a class="header-anchor" href="#使用-unknow-替代-any" aria-hidden="true">#</a> 使用 Unknow 替代 any</h2><p>每当想使用 <code>any</code> 时，都应先考虑 <code>unknown</code>，它是 <code>any</code> 类型对应的安全类型，即在对 <code>unknown</code> 类型的值执行大多数操作之前，我们必须进行某种形式的检查。</p><h3 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> Unknown</h3><p><code>unknown</code> 类型可以接受任何类型。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token keyword">let</span> v1<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token keyword">const</span> v2<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">100n</span>

value <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token number">6</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token punctuation">{</span> o<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// OK</span>
value <span class="token operator">=</span> v1 <span class="token comment">// OK</span>
value <span class="token operator">=</span> v2 <span class="token comment">// OK</span>
</code></pre></div><p>但 <code>unknown</code> 类型只能赋予 <code>unknown</code> 及 <code>any</code> 类型。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span>

<span class="token keyword">const</span> v1<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> value <span class="token comment">// OK</span>
<span class="token keyword">const</span> v2<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> value <span class="token comment">// OK</span>
<span class="token keyword">const</span> v3<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v4<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v5<span class="token operator">:</span> bigint <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v6<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v7<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v8<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v9<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
<span class="token keyword">const</span> v10<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> value <span class="token comment">// ERROR</span>
</code></pre></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3><p>除了和 <code>any</code> 类型外都返回 <code>unknown</code> 类型。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U1</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">any</span> <span class="token comment">// any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U2</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U3</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U4</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U5</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U6</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U7</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">never</span> <span class="token comment">// unknown</span>
</code></pre></div><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h3><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">any</span> <span class="token comment">// any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I2</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">number</span> <span class="token comment">// number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I3</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I4</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// any[]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I5</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token keyword">null</span> <span class="token comment">// null</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I6</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token keyword">undefined</span> <span class="token comment">// undefined</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I7</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">never</span> <span class="token comment">// never</span>
</code></pre></div><h2 id="内置的工具类型" tabindex="-1"><a class="header-anchor" href="#内置的工具类型" aria-hidden="true">#</a> 内置的工具类型</h2><p>想成为一个好的 TypeScript 开发者，那必须熟练使用它的工具类型。</p><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3>`,31)),s("p",null,[s("a",u,[n[2]||(n[2]=a("泛型")),p(t)]),n[4]||(n[4]=a("是一切工具类型的基础，可以当作函数中的入参，而想要进一步则还需要借助 ")),s("a",d,[n[3]||(n[3]=a("Type Manipulation")),p(t)]),n[5]||(n[5]=a("。"))]),n[22]||(n[22]=e(`<h4 id="_1-keyof-type-operator" tabindex="-1"><a class="header-anchor" href="#_1-keyof-type-operator" aria-hidden="true">#</a> 1. Keyof Type Operator</h4><p><code>keyof</code> 可用来获取 “对象类型” 的 <code>key</code>，并组成 <code>union</code>。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Point
<span class="token comment">// type P = &quot;x&quot; | &quot;y&quot;</span>

<span class="token keyword">type</span> <span class="token class-name">Mapish</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>k<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">M</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Mapish
<span class="token comment">// type M = string | number</span>
</code></pre></div><h4 id="_2-typeof-type-operator" tabindex="-1"><a class="header-anchor" href="#_2-typeof-type-operator" aria-hidden="true">#</a> 2. Typeof Type Operator</h4><p>在 JavaScript 的 “expression context” 中 <code>typeof</code> 可以返回对应的类型，而在 TypeScript 的 “type context” 中 <code>typeof</code> 同样可以返回对应的类型。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">N</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> s
<span class="token comment">// type N = string</span>

<span class="token keyword">function</span> <span class="token function">f</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> f
<span class="token comment">// type F = () =&gt; {x: number; y: number;}</span>
</code></pre></div><h4 id="_3-indexed-access-types" tabindex="-1"><a class="header-anchor" href="#_3-indexed-access-types" aria-hidden="true">#</a> 3. Indexed Access Types</h4><p>索引类型为 type 增加类似于 JavaScript 对象数组的索引。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 对象</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  alive<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type I1 = string | number</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I2</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token keyword">keyof</span> Person<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type I2 = string | number | boolean</span>

<span class="token keyword">type</span> <span class="token class-name">AliveOrName</span> <span class="token operator">=</span> <span class="token string">&#39;alive&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I3</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span>AliveOrName<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type I3 = string | boolean</span>

<span class="token comment">// 数组</span>
<span class="token keyword">const</span> MyArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Eve&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">38</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> MyArray<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// type Person = {</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">// }</span>
</code></pre></div><h4 id="_4-conditional-types" tabindex="-1"><a class="header-anchor" href="#_4-conditional-types" aria-hidden="true">#</a> 4. Conditional Types</h4><p>基本与 JavaScript 的三元运算符一致。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">MessageOf<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">}</span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Email</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">EmailMessageContents</span> <span class="token operator">=</span> MessageOf<span class="token operator">&lt;</span>Email<span class="token operator">&gt;</span>
<span class="token comment">// type EmailMessageContents = string</span>

<span class="token keyword">type</span> <span class="token class-name">DogMessageContents</span> <span class="token operator">=</span> MessageOf<span class="token operator">&lt;</span>Dog<span class="token operator">&gt;</span>
<span class="token comment">// type DogMessageContents = never</span>
</code></pre></div><h4 id="_5-mapped-types" tabindex="-1"><a class="header-anchor" href="#_5-mapped-types" aria-hidden="true">#</a> 5. Mapped Types</h4><p>映射类型配合上泛型，就造就了工具类型的基石。</p><p>其中修饰符可以改变原有约束，<code>-</code> 用于取消，<code>+</code> 则相反且为默认值：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">CreateMutable<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span>Property <span class="token keyword">in</span> <span class="token keyword">keyof</span> Type<span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">LockedAccount</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">UnlockedAccount</span> <span class="token operator">=</span> CreateMutable<span class="token operator">&lt;</span>LockedAccount<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type UnlockedAccount = {</span>
<span class="token comment">//   id: string;</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">// }</span>

<span class="token keyword">type</span> <span class="token class-name">Concrete<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Property <span class="token keyword">in</span> <span class="token keyword">keyof</span> Type<span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">MaybeUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Concrete<span class="token operator">&lt;</span>MaybeUser<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type User = {</span>
<span class="token comment">//   id: string;</span>
<span class="token comment">//   name: string;</span>
<span class="token comment">//   age: number;</span>
<span class="token comment">// }</span>
</code></pre></div><p>对属性进行操作，编辑和移除：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Getters<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Property <span class="token keyword">in</span> <span class="token keyword">keyof</span> Type <span class="token keyword">as</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">get</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Capitalize<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">&amp;</span> Property<span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  location<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">LazyPerson</span> <span class="token operator">=</span> Getters<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type LazyPerson = {</span>
<span class="token comment">//   getName: () =&gt; string;</span>
<span class="token comment">//   getAge: () =&gt; number;</span>
<span class="token comment">//   getLocation: () =&gt; string;</span>
<span class="token comment">// }</span>

<span class="token keyword">type</span> <span class="token class-name">RemoveKindField<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> Exclude<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token string">&#39;kind&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">;</span>
  radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">KindlessCircle</span> <span class="token operator">=</span> RemoveKindField<span class="token operator">&lt;</span>Circle<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type KindlessCircle = {</span>
<span class="token comment">//   radius: number;</span>
<span class="token comment">// }</span>
</code></pre></div><h4 id="_6-template-literal-types" tabindex="-1"><a class="header-anchor" href="#_6-template-literal-types" aria-hidden="true">#</a> 6. Template Literal Types</h4><p>很好，就差支持正则了。</p><h4 id="_7-extends-in" tabindex="-1"><a class="header-anchor" href="#_7-extends-in" aria-hidden="true">#</a> 7. extends &amp; in</h4>`,21)),s("p",null,[n[7]||(n[7]=s("code",null,"extends",-1)),n[8]||(n[8]=a(" 和 ")),n[9]||(n[9]=s("code",null,"in",-1)),n[10]||(n[10]=a(" 都可以作为约束行为，实际使用中是让人")),s("a",y,[n[6]||(n[6]=a("疑惑的")),p(t)]),n[11]||(n[11]=a("，其中一条评论不知是否正确：“extends 总是用在泛型上，in 总是用在索引上”。"))]),n[23]||(n[23]=e(`<p>在泛型上提前做约束可以解决一些问题：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">prop</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">prop2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;shanyuhai&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> u1 <span class="token operator">=</span> <span class="token function">prop</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token comment">// u1: string</span>
<span class="token keyword">let</span> u2 <span class="token operator">=</span> <span class="token function">prop2</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token comment">// u2: string | number</span>
</code></pre></div><p>其中的缘由很简单，根据参数来看，<code>u1</code> 返回类型是 <code>T[K]</code>，而 <code>u2</code> 返回类型是 <code>T[keyof T]</code>。</p><h4 id="_8-infer" tabindex="-1"><a class="header-anchor" href="#_8-infer" aria-hidden="true">#</a> 8. infer</h4><p><code>infer</code> 在 <code>extends</code> 条件语句中表示将要推断的类型。</p><h3 id="工具类型的使用" tabindex="-1"><a class="header-anchor" href="#工具类型的使用" aria-hidden="true">#</a> 工具类型的使用</h3><h4 id="_1-partial" tabindex="-1"><a class="header-anchor" href="#_1-partial" aria-hidden="true">#</a> 1. Partial</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 将 T 中的所有的属性都变为可选
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateTodo</span> <span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">,</span> fieldsToUpdate<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token operator">...</span>fieldsToUpdate <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;organize desk&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;clear clutter&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo2 <span class="token operator">=</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token string">&#39;throw out trash&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_2-readonly" tabindex="-1"><a class="header-anchor" href="#_2-readonly" aria-hidden="true">#</a> 2. Readonly</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 将 T 中的所有属性变为只读属性
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> MyReadonly<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Delete inactive users&#39;</span>
<span class="token punctuation">}</span>

todo<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span> <span class="token comment">// ERROR</span>
<span class="token comment">// Cannot assign to &#39;title&#39; because it is a read-only property.</span>
</code></pre></div><h4 id="_3-record" tabindex="-1"><a class="header-anchor" href="#_3-record" aria-hidden="true">#</a> 3. Record</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 将 K 中所有的属性的值转为 T 类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">PageInfo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Page</span> <span class="token operator">=</span> <span class="token string">&#39;home&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;about&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;contact&#39;</span>

<span class="token keyword">const</span> nav<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Page<span class="token punctuation">,</span> PageInfo<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  about<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;about&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  contact<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;contact&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  home<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-pick" tabindex="-1"><a class="header-anchor" href="#_4-pick" aria-hidden="true">#</a> 4. Pick</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中挑选符合 K 类型的
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;completed&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Clean room&#39;</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-exclude" tabindex="-1"><a class="header-anchor" href="#_5-exclude" aria-hidden="true">#</a> 5. Exclude</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 U 中移除可以赋值给 K 的类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Exclude<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">K</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">U</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type T0 = &quot;b&quot; | &quot;c&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type T1 = &quot;c&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span>
<span class="token comment">// type T2 = string | number</span>
</code></pre></div><h4 id="_6-omit" tabindex="-1"><a class="header-anchor" href="#_6-omit" aria-hidden="true">#</a> 6. Omit</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 中移除 K 属性
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Clean room&#39;</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7-extract" tabindex="-1"><a class="header-anchor" href="#_7-extract" aria-hidden="true">#</a> 7. Extract</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T、U 类型中获取交集
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Extract<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;f&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = &quot;a&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = () =&gt; void</span>
</code></pre></div><h4 id="_8-nonnullable" tabindex="-1"><a class="header-anchor" href="#_8-nonnullable" aria-hidden="true">#</a> 8. NonNullable</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 U 类型中移除 null 和 undefined
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NonNullable<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">null</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">U</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = string | number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = string[]</span>
</code></pre></div><h4 id="_9-parameters" tabindex="-1"><a class="header-anchor" href="#_9-parameters" aria-hidden="true">#</a> 9. Parameters</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中获取参数类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Parameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = []</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = [s: string]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(arg: T) =&gt; T&gt;;
// type T2 = [arg: unknown]
type T3 = Parameters&lt;typeof f1&gt;;
// type T3 = [arg: {
//   a: number;
//   b: string;
// }]
type T4 = Parameters&lt;any&gt;;
// type T4 = unknown[]
type T5 = Parameters&lt;never&gt;;
// type T5 = never
type T6 = Parameters&lt;string&gt;; // ERROR
// Type &#39;string&#39; does not satisfy the constraint &#39;(...args: any) =&gt; any&#39;.
// type T6 = never
type T7 = Parameters&lt;Function&gt;; // ERROR
// Type &#39;Function&#39; does not satisfy the constraint &#39;(...args: any) =&gt; any&#39;.
// Type &#39;Function&#39; provides no match for the signature &#39;(...args: any): any&#39;.
// type T7 = never
</span></code></pre></div><h4 id="_10-constructorparameters" tabindex="-1"><a class="header-anchor" href="#_10-constructorparameters" aria-hidden="true">#</a> 10. ConstructorParameters</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中获取构造函数的参数类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ConstructorParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span>ErrorConstructor<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = [message?: string]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span>FunctionConstructor<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = string[]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span>RegExpConstructor<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T2 = [pattern: string | RegExp, flags?: string]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T3</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T3 = unknown[]</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T4</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
<span class="token comment">// Type &#39;Function&#39; does not satisfy the constraint &#39;new (...args: any) =&gt; any&#39;.</span>
<span class="token comment">// Type &#39;Function&#39; provides no match for the signature &#39;new (...args: any): any&#39;.</span>
<span class="token comment">// type T4 = never</span>
</code></pre></div><h4 id="_11-returntype" tabindex="-1"><a class="header-anchor" href="#_11-returntype" aria-hidden="true">#</a> 11. ReturnType</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中获取返回类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = void</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">() =&gt; T&gt;;
// type T2 = unknown
type T3 = ReturnType&lt;&lt;T extends U, U extends number[]&gt;() =&gt; T&gt;;
// type T3 = number[]
type T4 = ReturnType&lt;typeof f1&gt;;
// type T4 = {
// a: number;
// b: string;
// }
type T5 = ReturnType&lt;any&gt;;
// type T5 = any
type T6 = ReturnType&lt;never&gt;;
// type T6 = never
type T7 = ReturnType&lt;string&gt;;
// Type &#39;string&#39; does not satisfy the constraint &#39;(...args: any) =&gt; any&#39;.
// type T7 = any
type T8 = ReturnType&lt;Function&gt;;
// Type &#39;Function&#39; does not satisfy the constraint &#39;(...args: any) =&gt; any&#39;.
// Type &#39;Function&#39; provides no match for the signature &#39;(...args: any): any&#39;.
// type T8 = any
</span></code></pre></div><h4 id="_12-instancetype" tabindex="-1"><a class="header-anchor" href="#_12-instancetype" aria-hidden="true">#</a> 12. InstanceType</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中获取实例类型
 */</span>
<span class="token keyword">type</span> <span class="token class-name">InstanceType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> <span class="token constant">C</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = C</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T2 = never</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T3</span></span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// Type &#39;string&#39; does not satisfy the constraint &#39;new (...args: any) =&gt; any&#39;.</span>
<span class="token comment">// type T3 = any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T4</span></span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// Type &#39;Function&#39; does not satisfy the constraint &#39;new (...args: any) =&gt; any&#39;.</span>
<span class="token comment">// Type &#39;Function&#39; provides no match for the signature &#39;new (...args: any): any&#39;.</span>
<span class="token comment">// type T4 = any</span>
</code></pre></div><h4 id="_13-required" tabindex="-1"><a class="header-anchor" href="#_13-required" aria-hidden="true">#</a> 13. Required</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 将 T 中的所有的属性都变为必选
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Required<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Props <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2<span class="token operator">:</span> Required<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span>
<span class="token comment">// Property &#39;b&#39; is missing in type &#39;{ a: number; }&#39; but required in type &#39;Required&lt;Props&gt;&#39;.</span>
</code></pre></div><h4 id="_14-thisparametertype" tabindex="-1"><a class="header-anchor" href="#_14-thisparametertype" aria-hidden="true">#</a> 14. ThisParameterType</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型获取 this
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ThisParameterType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token builtin">unknown</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">toHex</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">numberToString</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> ThisParameterType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> toHex<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toHex</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_15-omitthisparameter" tabindex="-1"><a class="header-anchor" href="#_15-omitthisparameter" aria-hidden="true">#</a> 15. OmitThisParameter</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 从 T 类型中移除 this
 */</span>
<span class="token keyword">type</span> <span class="token class-name">OmitThisParameter<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token keyword">extends</span> <span class="token class-name">ThisParameterType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre></div><p>Example：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">toHex</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fiveToHex<span class="token operator">:</span> OmitThisParameter<span class="token operator">&lt;</span><span class="token keyword">typeof</span> toHex<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">toHex</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fiveToHex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_16-thistype" tabindex="-1"><a class="header-anchor" href="#_16-thistype" aria-hidden="true">#</a> 16. ThisType</h4><p>Define：</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * 将 T 注入为 this
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ThisType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>Example：</p><p>直接看定义一脸懵逼，而在示例中则很明显了，是否想起了被增强的 Vue Options 写法呢？</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">ObjectDescriptor<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">D</span><span class="token punctuation">;</span>
  methods<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">M</span> <span class="token operator">&amp;</span> ThisType<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// Type of &#39;this&#39; in methods is D &amp; M</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">makeObject</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>desc<span class="token operator">:</span> ObjectDescriptor<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data<span class="token operator">:</span> object <span class="token operator">=</span> desc<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> methods<span class="token operator">:</span> object <span class="token operator">=</span> desc<span class="token punctuation">.</span>methods <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>data<span class="token punctuation">,</span> <span class="token operator">...</span>methods <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token constant">D</span> <span class="token operator">&amp;</span> <span class="token constant">M</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">makeObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">moveBy</span><span class="token punctuation">(</span>dx<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> dy<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> dx<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> dy<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">moveBy</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="typescript-工具" tabindex="-1"><a class="header-anchor" href="#typescript-工具" aria-hidden="true">#</a> TypeScript 工具</h2>`,88)),s("ul",null,[s("li",null,[s("p",null,[s("a",m,[n[12]||(n[12]=a("TypeScript Playground")),p(t)])]),n[13]||(n[13]=s("p",null,"在线 TypeScript 运行环境",-1))]),s("li",null,[s("p",null,[s("a",g,[n[14]||(n[14]=a("JSON TO TS")),p(t)])]),n[15]||(n[15]=s("p",null,"根据 JSON 生成 typescript 的工具，很赞",-1))])]),n[24]||(n[24]=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料")],-1)),s("ol",null,[s("li",null,[s("a",x,[n[16]||(n[16]=a("TypeScript")),p(t)])]),s("li",null,[s("a",w,[n[17]||(n[17]=a("TSConfig Reference")),p(t)])]),s("li",null,[s("a",h,[n[18]||(n[18]=a("TypeScript Blogs")),p(t)])]),s("li",null,[s("a",b,[n[19]||(n[19]=a("TypeScript Spec")),p(t)])])])])}const P=o(k,[["render",f],["__file","index.html.vue"]]);export{P as default};
