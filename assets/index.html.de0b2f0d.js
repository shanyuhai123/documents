import{r as e,c as o,a as n,b as p,F as c,e as t,d as s,o as l}from"./app.7b52605c.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const k={},i=t('<h1 id="\u66F4\u597D\u7EF4\u62A4\u7684-typescript" tabindex="-1"><a class="header-anchor" href="#\u66F4\u597D\u7EF4\u62A4\u7684-typescript" aria-hidden="true">#</a> \u66F4\u597D\u7EF4\u62A4\u7684 TypeScript</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u63A5\u89E6\u4E86 TypeScript\uFF0CJavaScript \u4FBF\u6210\u4E3A\u4E86\u5907\u9009\u3002</p><h2 id="interface-type-aliases" tabindex="-1"><a class="header-anchor" href="#interface-type-aliases" aria-hidden="true">#</a> Interface &amp; Type Aliases</h2><p><code>Type Aliases</code>\uFF0C\u5373 \u201C\u7C7B\u578B\u522B\u540D\u201D\uFF0C\u6CE8\u610F\u5B83\u662F\u522B\u540D\u800C\u4E0D\u662F\u771F\u6B63\u7684\u7C7B\u578B\u3002</p>',5),u={href:"https://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},d=s("interface"),y=s(" \u4ECE\u5B98\u7F51\u770B\u6765\u53EF\u4EE5\u63CF\u8FF0\uFF1A\u5BF9\u8C61\u3001\u51FD\u6570\u3001\u6570\u7EC4\u3001Class\u3002"),m=t(`<h3 id="\u76F8\u4F3C" tabindex="-1"><a class="header-anchor" href="#\u76F8\u4F3C" aria-hidden="true">#</a> \u76F8\u4F3C</h3><h4 id="_1-interface-extends-interface" tabindex="-1"><a class="header-anchor" href="#_1-interface-extends-interface" aria-hidden="true">#</a> 1. interface extends interface</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2-type-type" tabindex="-1"><a class="header-anchor" href="#_2-type-type" aria-hidden="true">#</a> 2. type &amp; type</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3-interface-extends-type" tabindex="-1"><a class="header-anchor" href="#_3-interface-extends-type" aria-hidden="true">#</a> 3. interface extends type</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-type-interface" tabindex="-1"><a class="header-anchor" href="#_4-type-interface" aria-hidden="true">#</a> 4. type &amp; interface</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u5F02" aria-hidden="true">#</a> \u5DEE\u5F02</h3><h4 id="_1-tuple" tabindex="-1"><a class="header-anchor" href="#_1-tuple" aria-hidden="true">#</a> 1. Tuple</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Tuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
<span class="token keyword">interface</span> <span class="token class-name">ITuple</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token keyword">as</span> Tuple <span class="token comment">// ERROR</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token keyword">as</span> ITuple <span class="token comment">// OK</span>
</code></pre></div><h4 id="_2-\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_2-\u5408\u5E76" aria-hidden="true">#</a> 2. \u5408\u5E76</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Once</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Once</span> <span class="token operator">=</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
<span class="token comment">// Duplicate identifier &#39;Once&#39;.</span>

