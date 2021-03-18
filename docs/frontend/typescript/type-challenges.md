---
title: 类型挑战
---

## 感谢

感谢 [type-challenges](https://github.com/type-challenges/type-challenges) 这个项目，在初步学习 TypeScript 后得到了良好的练习。



## 工具

该项目提供了一些基础的工具来帮助测试。

### 对错

```ts
type Expect<T extends true> = T
type ExpectTrue<T extends true> = T
type ExpectFalse<T extends false> = T
type IsTrue<T extends true> = T
type IsFalse<T extends true> = T
```

### 相等

```ts
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true
```

### any

```ts
type IsAny<T> = 0 extends (1 & T) ? true : false
type NotAny<T> = true extends IsAny<T> ? false : true
```

### 其他

```ts
export type Debug<T> = { [K in keyof T]: T[K] }
export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
export type ExpectValidArgs<FUNC extends (...args: any[]) => any, ARGS extends any[]> = ARGS extends Parameters<FUNC>
  ? true
  : false

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
```



## 练习

### Hello World

```ts
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = string

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
```

### Pick

```ts
import { Equal, Expect } from '@type-challenges/utils'

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>
]
```

### Readonly

```ts
import { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

interface Todo1 {
  title: string
  description: string
  completed: boolean
}

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>
]
```

### Tuple to Object

```ts
import { Equal, Expect } from '@type-challenges/utils'

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]
```

### First of Array

```ts
import { Equal, Expect } from '@type-challenges/utils'

type First<T extends any[]> = T extends [] ? never : T[0]

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
```

### Length of Tuple

```ts
import { Equal, Expect } from '@type-challenges/utils'

type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
]
```

### Exclude

```ts
import { Equal, Expect } from '@type-challenges/utils'

type MyExclude<T, U> = T extends U ? never : T

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
```

### Awaited

```ts
import { Equal, Expect } from '@type-challenges/utils'

type Awaited<T> = T extends Promise<infer R> ? R : never

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]
```

### If

```ts
import { Equal, Expect } from '@type-challenges/utils'

type If<C extends boolean, T, F> = C extends true ? T : F

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
```

### Concat

```ts
import { Equal, Expect } from '@type-challenges/utils'

type Concat<T extends any[], U extends any[]> = [...T, ...U]

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]
```

### Includes

```ts
import { Equal, Expect } from '@type-challenges/utils'

type Includes<T extends any[], U> = U extends T[number] ? true : false

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
]
```

### Get Return Type

```ts
import { Equal, Expect } from '@type-challenges/utils'

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : any

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]
```

