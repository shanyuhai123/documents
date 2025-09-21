import{_ as s,c as n,a as e,o as p}from"./app-CQrWi6O2.js";const l={};function t(r,a){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="自增-减" tabindex="-1"><a class="header-anchor" href="#自增-减"><span>自增/减</span></a></h1><p>自增/减操作分为两种：</p><ul><li>前置递增/减：<code>a++/a--</code></li><li>后置递增/减：<code>++a/--a</code></li></ul><h2 id="错误的说明" tabindex="-1"><a class="header-anchor" href="#错误的说明"><span>错误的说明</span></a></h2><p>对于自增/减操作，初学时总是看到这样错误的说明：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> uid <span class="token operator">=</span> id<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 0</span></span>
<span class="line"><span class="token comment">// 赋值运算符优先于算数运算符，先执行赋值操作，再执行++操作</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> uid <span class="token operator">=</span> <span class="token operator">++</span>id<span class="token punctuation">;</span> <span class="token comment">// 1</span></span>
<span class="line"><span class="token comment">// 算数运算符优先于赋值运算符，先执行++操作，再执行赋值操作</span></span>
<span class="line"></span></code></pre></div><p>其实稍微翻一下 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank" rel="noopener noreferrer">MDN</a> 或其余的书都可以得到：后置递增/减的优先级为 18，前置递增/减的优先级为 17，而赋值操作的优先级为 3。</p><h2 id="原理定义" tabindex="-1"><a class="header-anchor" href="#原理定义"><span>原理定义</span></a></h2><p>在 <a href="https://tc39.es/ecma262/#sec-update-expressions" target="_blank" rel="noopener noreferrer">ECMA</a> 标准中可以找到如下：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 12.4.5 Postfix Decrement Operator（后置递增）</span>
<span class="line">1. Let lhs be the result of evaluating LeftHandSideExpression.</span>
<span class="line"></span>
<span class="line">2. Let oldValue be ? ToNumeric(? GetValue(lhs)).</span>
<span class="line"></span>
<span class="line">3. Let newValue be ! Type(oldValue)::subtract(oldValue, Type(oldValue)::unit).</span>
<span class="line"></span>
<span class="line">4. Perform ? PutValue(lhs, newValue).</span>
<span class="line"></span>
<span class="line">5. Return oldValue.</span>
<span class="line"></span></code></pre></div><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 12.4.7 Prefix Decrement Operator（前置递增）</span>
<span class="line">1. Let expr be the result of evaluating UnaryExpression.</span>
<span class="line"></span>
<span class="line">2. Let oldValue be ? ToNumeric(? GetValue(expr)).</span>
<span class="line"></span>
<span class="line">3. Let newValue be ! Type(oldValue)::add(oldValue, Type(oldValue)::unit).</span>
<span class="line"></span>
<span class="line">4. Perform ? PutValue(expr, newValue).</span>
<span class="line"></span>
<span class="line">5. Return newValue.</span>
<span class="line"></span></code></pre></div><p>对比两个第五项返回值操作，可以发现<strong>后置递增是返回旧的值</strong>，而<strong>前置递增是返回新的值</strong>。</p><p>赋值操作是将返回值赋给对应的变量，那么结果就很明确了。</p>`,13)])])}const c=s(l,[["render",t]]),i=JSON.parse('{"path":"/frontend/javascript/update-expressions.html","title":"自增/减","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"错误的说明","slug":"错误的说明","link":"#错误的说明","children":[]},{"level":2,"title":"原理定义","slug":"原理定义","link":"#原理定义","children":[]}],"git":{"updatedTime":1637397829000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":2,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"frontend/javascript/update-expressions.md"}');export{c as comp,i as data};
