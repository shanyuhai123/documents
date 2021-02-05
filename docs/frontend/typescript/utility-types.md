---
title: 工具类型
---

## 前置条件

[泛型](https://www.typescriptlang.org/docs/handbook/generics.html)是一切工具类型的基础，可以当作函数中的入参，而想要进一步则还需要借助 [Type Manipulation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)。

### 1. Keyof Type Operator

`keyof` 可用来获取 “对象类型” 的 `key`，并组成 `union`。

```tsx
type Point = {
  x: number
  y: number
}

type P = keyof Point
// type P = "x" | "y"

type Mapish = {
  [k: string]: string
}

type M = keyof Mapish
// type M = string | number
```

### 2. Typeof Type Operator

在 JavaScript 的 “expression context” 中 `typeof` 可以返回对应的类型，而在 TypeScript 的 “type context” 中 `typeof` 同样可以返回对应的类型。

```tsx
let s = 'hello'
type N = typeof s
// type N = string

function f () {
  return { x: 10, y: 3 }
}
type F = typeof f
// type F = () => {x: number; y: number;}
```

### 3. Indexed Access Types 

索引类型为 type 增加类似于 JavaScript 对象数组的索引。

```tsx
// 对象
type Person = {
  age: number
  name: string
  alive: boolean
}

type I1 = Person['age' | 'name'];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// type I3 = string | boolean

// 数组
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 }
]

type Person = typeof MyArray[number];
// type Person = {
//   name: string;
//   age: number;
// }
```

### 4. Conditional Types

基本与 JavaScript 的三元运算符一致。

```tsx
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string
}

interface Dog {
  bark(): void
}

type EmailMessageContents = MessageOf<Email>
// type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>
// type DogMessageContents = never
```

### 5. Mapped Types

映射类型配合上泛型，就造就了工具类型的基石。

其中修饰符可以改变原有约束，`-` 用于取消，`+` 则相反且为默认值：

```tsx
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//   id: string;
//   name: string;
// }

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
// type User = {
//   id: string;
//   name: string;
//   age: number;
// }
```

对属性进行操作，编辑和移除：

```tsx
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }

type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, 'kind'>]: T[K]
};

interface Circle {
  kind: 'circle';
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
// type KindlessCircle = {
//   radius: number;
// }
```

### 6. Template Literal Types

很好，就差支持正则了。

### 7. extends & in

`extends` 和 `in` 都可以作为约束行为，实际使用中是让人[疑惑的](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)，其中一条评论不知是否正确：“extends 总是用在泛型上，in 总是用在索引上”。

在泛型上提前做约束可以解决一些问题：

```tsx
function prop<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

function prop2<T> (obj: T, key: keyof T) {
  return obj[key]
}

let user = {
  name: 'shanyuhai',
  age: 18
}

let u1 = prop(user, 'name') // u1: string
let u2 = prop2(user, 'age') // u2: string | number
```

其中的缘由很简单，根据参数来看，`u1` 返回类型是 `T[K]`，而 `u2` 返回类型是 `T[keyof T]`。

### 8. infer

`infer` 在 `extends` 条件语句中表示将要推断的类型。



## `Partial<Type>`

### Define

```tsx
/**
 * 将 T 中的所有的属性都变为可选
 */
type Partial<T> = {
    [P in keyof T]?: T[P]
};
```

### Example

```tsx
interface Todo {
  title: string
  description: string
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter'
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash'
})
```



## `Readonly<Type>`

### Define

```tsx
/**
 * 将 T 中的所有属性变为只读属性
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

### Example

```tsx
interface Todo {
  title: string
}

const todo: MyReadonly<Todo> = {
  title: 'Delete inactive users'
}

todo.title = 'Hello' // ERROR
// Cannot assign to 'title' because it is a read-only property.
```



## `Record<Keys,Type>`

### Define

```tsx
/**
 * 将 K 中所有的属性的值转为 T 类型
 */
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

### Example

```tsx
interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'

const nav: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' }
}
```



## `Pick<Type, Keys>`

### Define

```tsx
/**
 * 从 T 类型中挑选符合 K 类型的
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### Example

```tsx
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```



## `Exclude<Type, ExcludedUnion>`

### Define

```tsx
/**
 * 从 U 中移除可以赋值给 K 的类型
 */
type Exclude<U, K> = U extends K ? never : U
```

### Example

```tsx
type T0 = Exclude<'a' | 'b' | 'c', 'a'>
// type T0 = "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>
// type T2 = string | number
```



## `Omit<Type, Keys>`

### Define

```tsx
/**
 * 从 T 中移除 K 属性
 */
type Omit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P]
}
```

### Example

```tsx
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```



## `Extract<Type, Union>`

### Define

```tsx
/**
 * 从 T、U 类型中获取交集
 */
