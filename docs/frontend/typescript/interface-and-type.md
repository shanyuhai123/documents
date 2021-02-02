---
title: Interface & Type Aliases
---

## 概念

 `type`，全称是 `Type Aliases`，即 “类型别名”，注意它是别名而不是真正的类型。

[interface](https://www.typescriptlang.org/docs/handbook/interfaces.html) 从官网看来可以描述：对象、函数、数组、Class。



## 交集

测试过程中 `interface` 的错误提示更友善。

### 1. interface extends interface

```tsx
interface Animal {
  name: string;
}
interface Dog extends Animal {
  say(): string
}
```

### 2. type & type

```tsx
type Animal = {
  name: string;
}
type Dog = Animal & {
  say(): string
}
```

### 3. interface extends type

```tsx
type Animal = {
  name: string;
}
interface Dog extends Animal {
  say(): string
}
```

### 4. type & interface

```tsx
interface Animal {
  name: string;
}
type Dog = Animal & {
  say(): string
}
```



## 区别

### 1. Tuple

```tsx
type Tuple = [number, string]
interface ITuple {
  0: number
  1: string
}

[1, 'hello', false] as Tuple // ERROR
[1, 'hello', false] as ITuple // OK
```

### 2. 合并

```tsx
type Once = { a: string }
type Once = { b: string }
// Duplicate identifier 'Once'.

interface IOnce {
  a: string
}
interface IOnce {
  b: string
}
// 合并为
// interface IOnce {
//   a: string
//   b: string
// }
```

### 3. 工具类型

```tsx
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```

