# 推导 Ref 类型

> 类型体操使我更加强壮。

使用 `ref` 的姿势为：

```ts
const count = ref(0)
console.log(count.value)
```

所以先摆个 `Ref`：

```ts
interface Ref<T = any> {
  value: T
}
```

## 推断 infer

[infer](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types) 可在 `extends` 条件语句中进行推断：

```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type
```

## 使用泛型来推导结果

有 `ref` 函数：

```ts
export function ref(value: any) {
  return {
    value
  }
}

const count = ref(1)
type C = typeof count.value // any
```

加上泛型进行推导：

```ts
export function ref<T>(value: T): Ref<T> {
  return {
    value
  }
}

const count = ref(1)
type C = typeof count.value // number
const str = ref('1')
type S = typeof str.value // string
```

## ref 值嵌套

```ts
export function ref<T>(value: T): Ref<T> {
  return {
    value
  }
}

const count = ref(ref(ref(1)))
type C = typeof count.value // Ref<Ref<number>>
```

所以可以作出一个判断，当传入的类型是 Ref 类型时就用其内部的类型，于是得到：

```ts
type UnwrapRef<T> = T extends Ref<infer R> ? R : T
```

配合使用：

```ts
type UnwrapRef<T> = T extends Ref<infer R> ? R : T

export function ref<T>(value: T): Ref<UnwrapRef<T>> {
  return {
    value
  } as any
}

// 解说：
// ref(1) 传入类型是 number，所以条件语句 `T extends Ref<infer R>` 会走 false，返回 number
// 于是 ref(1) 的类型为 Ref<number>
// 再 ref(ref(1))，传入类型是 Ref<number>，所以条件语句 `T extends Ref<infer R>` 会走 True，返回 number
// 于是 ref(ref(1)) 的类型依旧为 Ref<number>
// 再 ref(ref(ref(1)))，传入类型是 Ref<number>，所以条件语句 `T extends Ref<infer R>` 会走 True，返回 number
const count = ref(ref(ref(1)))
type C = typeof count.value // number
const str = ref(ref(ref('1')))
type S = typeof str.value // string
```

## ref 对象嵌套

修改下示例：

```ts
const obj = ref({
  foo: 1,
  bar: '1'
})
type OF = typeof obj.value.foo // number
type OB = typeof obj.value.bar // string
```

若其中的值是 `ref` 呢？

```ts
const obj = ref({
  foo: ref(1),
  bar: ref('1')
})
type OF = typeof obj.value.foo // Ref<number>
type OB = typeof obj.value.bar // Ref<string>
```

这就不符合期望了，需要修改 `UnwrapRef`：

```ts
type UnwrapRef<T> = T extends Ref<infer R>
  ? UnwrapRefSimple<R>
  : UnwrapRefSimple<T>
                                  
// UnwrapRef 仅作 infer，其余交给 UnwrapRefSimple
type UnwrapRefSimple<T> = T extends Ref
  ? T
  : T extends object
    ? {
      [K in keyof T]: UnwrapRef<T[K]>
    }
    : T
```

修改测试用例：

```ts
const obj = ref({
  foo: ref('1'),
  bar: ref({
    baz: ref(true)
  }),
  arr: [{
    foo: ref(false)
  }, {
    foo: ref('1')
  }]
})

const c1 = ref(1)
type C1 = typeof c1.value // number
const count = ref(ref(ref(1)))
type C = typeof count.value // number
type OF = typeof obj.value.foo // string
type OB = typeof obj.value.bar.baz // boolean

type A = typeof obj.value.arr
obj.value.arr.forEach(a => {
  type A = typeof a.foo // string | boolean
})
```

## 对比结果

```ts
interface Ref<T = any> {
  value: T
}

type UnwrapRef<T> = T extends Ref<infer R>
  ? UnwrapRefSimple<R>
  : UnwrapRefSimple<T>

type UnwrapRefSimple<T> = T extends Ref
  ? T
  : T extends object
    ? {
      [K in keyof T]: UnwrapRef<T[K]>
    }
    : T
    
export function ref<T>(value: T): Ref<UnwrapRef<T>> {
  return {
    value
  } as any
}
```

而 Vue 源码则是：

```ts
export interface RefUnwrapBailTypes {}

export type UnwrapRef<T> = T extends Ref<infer V>
  ? UnwrapRefSimple<V>
  : UnwrapRefSimple<T>

export type UnwrapRefSimple<T> = T extends
  | Function
  | CollectionTypes
  | BaseTypes
  | Ref
  | RefUnwrapBailTypes[keyof RefUnwrapBailTypes]
  ? T
  : T extends Array<any>
    ? { [K in keyof T]: UnwrapRefSimple<T[K]> }
    : T extends object
      ? {
        [P in keyof T]: P extends symbol ? T[P] : UnwrapRef<T[P]>
      }
      : T
```

源码中比较有意思的是添加了 `RefUnwrapBailTypes`，增加了外部扩展的空间。