type Extract<T, U> = T extends U ? T : never
```

### Example

```tsx
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
// type T1 = () => void
```



## `NonNullable<Type>`

### Define

```tsx
/**
 * 从 U 类型中移除 null 和 undefined
 */
type NonNullable<U> = U extends null | undefined ? never : U
```

### Example

```tsx
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]
```



## `Parameters<Type>`

### Define

```tsx
/**
 * 从 T 类型中获取参数类型
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

### Example

```tsx
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
// type T0 = []
type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
// type T3 = [arg: {
//   a: number;
//   b: string;
// }]
type T4 = Parameters<any>;
// type T4 = unknown[]
type T5 = Parameters<never>;
// type T5 = never
type T6 = Parameters<string>; // ERROR
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = never
type T7 = Parameters<Function>; // ERROR
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T7 = never
```



## `ConstructorParameters<Type>`

### Define

```tsx
/**
 * 从 T 类型中获取构造函数的参数类型
 */
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
```

### Example

```tsx
type T0 = ConstructorParameters<ErrorConstructor>;
// type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
// type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
// type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
// type T3 = unknown[]

type T4 = ConstructorParameters<Function>; // ERROR
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = never
```



## `ReturnType<Type>`

### Define

```tsx
/**
 * 从 T 类型中获取返回类型
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
```

### Example

```tsx
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string
type T1 = ReturnType<(s: string) => void>;
// type T1 = void
type T2 = ReturnType<<T>() => T>;
// type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]
type T4 = ReturnType<typeof f1>;
// type T4 = {
// a: number;
// b: string;
// }
type T5 = ReturnType<any>;
// type T5 = any
type T6 = ReturnType<never>;
// type T6 = never
type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any
type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any
```



## `InstanceType<Type>`

### Define

```tsx
/**
 * 从 T 类型中获取实例类型
 */
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never
```

### Example

```tsx
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C
type T1 = InstanceType<any>;
// type T1 = any
type T2 = InstanceType<never>;
// type T2 = never
type T3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'new (...args: any) => any'.
// type T3 = any
type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = any
```



## `Required<Type>`

### Define

```tsx
/**
 * 将 T 中的所有的属性都变为必选
 */
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

### Example

```tsx
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }

const obj2: Required<Props> = { a: 5 }
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```



## `ThisParameterType<Type>`

### Define

```tsx
/**
 * 从 T 类型获取 this
 */
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown
```

### Example

```tsx
function toHex (this: Number) {
  return this.toString(16)
}

function numberToString (n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}
```



## `OmitThisParameter<Type>`

### Define

```tsx
/**
 * 从 T 类型中移除 this
 */
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T
```

### Example

```tsx
function toHex (this: Number) {
  return this.toString(16)
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)

console.log(fiveToHex())
```



## `ThisType<Type>`

### Define

```tsx
/**
 * 将 T 注入为 this
 */
interface ThisType<T> { }
```

### Example

直接看定义一脸懵逼，而在示例中则很明显了，是否想起了被增强的 Vue Options 写法呢？

```tsx
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

