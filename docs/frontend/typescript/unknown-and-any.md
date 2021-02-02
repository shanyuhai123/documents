---
title: Unknown & Any
---

## 替代 any

每当想使用 `any` 时，都应先考虑 `unknown`，它是 `any` 类型对应的安全类型，即在对 `unknown` 类型的值执行大多数操作之前，我们必须进行某种形式的检查。



## Unknown

`unknown` 类型可以接受任何类型。

```tsx
let value: unknown
let v1: any
const v2: bigint = 100n

value = false // OK
value = 6 // OK
value = 'blue' // OK
value = [1, 2, 3] // OK
value = ['hello', 10] // OK
value = null // OK
value = undefined // OK
value = new Error('hi') // OK
value = { o: 'hello' } // OK
value = Symbol('hello') // OK
value = v1 // OK
value = v2 // OK
```

但 `unknown` 类型只能赋予 `unknown` 及 `any` 类型。

```tsx
let value: unknown

const v1: any = value // OK
const v2: unknown = value // OK
const v3: boolean = value // ERROR
const v4: number = value // ERROR
const v5: bigint = value // ERROR
const v6: string = value // ERROR
const v7: any[] = value // ERROR
const v8: null = value // ERROR
const v9: undefined = value // ERROR
const v10: never = value // ERROR
```



## Unions and Intersection Types

### 1. 联合类型

除了和 `any` 类型外都返回 `unknown` 类型。

```tsx
type U1 = unknown | any // any
type U2 = unknown | number // unknown
type U3 = unknown | string // unknown
type U4 = unknown | any[] // unknown
type U5 = unknown | null // unknown
type U6 = unknown | undefined // unknown
type U7 = unknown | never // unknown
```

### 2. 交叉类型

```tsx
type I1 = unknown & any // any
type I2 = unknown & number // number
type I3 = unknown & string // string
type I4 = unknown & any[] // any[]
type I5 = unknown & null // null
type I6 = unknown & undefined // undefined
type I7 = unknown & never // never
```

