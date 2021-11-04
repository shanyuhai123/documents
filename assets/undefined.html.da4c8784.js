import{r as n,c as s,a,b as t,w as p,F as e,d as o,e as c,o as u}from"./app.c20c51e5.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},d=a("h2",{id:"描述",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),o(" 描述")],-1),k=a("div",{class:"custom-container danger"},[a("p",{class:"custom-container-title"},"要考的"),a("p",null,[a("code",null,"undefined"),o(" 是全局对象的一个属性。也就是说，它是全局作用域的一个变量。"),a("code",null,"undefiled"),o(" 的最初始值就是原始数据类型 "),a("code",null,"undefiled"),o("。")])],-1),r=o("一个没有被赋值的变量的类型是 "),f=a("code",null,"undefiled",-1),m=o("。如果方法或者语句中操作的变量没有赋值，则会返回 "),g=a("code",null,"undefiled",-1),v=o("（"),y=o("语句完成值"),h=o("）。"),w=c('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n  <span class="token keyword">return</span> a<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n</code></pre></div><h2 id="变量名" tabindex="-1"><a class="header-anchor" href="#变量名" aria-hidden="true">#</a> 变量名</h2><p>由于 <code>undefiled</code> 不是一个保留字，所以它可能在非全局作用域中被当作变量名来使用。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a string</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',4);var j=l(i,[["render",function(o,c){const l=n("RouterLink");return u(),s(e,null,[d,k,a("p",null,[r,f,m,g,v,t(l,{to:"/frontend/javascript/statements-and-expressions.html#%E8%AF%AD%E5%8F%A5%E5%AE%8C%E6%88%90%E5%80%BC"},{default:p((()=>[y])),_:1}),h]),w],64)}]]);export{j as default};