<span class="token keyword">interface</span> <span class="token class-name">IOnce</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IOnce</span> <span class="token punctuation">{</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5408\u5E76\u4E3A</span>
<span class="token comment">// interface IOnce {</span>
<span class="token comment">//   a: string</span>
<span class="token comment">//   b: string</span>
<span class="token comment">// }</span>
</code></pre></div><h4 id="_3-\u5DE5\u5177\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-\u5DE5\u5177\u7C7B\u578B" aria-hidden="true">#</a> 3. \u5DE5\u5177\u7C7B\u578B</h4><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528-unknow-\u66FF\u4EE3-any" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-unknow-\u66FF\u4EE3-any" aria-hidden="true">#</a> \u4F7F\u7528 Unknow \u66FF\u4EE3 any</h2><p>\u6BCF\u5F53\u60F3\u4F7F\u7528 <code>any</code> \u65F6\uFF0C\u90FD\u5E94\u5148\u8003\u8651 <code>unknown</code>\uFF0C\u5B83\u662F <code>any</code> \u7C7B\u578B\u5BF9\u5E94\u7684\u5B89\u5168\u7C7B\u578B\uFF0C\u5373\u5728\u5BF9 <code>unknown</code> \u7C7B\u578B\u7684\u503C\u6267\u884C\u5927\u591A\u6570\u64CD\u4F5C\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u8FDB\u884C\u67D0\u79CD\u5F62\u5F0F\u7684\u68C0\u67E5\u3002</p><h3 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> Unknown</h3><p><code>unknown</code> \u7C7B\u578B\u53EF\u4EE5\u63A5\u53D7\u4EFB\u4F55\u7C7B\u578B\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span>
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
</code></pre></div><p>\u4F46 <code>unknown</code> \u7C7B\u578B\u53EA\u80FD\u8D4B\u4E88 <code>unknown</code> \u53CA <code>any</code> \u7C7B\u578B\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span>

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
</code></pre></div><h3 id="\u8054\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u8054\u5408\u7C7B\u578B</h3><p>\u9664\u4E86\u548C <code>any</code> \u7C7B\u578B\u5916\u90FD\u8FD4\u56DE <code>unknown</code> \u7C7B\u578B\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U1</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">any</span> <span class="token comment">// any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U2</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U3</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U4</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U5</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U6</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// unknown</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">U7</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token builtin">never</span> <span class="token comment">// unknown</span>
</code></pre></div><h3 id="\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u4EA4\u53C9\u7C7B\u578B</h3><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">any</span> <span class="token comment">// any</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I2</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">number</span> <span class="token comment">// number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I3</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span> <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I4</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// any[]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I5</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token keyword">null</span> <span class="token comment">// null</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I6</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token keyword">undefined</span> <span class="token comment">// undefined</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I7</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token operator">&amp;</span> <span class="token builtin">never</span> <span class="token comment">// never</span>
</code></pre></div><h2 id="\u5185\u7F6E\u7684\u5DE5\u5177\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u7684\u5DE5\u5177\u7C7B\u578B" aria-hidden="true">#</a> \u5185\u7F6E\u7684\u5DE5\u5177\u7C7B\u578B</h2><p>\u60F3\u6210\u4E3A\u4E00\u4E2A\u597D\u7684 TypeScript \u5F00\u53D1\u8005\uFF0C\u90A3\u5FC5\u987B\u719F\u7EC3\u4F7F\u7528\u5B83\u7684\u5DE5\u5177\u7C7B\u578B\u3002</p><h3 id="\u524D\u7F6E\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u7F6E\u6761\u4EF6</h3>`,31),g={href:"https://www.typescriptlang.org/docs/handbook/generics.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u6CDB\u578B"),x=s("\u662F\u4E00\u5207\u5DE5\u5177\u7C7B\u578B\u7684\u57FA\u7840\uFF0C\u53EF\u4EE5\u5F53\u4F5C\u51FD\u6570\u4E2D\u7684\u5165\u53C2\uFF0C\u800C\u60F3\u8981\u8FDB\u4E00\u6B65\u5219\u8FD8\u9700\u8981\u501F\u52A9 "),w={href:"https://www.typescriptlang.org/docs/handbook/2/types-from-types.html",target:"_blank",rel:"noopener noreferrer"},b=s("Type Manipulation"),f=s("\u3002"),T=t(`<h4 id="_1-keyof-type-operator" tabindex="-1"><a class="header-anchor" href="#_1-keyof-type-operator" aria-hidden="true">#</a> 1. Keyof Type Operator</h4><p><code>keyof</code> \u53EF\u7528\u6765\u83B7\u53D6 \u201C\u5BF9\u8C61\u7C7B\u578B\u201D \u7684 <code>key</code>\uFF0C\u5E76\u7EC4\u6210 <code>union</code>\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><h4 id="_2-typeof-type-operator" tabindex="-1"><a class="header-anchor" href="#_2-typeof-type-operator" aria-hidden="true">#</a> 2. Typeof Type Operator</h4><p>\u5728 JavaScript \u7684 \u201Cexpression context\u201D \u4E2D <code>typeof</code> \u53EF\u4EE5\u8FD4\u56DE\u5BF9\u5E94\u7684\u7C7B\u578B\uFF0C\u800C\u5728 TypeScript \u7684 \u201Ctype context\u201D \u4E2D <code>typeof</code> \u540C\u6837\u53EF\u4EE5\u8FD4\u56DE\u5BF9\u5E94\u7684\u7C7B\u578B\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">N</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> s
<span class="token comment">// type N = string</span>

<span class="token keyword">function</span> <span class="token function">f</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> f
<span class="token comment">// type F = () =&gt; {x: number; y: number;}</span>
</code></pre></div><h4 id="_3-indexed-access-types" tabindex="-1"><a class="header-anchor" href="#_3-indexed-access-types" aria-hidden="true">#</a> 3. Indexed Access Types</h4><p>\u7D22\u5F15\u7C7B\u578B\u4E3A type \u589E\u52A0\u7C7B\u4F3C\u4E8E JavaScript \u5BF9\u8C61\u6570\u7EC4\u7684\u7D22\u5F15\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">// \u5BF9\u8C61</span>
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

<span class="token comment">// \u6570\u7EC4</span>
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
</code></pre></div><h4 id="_4-conditional-types" tabindex="-1"><a class="header-anchor" href="#_4-conditional-types" aria-hidden="true">#</a> 4. Conditional Types</h4><p>\u57FA\u672C\u4E0E JavaScript \u7684\u4E09\u5143\u8FD0\u7B97\u7B26\u4E00\u81F4\u3002</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">MessageOf<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">}</span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>

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
</code></pre></div><h4 id="_5-mapped-types" tabindex="-1"><a class="header-anchor" href="#_5-mapped-types" aria-hidden="true">#</a> 5. Mapped Types</h4><p>\u6620\u5C04\u7C7B\u578B\u914D\u5408\u4E0A\u6CDB\u578B\uFF0C\u5C31\u9020\u5C31\u4E86\u5DE5\u5177\u7C7B\u578B\u7684\u57FA\u77F3\u3002</p><p>\u5176\u4E2D\u4FEE\u9970\u7B26\u53EF\u4EE5\u6539\u53D8\u539F\u6709\u7EA6\u675F\uFF0C<code>-</code> \u7528\u4E8E\u53D6\u6D88\uFF0C<code>+</code> \u5219\u76F8\u53CD\u4E14\u4E3A\u9ED8\u8BA4\u503C\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">CreateMutable<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>\u5BF9\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7F16\u8F91\u548C\u79FB\u9664\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Getters<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><h4 id="_6-template-literal-types" tabindex="-1"><a class="header-anchor" href="#_6-template-literal-types" aria-hidden="true">#</a> 6. Template Literal Types</h4><p>\u5F88\u597D\uFF0C\u5C31\u5DEE\u652F\u6301\u6B63\u5219\u4E86\u3002</p><h4 id="_7-extends-in" tabindex="-1"><a class="header-anchor" href="#_7-extends-in" aria-hidden="true">#</a> 7. extends &amp; in</h4>`,21),v=n("code",null,"extends",-1),_=s(" \u548C "),P=n("code",null,"in",-1),R=s(" \u90FD\u53EF\u4EE5\u4F5C\u4E3A\u7EA6\u675F\u884C\u4E3A\uFF0C\u5B9E\u9645\u4F7F\u7528\u4E2D\u662F\u8BA9\u4EBA"),O={href:"https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean",target:"_blank",rel:"noopener noreferrer"},E=s("\u7591\u60D1\u7684"),K=s("\uFF0C\u5176\u4E2D\u4E00\u6761\u8BC4\u8BBA\u4E0D\u77E5\u662F\u5426\u6B63\u786E\uFF1A\u201Cextends \u603B\u662F\u7528\u5728\u6CDB\u578B\u4E0A\uFF0Cin \u603B\u662F\u7528\u5728\u7D22\u5F15\u4E0A\u201D\u3002"),D=t(`<p>\u5728\u6CDB\u578B\u4E0A\u63D0\u524D\u505A\u7EA6\u675F\u53EF\u4EE5\u89E3\u51B3\u4E00\u4E9B\u95EE\u9898\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">prop</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>\u5176\u4E2D\u7684\u7F18\u7531\u5F88\u7B80\u5355\uFF0C\u6839\u636E\u53C2\u6570\u6765\u770B\uFF0C<code>u1</code> \u8FD4\u56DE\u7C7B\u578B\u662F <code>T[K]</code>\uFF0C\u800C <code>u2</code> \u8FD4\u56DE\u7C7B\u578B\u662F <code>T[keyof T]</code>\u3002</p><h4 id="_8-infer" tabindex="-1"><a class="header-anchor" href="#_8-infer" aria-hidden="true">#</a> 8. infer</h4><p><code>infer</code> \u5728 <code>extends</code> \u6761\u4EF6\u8BED\u53E5\u4E2D\u8868\u793A\u5C06\u8981\u63A8\u65AD\u7684\u7C7B\u578B\u3002</p><h3 id="\u5DE5\u5177\u7C7B\u578B\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u7C7B\u578B\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5DE5\u5177\u7C7B\u578B\u7684\u4F7F\u7528</h3><h4 id="_1-partial" tabindex="-1"><a class="header-anchor" href="#_1-partial" aria-hidden="true">#</a> 1. Partial</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u5C06 T \u4E2D\u7684\u6240\u6709\u7684\u5C5E\u6027\u90FD\u53D8\u4E3A\u53EF\u9009
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateTodo</span> <span class="token punctuation">(</span><span class="token parameter">todo<span class="token operator">:</span> Todo<span class="token punctuation">,</span> fieldsToUpdate<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token operator">...</span>fieldsToUpdate <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;organize desk&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;clear clutter&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo2 <span class="token operator">=</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span>todo1<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token string">&#39;throw out trash&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_2-readonly" tabindex="-1"><a class="header-anchor" href="#_2-readonly" aria-hidden="true">#</a> 2. Readonly</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u5C06 T \u4E2D\u7684\u6240\u6709\u5C5E\u6027\u53D8\u4E3A\u53EA\u8BFB\u5C5E\u6027
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> MyReadonly<span class="token operator">&lt;</span>Todo<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Delete inactive users&#39;</span>
<span class="token punctuation">}</span>

todo<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span> <span class="token comment">// ERROR</span>
<span class="token comment">// Cannot assign to &#39;title&#39; because it is a read-only property.</span>
</code></pre></div><h4 id="_3-record" tabindex="-1"><a class="header-anchor" href="#_3-record" aria-hidden="true">#</a> 3. Record</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u5C06 K \u4E2D\u6240\u6709\u7684\u5C5E\u6027\u7684\u503C\u8F6C\u4E3A T \u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">PageInfo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Page</span> <span class="token operator">=</span> <span class="token string">&#39;home&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;about&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;contact&#39;</span>

<span class="token keyword">const</span> nav<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Page<span class="token punctuation">,</span> PageInfo<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  about<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;about&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  contact<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;contact&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  home<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-pick" tabindex="-1"><a class="header-anchor" href="#_4-pick" aria-hidden="true">#</a> 4. Pick</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u6311\u9009\u7B26\u5408 K \u7C7B\u578B\u7684
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;completed&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Clean room&#39;</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_5-exclude" tabindex="-1"><a class="header-anchor" href="#_5-exclude" aria-hidden="true">#</a> 5. Exclude</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE U \u4E2D\u79FB\u9664\u53EF\u4EE5\u8D4B\u503C\u7ED9 K \u7684\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Exclude<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">K</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">U</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type T0 = &quot;b&quot; | &quot;c&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// type T1 = &quot;c&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span>
<span class="token comment">// type T2 = string | number</span>
</code></pre></div><h4 id="_6-omit" tabindex="-1"><a class="header-anchor" href="#_6-omit" aria-hidden="true">#</a> 6. Omit</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u4E2D\u79FB\u9664 K \u5C5E\u6027
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Omit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Clean room&#39;</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_7-extract" tabindex="-1"><a class="header-anchor" href="#_7-extract" aria-hidden="true">#</a> 7. Extract</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T\u3001U \u7C7B\u578B\u4E2D\u83B7\u53D6\u4EA4\u96C6
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Extract<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;f&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = &quot;a&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = () =&gt; void</span>
</code></pre></div><h4 id="_8-nonnullable" tabindex="-1"><a class="header-anchor" href="#_8-nonnullable" aria-hidden="true">#</a> 8. NonNullable</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE U \u7C7B\u578B\u4E2D\u79FB\u9664 null \u548C undefined
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NonNullable<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">null</span></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">U</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = string | number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T1 = string[]</span>
</code></pre></div><h4 id="_9-parameters" tabindex="-1"><a class="header-anchor" href="#_9-parameters" aria-hidden="true">#</a> 9. Parameters</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u83B7\u53D6\u53C2\u6570\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Parameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> infer <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">arg<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> number<span class="token punctuation">;</span> b<span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = []</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
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
</span></code></pre></div><h4 id="_10-constructorparameters" tabindex="-1"><a class="header-anchor" href="#_10-constructorparameters" aria-hidden="true">#</a> 10. ConstructorParameters</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ConstructorParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> infer <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> ConstructorParameters<span class="token operator">&lt;</span>ErrorConstructor<span class="token operator">&gt;</span><span class="token punctuation">;</span>
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
</code></pre></div><h4 id="_11-returntype" tabindex="-1"><a class="header-anchor" href="#_11-returntype" aria-hidden="true">#</a> 11. ReturnType</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u83B7\u53D6\u8FD4\u56DE\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// type T0 = string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
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
</span></code></pre></div><h4 id="_12-instancetype" tabindex="-1"><a class="header-anchor" href="#_12-instancetype" aria-hidden="true">#</a> 12. InstanceType</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u83B7\u53D6\u5B9E\u4F8B\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">InstanceType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token builtin">never</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
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
</code></pre></div><h4 id="_13-required" tabindex="-1"><a class="header-anchor" href="#_13-required" aria-hidden="true">#</a> 13. Required</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u5C06 T \u4E2D\u7684\u6240\u6709\u7684\u5C5E\u6027\u90FD\u53D8\u4E3A\u5FC5\u9009
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Required<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Props <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2<span class="token operator">:</span> Required<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span>
<span class="token comment">// Property &#39;b&#39; is missing in type &#39;{ a: number; }&#39; but required in type &#39;Required&lt;Props&gt;&#39;.</span>
</code></pre></div><h4 id="_14-thisparametertype" tabindex="-1"><a class="header-anchor" href="#_14-thisparametertype" aria-hidden="true">#</a> 14. ThisParameterType</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u83B7\u53D6 this
 */</span>
<span class="token keyword">type</span> <span class="token class-name">ThisParameterType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> infer <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token builtin">unknown</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">toHex</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> Number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">numberToString</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> ThisParameterType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> toHex<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toHex</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_15-omitthisparameter" tabindex="-1"><a class="header-anchor" href="#_15-omitthisparameter" aria-hidden="true">#</a> 15. OmitThisParameter</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u4ECE T \u7C7B\u578B\u4E2D\u79FB\u9664 this
 */</span>
<span class="token keyword">type</span> <span class="token class-name">OmitThisParameter<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">unknown</span> <span class="token keyword">extends</span> <span class="token class-name">ThisParameterType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> infer <span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> <span class="token constant">R</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre></div><p>Example\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">toHex</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token operator">:</span> Number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fiveToHex<span class="token operator">:</span> OmitThisParameter<span class="token operator">&lt;</span><span class="token keyword">typeof</span> toHex<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">toHex</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fiveToHex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_16-thistype" tabindex="-1"><a class="header-anchor" href="#_16-thistype" aria-hidden="true">#</a> 16. ThisType</h4><p>Define\uFF1A</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token comment">/**
 * \u5C06 T \u6CE8\u5165\u4E3A this
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ThisType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>Example\uFF1A</p><p>\u76F4\u63A5\u770B\u5B9A\u4E49\u4E00\u8138\u61F5\u903C\uFF0C\u800C\u5728\u793A\u4F8B\u4E2D\u5219\u5F88\u660E\u663E\u4E86\uFF0C\u662F\u5426\u60F3\u8D77\u4E86\u88AB\u589E\u5F3A\u7684 Vue Options \u5199\u6CD5\u5462\uFF1F</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">ObjectDescriptor<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
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
    <span class="token function">moveBy</span><span class="token punctuation">(</span><span class="token parameter">dx<span class="token operator">:</span> number<span class="token punctuation">,</span> dy<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> dx<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+=</span> dy<span class="token punctuation">;</span> <span class="token comment">// Strongly typed this</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">moveBy</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="typescript-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#typescript-\u5DE5\u5177" aria-hidden="true">#</a> TypeScript \u5DE5\u5177</h2>`,88),C={href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noopener noreferrer"},U=s("TypeScript Playground"),I=n("p",null,"\u5728\u7EBF TypeScript \u8FD0\u884C\u73AF\u5883",-1),M={href:"http://www.jsontots.com/",target:"_blank",rel:"noopener noreferrer"},S=s("JSON TO TS"),A=n("p",null,"\u6839\u636E JSON \u751F\u6210 typescript \u7684\u5DE5\u5177\uFF0C\u5F88\u8D5E",-1),F=n("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599")],-1),N={href:"https://www.typescriptlang.org/docs",target:"_blank",rel:"noopener noreferrer"},q=s("TypeScript"),j={href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"},H=s("TSConfig Reference"),L={href:"https://devblogs.microsoft.com/typescript/",target:"_blank",rel:"noopener noreferrer"},B=s("TypeScript Blogs"),J={href:"https://github.com/microsoft/TypeScript/tree/spec-update/doc/spec",target:"_blank",rel:"noopener noreferrer"},V=s("TypeScript Spec");function z(G,$){const a=e("OutboundLink");return l(),o(c,null,[i,n("p",null,[n("a",u,[d,p(a)]),y]),m,n("p",null,[n("a",g,[h,p(a)]),x,n("a",w,[b,p(a)]),f]),T,n("p",null,[v,_,P,R,n("a",O,[E,p(a)]),K]),D,n("ul",null,[n("li",null,[n("p",null,[n("a",C,[U,p(a)])]),I]),n("li",null,[n("p",null,[n("a",M,[S,p(a)])]),A])]),F,n("ol",null,[n("li",null,[n("a",N,[q,p(a)])]),n("li",null,[n("a",j,[H,p(a)])]),n("li",null,[n("a",L,[B,p(a)])]),n("li",null,[n("a",J,[V,p(a)])])])],64)}var X=r(k,[["render",z]]);export{X as default};
