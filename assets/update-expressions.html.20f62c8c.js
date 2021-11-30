import{r as t,c as o,a as e,b as s,F as r,e as l,d as n,o as c}from"./app.7834c521.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const d={},u=l(`<h1 id="\u81EA\u589E-\u51CF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u589E-\u51CF" aria-hidden="true">#</a> \u81EA\u589E/\u51CF</h1><p>\u81EA\u589E/\u51CF\u64CD\u4F5C\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ul><li>\u524D\u7F6E\u9012\u589E/\u51CF\uFF1A<code>a++/a--</code></li><li>\u540E\u7F6E\u9012\u589E/\u51CF\uFF1A<code>++a/--a</code></li></ul><h2 id="\u9519\u8BEF\u7684\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u7684\u8BF4\u660E" aria-hidden="true">#</a> \u9519\u8BEF\u7684\u8BF4\u660E</h2><p>\u5BF9\u4E8E\u81EA\u589E/\u51CF\u64CD\u4F5C\uFF0C\u521D\u5B66\u65F6\u603B\u662F\u770B\u5230\u8FD9\u6837\u9519\u8BEF\u7684\u8BF4\u660E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> id<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// \u8D4B\u503C\u8FD0\u7B97\u7B26\u4F18\u5148\u4E8E\u7B97\u6570\u8FD0\u7B97\u7B26\uFF0C\u5148\u6267\u884C\u8D4B\u503C\u64CD\u4F5C\uFF0C\u518D\u6267\u884C++\u64CD\u4F5C</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uid <span class="token operator">=</span> <span class="token operator">++</span>id<span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token comment">// \u7B97\u6570\u8FD0\u7B97\u7B26\u4F18\u5148\u4E8E\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u5148\u6267\u884C++\u64CD\u4F5C\uFF0C\u518D\u6267\u884C\u8D4B\u503C\u64CD\u4F5C</span>
</code></pre></div>`,6),i=n("\u5176\u5B9E\u7A0D\u5FAE\u7FFB\u4E00\u4E0B "),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",target:"_blank",rel:"noopener noreferrer"},_=n("MDN"),k=n(" \u6216\u5176\u4F59\u7684\u4E66\u90FD\u53EF\u4EE5\u5F97\u5230\uFF1A\u540E\u7F6E\u9012\u589E/\u51CF\u7684\u4F18\u5148\u7EA7\u4E3A 18\uFF0C\u524D\u7F6E\u9012\u589E/\u51CF\u7684\u4F18\u5148\u7EA7\u4E3A 17\uFF0C\u800C\u8D4B\u503C\u64CD\u4F5C\u7684\u4F18\u5148\u7EA7\u4E3A 3\u3002"),m=e("h2",{id:"\u539F\u7406\u5B9A\u4E49",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u539F\u7406\u5B9A\u4E49","aria-hidden":"true"},"#"),n(" \u539F\u7406\u5B9A\u4E49")],-1),x=n("\u5728 "),f={href:"https://tc39.es/ecma262/#sec-update-expressions",target:"_blank",rel:"noopener noreferrer"},V=n("ECMA"),g=n(" \u6807\u51C6\u4E2D\u53EF\u4EE5\u627E\u5230\u5982\u4E0B\uFF1A"),b=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`# 12.4.5 Postfix Decrement Operator\uFF08\u540E\u7F6E\u9012\u589E\uFF09
1. Let lhs be the result of evaluating LeftHandSideExpression.

2. Let oldValue be ? ToNumeric(? GetValue(lhs)).

3. Let newValue be ! Type(oldValue)::subtract(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(lhs, newValue).

5. Return oldValue.
`)])],-1),v=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`# 12.4.7 Prefix Decrement Operator\uFF08\u524D\u7F6E\u9012\u589E\uFF09
1. Let expr be the result of evaluating UnaryExpression.

2. Let oldValue be ? ToNumeric(? GetValue(expr)).

3. Let newValue be ! Type(oldValue)::add(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(expr, newValue).

5. Return newValue.
`)])],-1),w=e("p",null,[n("\u5BF9\u6BD4\u4E24\u4E2A\u7B2C\u4E94\u9879\u8FD4\u56DE\u503C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u53D1\u73B0"),e("strong",null,"\u540E\u7F6E\u9012\u589E\u662F\u8FD4\u56DE\u65E7\u7684\u503C"),n("\uFF0C\u800C"),e("strong",null,"\u524D\u7F6E\u9012\u589E\u662F\u8FD4\u56DE\u65B0\u7684\u503C"),n("\u3002")],-1),y=e("p",null,"\u8D4B\u503C\u64CD\u4F5C\u662F\u5C06\u8FD4\u56DE\u503C\u8D4B\u7ED9\u5BF9\u5E94\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u7ED3\u679C\u5C31\u5F88\u660E\u786E\u4E86\u3002",-1);function L(N,P){const a=t("OutboundLink");return c(),o(r,null,[u,e("p",null,[i,e("a",h,[_,s(a)]),k]),m,e("p",null,[x,e("a",f,[V,s(a)]),g]),b,v,w,y],64)}var j=p(d,[["render",L]]);export{j as default};
