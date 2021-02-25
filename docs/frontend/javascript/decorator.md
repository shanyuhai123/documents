---
title: Decorator
---

## 前言

一直以来对 [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 存在偏见，只做到简单了解，但在了解 `Decorator` 后我觉得 `Class` 又行了。

以下内容介绍的是 [TypeScript Decorator](https://www.typescriptlang.org/docs/handbook/decorators.html)，与 [TC39 Decorator](https://tc39.es/proposal-decorators/) 存在差别：

```ts
// 旧
interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;
  configurable?: boolean;
  writable?: boolean;
  value?: T;
  get?: () => T;
  set?: (value: T) => void;
}

// 新
type Decorator = (value: Input, context: {
  kind: string;
  name?: string | symbol;
  access?: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  isPrivate?: boolean;
  isStatic?: boolean;
  defineMetadata(key: string | symbol | number, value: unknown);
}) => Output | void;
```



## Decorator

### 高阶函数

高阶函数只要满足参数或返回值为函数就可以称为高阶函数，一般情况下我们会同时满足这两点。

来看一个示例：

```ts
function hoc (func: Function) {
  return function (this: any) {
    // before func exec
    // do something...

    // 拆分 return
    const f = func.apply(this, arguments)

    // after func exec
    // do something...

    return f
  }
}

function test () {
  console.log('test')
}

const thoc = hoc(test)
thoc() // test
```

### 什么是装饰器

装饰器就是一个函数，更推荐统一使用 [Decorator Factories](https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories) 形式：

```ts
// 想想  Object.defineProperty(target,name,descriptor)

function d1 (target, name, descriptor): void {
  console.log('d1', target, name, descriptor)
}

const d2 = (target, name, descriptor): void => console.log('d2', target, name, descriptor)

function d3 (): Function {
  return function (target, name, descriptor): void {
    console.log('d3', target, name, descriptor)
  }
}

const d4 = (): Function => (target, name, descriptor): void => console.log('d4', target, name, descriptor)

function d5 (): Function {
  console.log('d5 before')
  return function (target, name, descriptor): void {
    console.log('d5', target, name, descriptor)
  }
}

const d6 = (message: string): Function => {
  console.log('d6 before')
  return (target, name, descriptor): void => {
    console.log(`d6 ${message}`, target, name, descriptor)
  }
}

@d1
@d2
@d3()
@d4()
@d5()
@d6('hello world')
class Log {}
// "d5 before"
// "d6 before"
// "d6 hello world"
// "d5"
// "d4"
// "d3"
// "d2"
// "d1"
```

以 `@ + 函数名` 对以下进行装饰：

+ Class Decorators
+ Method Decorators
+ Accessor Decorators
+ Property Decorators
+ Parameter Decorators

### 装饰器执行

添加对以上情况的示例：

```ts
function DecoratorClass (tip: string): Function {
  console.log(`DecoratorClass ${tip} before`)
  return function (target, name, descriptor): void {
    console.log(`DecoratorClass ${tip}`, target, name, descriptor)
  }
}

function DecoratorMethod (tip: string): Function {
  console.log(`DecoratorMethod ${tip} before`)
  return function (target, name, descriptor): void {
    console.log(`DecoratorMethod ${tip}`, target, name, descriptor)
  }
}

function DecoratorAccessor (tip: string): Function {
  console.log(`DecoratorAccessor ${tip} before`)
  return function (target, name, descriptor): void {
    console.log(`DecoratorAccessor ${tip}`, target, name, descriptor)
  }
}

function DecoratorProperty (tip: string): Function {
  console.log(`DecoratorProperty ${tip} before`)
  return function (target, name, descriptor): void {
    console.log(`DecoratorProperty ${tip}`, target, name, descriptor)
  }
}

function DecoratorParameter (tip: string): Function {
  console.log(`DecoratorParameter ${tip} before`)
  return function (target, name, descriptor): void {
    console.log(`DecoratorParameter ${tip}`, target, name, descriptor)
  }
}

@DecoratorClass('class')
class Log {
  @DecoratorProperty('p1')
  p1: string

  @DecoratorProperty('static p2')
  static p2: string

  constructor (
  @DecoratorParameter('constructor p1 param')
    p1: string
  ) {
    this.p1 = p1
  }

  @DecoratorMethod('m1')
  m1 (
  @DecoratorParameter('m1 p1 param')
    p1: string
  ) {
    this.p1 = p1
  }

  @DecoratorMethod('static m2')
  static m2 () {}

  @DecoratorAccessor('a1')
  get a1 () {
    return 'Accessor'
  }
}
```

```bash
# 输出
[LOG]: "DecoratorProperty p1 before" 
[LOG]: "DecoratorProperty p1",  Log: {},  "p1",  undefined 
[LOG]: "DecoratorMethod m1 before" 
[LOG]: "DecoratorParameter m1 p1 param before" 
[LOG]: "DecoratorParameter m1 p1 param",  Log: {},  "m1",  0 
[LOG]: "DecoratorMethod m1",  Log: {},  "m1",  {
  "writable": true,
  "enumerable": false,
  "configurable": true
} 
[LOG]: "DecoratorAccessor a1 before" 
[LOG]: "DecoratorAccessor a1",  Log: {},  "a1",  {
  "enumerable": false,
  "configurable": true
} 
[LOG]: "DecoratorProperty static p2 before" 
[LOG]: "DecoratorProperty static p2",  class Log {
    constructor(p1) {
        this.p1 = p1;
    }
    m1(p1) {
        this.p1 = p1;
    }
    static m2() { }
    get a1() {
        return 'Accessor';
    }
},  "p2",  undefined 
[LOG]: "DecoratorMethod static m2 before" 
[LOG]: "DecoratorMethod static m2",  class Log {
    constructor(p1) {
        this.p1 = p1;
    }
    m1(p1) {
        this.p1 = p1;
    }
    static m2() { }
    get a1() {
        return 'Accessor';
    }
},  "m2",  {
  "writable": true,
  "enumerable": false,
  "configurable": true
} 
[LOG]: "DecoratorClass class before" 
[LOG]: "DecoratorParameter constructor p1 param before" 
[LOG]: "DecoratorParameter constructor p1 param",  class Log {
    constructor(p1) {
        this.p1 = p1;
    }
    m1(p1) {
        this.p1 = p1;
    }
    static m2() { }
    get a1() {
        return 'Accessor';
    }
},  undefined,  0 
[LOG]: "DecoratorClass class",  class Log {
    constructor(p1) {
        this.p1 = p1;
    }
    m1(p1) {
        this.p1 = p1;
    }
    static m2() { }
    get a1() {
        return 'Accessor';
    }
},  undefined,  undefined
```

根据输出得到执行顺序：

1. 属性装饰器
2. 方法参数装饰器
3. 方法装饰器
4. 访问器装饰器
5. 静态属性装饰器
6. 静态方法装饰器
7. 构造方法参数装饰器
8. 类装饰器

### 装饰器示例

此处仅以 [core-decorators](https://github.com/jayphelps/core-decorators) 中  `readonly` 示例：

```ts
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  const keys = ['value', 'initializer', 'get', 'set'];

  for (let i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }

  return false;
}

function decorate(handleDescriptor, entryArgs) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor(...entryArgs, []);
  } else {
    return function () {
      return handleDescriptor(...Array.prototype.slice.call(arguments), entryArgs);
    };
  }
}

function handleDescriptor(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

export default function readonly(...args) {
  return decorate(handleDescriptor, args);
}
```



## Reflect

看一下被编译的代码：

```js
'use strict'
let __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  let c = arguments.length
  let r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc
  let d

  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
    r = Reflect.decorate(decorators, target, key, desc)
  } else {
    // 由此可以得出 装饰器自下而上 执行的原因
    for (let i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r
}

const d1 = () => (target, name, descriptor) => console.log('d1', target, name, descriptor)
const d2 = () => (target, name, descriptor) => console.log('d2', target, name, descriptor)
let Log = class Log {}

Log = __decorate([
  d1(),
  d2()
], Log)
```

使用了 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)，[比较 Reflect 和 Object 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/%E6%AF%94%E8%BE%83_Reflect_%E5%92%8C_Object_%E6%96%B9%E6%B3%95)，注意其中利用 [reflect-metadata](https://rbuckton.github.io/reflect-metadata/) 增强了了 `Reflect` 功能， 关于 `Reflect` 的使用可以看下 [InversifyJS](https://github.com/inversify/InversifyJS)。

### Metadata

简单来说，可以通过装饰器来给类添加一些自定义的信息，然后通过反射将这些信息添加/提取出来。

