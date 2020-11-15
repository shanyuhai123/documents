---
title: 自增/减
---

## 自增/减

自增/减操作分为两种：

+ 前置递增/减：`a++/a--`
+ 后置递增/减：`++a/--a`

对于自增/减操作，初学时总是看到这样错误的说明：

```js
let id = 0;
const uid = id++; // 0
// 赋值运算符优先于算数运算符，先执行赋值操作，再执行++操作

let id = 0;
const uid = ++id; // 1
// 算数运算符优先于赋值运算符，先执行++操作，再执行赋值操作
```

其实稍微翻一下 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 或其余的书都可以得到：后置递增/减的优先级为 18，前置递增/减的优先级为 17，而赋值操作的优先级为 3。



## 原理定义

在 [ECMA](https://tc39.es/ecma262/#sec-update-expressions) 标准中可以找到如下：

```
# 12.4.5 Postfix Decrement Operator（后置递增）
1. Let lhs be the result of evaluating LeftHandSideExpression.

2. Let oldValue be ? ToNumeric(? GetValue(lhs)).

3. Let newValue be ! Type(oldValue)::subtract(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(lhs, newValue).

5. Return oldValue.
```

```
# 12.4.7 Prefix Decrement Operator（前置递增）
1. Let expr be the result of evaluating UnaryExpression.

2. Let oldValue be ? ToNumeric(? GetValue(expr)).

3. Let newValue be ! Type(oldValue)::add(oldValue, Type(oldValue)::unit).

4. Perform ? PutValue(expr, newValue).

5. Return newValue.
```

对比两个第五项返回值操作，可以发现**后置递增是返回旧的值**，而**前置递增是返回新的值**。

赋值操作是将返回值赋给对应的变量，那么结果就很明确了。