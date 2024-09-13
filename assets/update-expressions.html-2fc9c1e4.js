import{_ as o,M as l,p as r,q as p,a1 as u,R as n,t as a,N as t}from"./framework-e3e34937.js";const d={},i={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",target:"_blank",rel:"noopener noreferrer"},c={href:"https://tc39.es/ecma262/#sec-update-expressions",target:"_blank",rel:"noopener noreferrer"};function k(x,e){const s=l("ExternalLinkIcon");return r(),p("div",null,[e[6]||(e[6]=u(`<h1 id="自增-减" tabindex="-1"><a class="header-anchor" href="#自增-减" aria-hidden="true">#</a> 自增/减</h1><p>自增/减操作分为两种：</p><ul><li>前置递增/减：<code>a++/a--</code></li><li>后置递增/减：<code>++a/--a</code></li></ul><h2 id="错误的说明" tabindex="-1"><a class="header-anchor" href="#错误的说明" aria-hidden="true">#</a> 错误的说明</h2><p>对于自增/减操作，初学时总是看到这样错误的说明：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> id<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// 赋值运算符优先于算数运算符，先执行赋值操作，再执行++操作</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> <span class="token operator">++</span>id<span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token comment">// 算数运算符优先于赋值运算符，先执行++操作，再执行赋值操作</span>
</code></pre></div>`,6)),n("p",null,[e[1]||(e[1]=a("其实稍微翻一下 ")),n("a",i,[e[0]||(e[0]=a("MDN")),t(s)]),e[2]||(e[2]=a(" 或其余的书都可以得到：后置递增/减的优先级为 18，前置递增/减的优先级为 17，而赋值操作的优先级为 3。"))]),e[7]||(e[7]=n("h2",{id:"原理定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原理定义","aria-hidden":"true"},"#"),a(" 原理定义")],-1)),n("p",null,[e[4]||(e[4]=a("在 ")),n("a",c,[e[3]||(e[3]=a("ECMA")),t(s)]),e[5]||(e[5]=a(" 标准中可以找到如下："))]),e[8]||(e[8]=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`# 12.4.5 Postfix Decrement Operator（后置递增）
1. Let lhs be the result of evaluating LeftHandSideExpression.

2. Let oldValue be ? ToNumeric(? GetValue(lhs)).

3. Let newValue be ! Type(oldValue)::subtract(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(lhs, newValue).

5. Return oldValue.
`)])],-1)),e[9]||(e[9]=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`# 12.4.7 Prefix Decrement Operator（前置递增）
1. Let expr be the result of evaluating UnaryExpression.

2. Let oldValue be ? ToNumeric(? GetValue(expr)).

3. Let newValue be ! Type(oldValue)::add(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(expr, newValue).

5. Return newValue.
`)])],-1)),e[10]||(e[10]=n("p",null,[a("对比两个第五项返回值操作，可以发现"),n("strong",null,"后置递增是返回旧的值"),a("，而"),n("strong",null,"前置递增是返回新的值"),a("。")],-1)),e[11]||(e[11]=n("p",null,"赋值操作是将返回值赋给对应的变量，那么结果就很明确了。",-1))])}const f=o(d,[["render",k],["__file","update-expressions.html.vue"]]);export{f as default};
