import{_ as t,M as o,p as l,q as r,Q as e,t as a,N as s,a1 as p}from"./framework-49860b1b.js";const c={},d=p(`<h1 id="自增-减" tabindex="-1"><a class="header-anchor" href="#自增-减" aria-hidden="true">#</a> 自增/减</h1><p>自增/减操作分为两种：</p><ul><li>前置递增/减：<code>a++/a--</code></li><li>后置递增/减：<code>++a/--a</code></li></ul><h2 id="错误的说明" tabindex="-1"><a class="header-anchor" href="#错误的说明" aria-hidden="true">#</a> 错误的说明</h2><p>对于自增/减操作，初学时总是看到这样错误的说明：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> id<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// 赋值运算符优先于算数运算符，先执行赋值操作，再执行++操作</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> <span class="token operator">++</span>id<span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token comment">// 算数运算符优先于赋值运算符，先执行++操作，再执行赋值操作</span>
</code></pre></div>`,6),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",target:"_blank",rel:"noopener noreferrer"},i=e("h2",{id:"原理定义",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#原理定义","aria-hidden":"true"},"#"),a(" 原理定义")],-1),h={href:"https://tc39.es/ecma262/#sec-update-expressions",target:"_blank",rel:"noopener noreferrer"},_=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# 12.4.5 Postfix Decrement Operator（后置递增）
1. Let lhs be the result of evaluating LeftHandSideExpression.

2. Let oldValue be ? ToNumeric(? GetValue(lhs)).

3. Let newValue be ! Type(oldValue)::subtract(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(lhs, newValue).

5. Return oldValue.
`)])],-1),k=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# 12.4.7 Prefix Decrement Operator（前置递增）
1. Let expr be the result of evaluating UnaryExpression.

2. Let oldValue be ? ToNumeric(? GetValue(expr)).

3. Let newValue be ! Type(oldValue)::add(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(expr, newValue).

5. Return newValue.
`)])],-1),x=e("p",null,[a("对比两个第五项返回值操作，可以发现"),e("strong",null,"后置递增是返回旧的值"),a("，而"),e("strong",null,"前置递增是返回新的值"),a("。")],-1),m=e("p",null,"赋值操作是将返回值赋给对应的变量，那么结果就很明确了。",-1);function f(V,g){const n=o("ExternalLinkIcon");return l(),r("div",null,[d,e("p",null,[a("其实稍微翻一下 "),e("a",u,[a("MDN"),s(n)]),a(" 或其余的书都可以得到：后置递增/减的优先级为 18，前置递增/减的优先级为 17，而赋值操作的优先级为 3。")]),i,e("p",null,[a("在 "),e("a",h,[a("ECMA"),s(n)]),a(" 标准中可以找到如下：")]),_,k,x,m])}const v=t(c,[["render",f],["__file","update-expressions.html.vue"]]);export{v as default};
