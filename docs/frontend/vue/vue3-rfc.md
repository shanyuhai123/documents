---
title: Vue Function-based API RFC
---

> 个人认为在学 Vue3 前先来拜读一下 RFC 可能比较好，为什么要这么做？
>
> 我 Vue2 没有好好学，Vue3 也还没有开始看，信我你就错了。
>
> [抄一遍原文](https://zhuanlan.zhihu.com/p/68477600)。

::: tip 译注

+ 2020 年 1 月又注：RFC 已经被完全重写，最新版请以 [composition-api](https://composition-api.vuejs.org/) 为准。以下内容会有部分与最新的 API 有出入，但依然可以帮助理解。
+ 这是 3.0 最重要的 RFC，因此特意翻译成中文。

:::



## 概要

将 2.x 中与组件逻辑相关的选项以 API 函数的形式重新设计。

### 1. 基本例子

```js
import { ref, computed, watch, omMounted } from "vue"

const App = {
  template: `
		<div>
			<span>count is {{ count }}</span>
			<span>plusOne is {{ plusOne }}</span>
			<button @click="increment">count++</button>
		</div>
	`,
  setup() {
    // reactive state
    const count = ref(0)
    // computed state
    const plusOne = computed(() => count.value + 1)
    // method
    const increment = () => { count.value++ }
    watch(() => count.value * 2, val => {
      console.log(`count * 2 is ${val}`)
    })
    // lifecycle
    onMounted(() => {
      console.log(`mounted`)
    })
    
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    }
  }
}
```



## 设计动机

### 1. 逻辑组合与复用

组件 API 设计所面对的核心问题之一就是如何组织逻辑，以及如何在多个组件之间抽取和复用逻辑。基于 Vue2.x 目前的 API 我们有一些常见的逻辑复用模式，但都或多或少存在一些问题。这些模式包括：

+ Mixins
+ 高阶组件（Higher-order Components,aka HOCs）
+ Renderless Components（基于 scoped slots/作用域插槽封装逻辑组件）

网上关于这些模式的介绍很多，这里就不再赘述细节。总体来说，以上这些模式存在以下问题：

+ 模板中的数据来源不清晰。举例来说，当一个组件中使用多个 mixin 的时候，光看模板会很难分清一个属性到底来自哪一个 mixin。HOC 也有类似的问题。
+ 命名空间冲突。由不同开发者开发的 mixin 无法保证不会正好用到一样的属性或是方法名。HOC 在注入 props 中也存在类似问题。
+ 性能。HOC 和 Renderless Components 都需要额外的组件实例来封装逻辑，导致无谓的性能开销。

Function-based API 受 React Hooks 的启发，提供了一个全新的逻辑复用方案，且不存在上述问题。使用基于函数的 API，我们可以将相关的代码抽取到一个 “composition function”（组合函数）中 -- 该函数封装了相关的逻辑，并将需要暴露给组件的状态以响应式的数据源的方式返回出来。这里是一个用组合函数来封装鼠标位置侦听逻辑的例子：

```js
function useMouse() {
  const x = ref(0)
  const y = ref(0)
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }
  
  onMounted(() => {
    window.addEventListener("mousemove", update)
  })
  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })
  
  return { x, y }
}

// 在组件中使用该函数
const Component = {
  setup() {
    const { x, y } = useMouse()
    // 与其他函数配合使用
    const { z } = useOtherLogic()
    
    return { x, y, z }
  },
  template: `<div>{{ x }} {{ y }} {{ z }}</div>`
}
```

从以上的例子中可以看到：

+ 暴露给模板的属性来源清晰（从函数返回）;
+ 返回值可以被任意重命名，所以不存在命名空间冲突
+ 没有创建额外的组件实例所带来的性能损耗

文末附录中有与 React Hooks 的一些细节对比。

### 2. 类型推导

3.0 的一个主要设计目的是增强对 TypeScript 的支持。原本我们期望通过 Class API 来达成这个目标，但是经过讨论和原型开发，我们认为 Class 并不是解决这个问题的正确路线，基于 Class 的 API 依然存在类型问题。

基于函数的 API 天然对类型推导很友好，因为 TS 对函数的参数、返回值和泛型的支持已经非常完备。更值得一提的是基于函数的 API 在使用 TS 或是原生 JS 时写出来的代码几乎是完全一样的。下文会提供新 API 类型推导的更多细节，此外文末附录中有关于 Class API 类型问题的更多细节。

### 3. 打包尺寸

基于函数的 API 每一个函数都可以作为 named ES export 被单独引入，这使得它们对 tree-shaking 非常友好。没有被使用的 API 的相关代码可以在最终被打包时被移除。同时，基于函数 API 所写的代码也有更好的被压缩率。因为所有的函数名和 setup 函数体内部的变量名都可以被压缩，但对象和 class 的属性/方法名却不可以。



## 设计细节

### 1. setup() 函数

我们将会引入一个新的组件选项，`setup()`。顾名思义，这个函数将会是我们 setup 我们组件逻辑的地方，它会在一个组件实例被创建时，初始化了 props 之后调用。`setup()` 会接收到初始的 props 作为参数：

```js
const MyComponent = {
  props: {
    name: String
  },
  setup(props) {
    console.log(props.name)
  }
}
```

需要留意的是这里传进来的 `props` 对象是响应式的 -- 它们可以被当作数据源去观测，当后续 props 发生变动时它也会被框架内部同步更新。但对于用户代码来说，它是不可修改的（会导致警告）。

在 `setup` 内部可以使用 `this`，但你大部分时候不会需要它。

### 2. 组件状态

类似 `data()`，`setup()` 可以返回一个对象 -- 这个对象上的属性将会被暴露给模板的渲染上下文：

```js
const MyComponent = {
  props: {
    name: String
  },
  setup(props) {
    return {
      msg: `hello ${props.name}`
    }
  },
  template: `<div>{{ msg }}</div>`
}
```

上面这个例子跟 `data()` 一模一样：`msg` 可以在模板中被直接使用，它甚至可以被模板中的内联函数修改。但如果我们想要创建一个可以在 `setup()` 内部被管理的值，可以使用 `ref` 函数：

```js
import { ref } from "vue"

const MyComponent = {
  props: {
    name: String
  },
  setup(props) {
    const msg = ref("hello")
    const appendName = () => {
      msg.value = `hello ${props.name}`
    }
    
    return {
      msg,
      appendName
    }
  },
  template: `<div @click="appendName">{{ msg }}</div>`
}
```

`ref()` 返回的是一个 **value reference（包装对象）**。一个包装对象只有一个属性：`.value`，该属性指向内部被包装的值。在上面的例子中，`msg` 包装的是一个字符串。包装对象的值可以被直接修改：

```js
// 读取
console.log(mag.value) // "hello"
// 修改
msg.value = "bye"
```

### 3. 为什么需要包装对象

我们知道在 JavaScript 中，原始值类型如 string 和 number 是只有值，没有引用的。如果在一个函数中返回一个字符串变量，接收到这个字符串的代码只会获得一个值，是无法追踪原始变量后续的变化的。

因此，包装对象的意义就在于提供一个让我们能够在函数之间以引用的方式传递任意类型值的容器。这有点像 React Hooks 中的 `useRef` -- 但不同的是 Vue 的包装对象同时还是响应式的数据源。有了这样的容器，我们就可以在封装了逻辑的组合函数中将状态以引用的方式传回给组件。组件负责展示（追踪依赖），组合函数负责管理状态（触发更新）：

```js
setup() {
  const valueA = useLogicA() // valueA 可能被 useLogicA() 内部的代码修改从而触发更新
  const valueB = useLogicB()
  
  return {
    valueA,
    valueB
  }
}
```

包装对象也可以包装非原始值类型的数据，被包装的对象中嵌套的属性都会被响应式地跟踪。用包装对象去包装对象或是数组并不是没有意义的：它让我们可以对整个对象的值进行替换 -- 比如用一个 filter 过的数组去替换原数组：

```js
const numbers = ref([1, 2 ,3])
// 替换原数组，但是引用不变
numbers.value = numbers.value.filter(n => n > 3)
```

如果你依然想创建一个没有包装的响应式对象，可以使用 `reactive` API（和 2.x 的 `Vue.observable()` 等同）：

```js
import { reactive } from "vue"

const object = reactive({
  count: 0
})

object.count++
```

### 4. Ref Unwrapping（包装对象的自动展开）

在上面的例子中你可能注意到了，虽然 `setup()` 返回的 `msg` 是一个包装对象，但在模板中我们直接使用了 `{{ msg }}` 这样的绑定，没有用 `.value`。这是因为**当包装对象被暴露给模板渲染上下文，或是被嵌套在另一个响应式对象中的时候，它会被自动展开（upwrap）为内部的值**。

比如一个包装对象的绑定可以直接被模板中的内联函数修改：

```js
const MyComponent = {
  setup() {
    return {
      count: ref(0)
    }
  },
  template: `<button @click="count++">{{ count }}</button>`
}
```

当一个包装对象被作为另一个响应式对象的属性引用的时候也会被自动展开：

```js
const count = ref(0)
const obj = reactive({
  count
})

console.log(obj.count) // 0

obj.count++
console.log(obj.count) // 1
console.log(count.value) // 1

count.value++
console.log(obj.count) // 2
console.log(count.value) // 2
```

以上这些关于包装对象的细节可能会让你觉得有些复杂，但实际使用中你只需要记住一个基本的规则：只有当你直接以变量的形式引用一个包装对象的时候才会需要用 `.value` 去取它内部的值 -- 在模板中你甚至不需要知道它的存在。

### 5. 配合手写 Render 函数使用

如果你的组件不使用模板，你也可以选择在 `setup()` 中直接返回一个渲染函数：

```js
import { ref, createElement as h } from "vue"

const MyComponent = {
  setup(initialProps) {
    const count = ref(0)
    const increment = () => { count.value++ }
    
    return (props, slots, attrs, vnode) => {
      h("button", {
        onClick: increment
      }, count.value)
    }
  }
}
```

返回的函数应当遵循 [RFC#28](https://github.com/vuejs/rfcs/pull/28) 中提出的函数签名。你可能注意到了 `setup` 和其他渲染函数的第一个参数都是 props -- 它们的行为是一样的，但是渲染函数接收到的 props 在生产模式下将会是一个普通对象，因此它的性能会更好些。

和 2.x 一样的 `render` 选项也可以使用，但如果使用了 `setup()`，就应该尽量使用内联返回的渲染函数，因为这样就可以避免先返回一堆绑定然后再在另一个函数里解构出来，同时类型推导也会更简单直接一些。

### 6. Computed Value（计算值）

除了直接包装一个可变的值，我们也可以包装通过计算产生的值：

```js
import { ref, computed } from "vue"

const count = ref(0)
const countPlusOne = computed(() => count.value + 1)

console.log(countPlusOne.value) // 1

count.value++
console.log(countPlusOne.value) // 2
```

计算值的行为跟计算属性（computed property）一样：只有当依赖变化的时候它才会被重新计算。

`computed` 返回的是一个只读的包装对象，它可以和普通的包装对象一样在 `setup` 中被返回，也一样会在渲染上下文中被自动展开。默认情况下，如果用户试图去修改一个只读包装对象，会触发警告。

双向计算值可以通过传递给 `computed` 第二个参数作为 setter 来创建：

```js
const count = value(0)
const writableComputed = computed(
	() => count.value + 1,
  val => {
    count.value = value + 1
  }
)
```

### 7. Watchers

`watch()` API 提供了基于观察状态的变化来执行副作用的能力。

`watch()` 接收的第一个参数被称作：“数据源”，它可以是：

+ 一个返回任意值的函数
+ 一个包装对象
+ 一个包含上述两种数据源的数组

第二个参数是回调函数。回调函数只有当数据源发生变化时才会触发：

```js
watch(
	// getter
  () => count.value + 1,
  (value, oldValue) => {
    console.log('count + 1 is: ', value)
  }
)
// -> count + 1 is: 1

count.value++
// -> count + 1 is: 2
```

和 2.x 的 `$watch` 有所不同的是，`watch()` 的回调会在创建时就执行一次。这有点类似 2.x watcher 的 `immediate: true` 选项，但有一个重要的不同：默认情况下 `watch()` 的回调总是会在当前的 renderer flush 之后才被调用 -- 换句话说，`watch()` 的回调在触发时，DOM 总是会在一个已经被更新过的状态下。这个行为是可以通过选项来定制的。

在 2.x 的代码中，我们经常会遇到同一份逻辑需要在 `mounted` 和一个 watcher 的回调中执行（比如根据当前 id 抓取数据），3.0 的 `watch` 默认行为可以直接表达这样的需求。

#### 7.1 观察 props

上面提到了 `setup()` 接收到的 `props` 对象是一个可观测的响应式对象：

```js
const MyComponent = {
  props: {
    id: Number
  },
  setup(props) {
    const data = ref(null)
    watch(() => props.id, async id => {
      data.value = await fetchData(id)
    })
    
    return { data }
  }
}
```

#### 7.2 观察包装对象

`watch()` 可以直接观察一个包装对象：

```js
// double 是一个计算包装对象
const double = computed(() => count.value * 2)

watch(double, value => {
  console.log("double the count is: ", value)
}) // -> double the count is: 0

count.value++ // -> double the count is: 2
```

#### 7.3 观察多个数据源

`watch()` 也可以观察一个包含多个数据源的数组 - 这种情况下，任意一个数据源的变化都会触发回调，同时回调会接收到包含对应值的数组作为参数：

```js
watch(
	[refA, () => refB.value],
  ([a, b], [prevA, prevB] => {
    console.log(`a is: ${a}`)
    console.log(`b is: ${b}`)
  })
)
```

#### 7.4 停止观察

`watch()` 返回一个停止观察的函数：

```js
const stop = watch()
// stop watching
stop()
```

如果 `watch()` 是在一个组件 `setup()` 或是生命周期函数中被调用的，那么该 watcher 会在当前组件被销毁时也一同被自动停止：

```js
export default {
  setup() {
    // 组件销毁时也会被自动停止
    watch()
  }
}
```

#### 7.5 清理副作用

有时候当观察的数据源变化后，我们可能需要对之前所执行的副作用进行清理。举例来说，一个异步操作在完成之前数据就产生了变化，我们可能要撤销还在等待的前一个操作。为了处理这种情况，watcher 的回调会接收到的第三个参数是一个用来注册清理操作的函数。调用这个函数可以注册一个清理函数。清理函数会在下属情况下被调用：

+ 在回调被下一次调用前
+ 在 watcher 被停止前

```js
watch(idValue, (id, oldId, onCleanup) => {
  const token = performAsyncOperation(id)
  onCleanup(() => {
    // id 发生了变化，或是 watcher 即将被停止
    // 取消还未完成的异步操作
    token.cancel()
  })
})
```

之所以要用传入的注册函数来注册清理函数，而不是像 React 的 `useEffect` 那样直接返回一个清理函数，是因为 watcher 回调的返回值在异步场景下有特殊作用。我们经常需要在 watcher 的回调中调用 async function 来执行异步操作：

```js
const data = ref(null)
watch(getId, async (id) => {
  data.value = await fetchData(id)
})
```

我们知道 async function 隐性地返回一个 Promise - 这样的情况下，我们是无法返回一个需要被立即注册的清理函数的。除此之外，回调返回的 Promise 还会被 Vue 用于内部的异步错误处理。

#### 7.6 Watcher 回调的调用时机

默认情况下，所有的 watcher 回调都会在当前的 renderer flush 之后被调用。这确保了在回调中 DOM 永远都已经被更新完毕。如果你想要让回调在 DOM 更新之前或是被同步触发，可以使用 `flush` 选项：

```js
watch(
	() => count.value + 1,
  () => console.log(`count changed`),
  {
    flush: "post", // default, fire after renderer flush
    flush: "pre", // fire right before renderer flush
    flush: "sync" // fire synchronously
  }
)
```

#### 7.7 全部的 watch 选项（TS 类型声明）

```tsx
interface WatchOptions {
  lazy?: boolean
  deep?: boolean
  flush?: "pre" | "post" | "sync"
  onTrack?: (e: DebuggerEvent) => void
  onTrigger?: (e: DebuggerEvent) => void
}

interface DebuggerEvent {
  effect: ReactiveEffect
  target: any
  key: string | symbol | undefined
  type: "set" | "add" | "delete" | "clear" | "get" | "has" | "iterate"
}
```

+ `lazy` 与 2.x 的 `immediate` 正好相反
+ `deep` 与 2.x 的行为一致
+ `onTrack` 和 `onTrigger` 是两个用于 debug 的钩子，分别在 watcher 追踪到依赖和依赖发生变化的时候被调用，获得的参数是一个包含了依赖细节的 debugger event

### 8. 生命周期函数

所有现有的生命周期钩子都会有对应的 `onXXX` 函数（只能在 `setup()` 中使用）：

```js
import { onMounted, onUpdated, onUnmounted } from "vue"

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log("mounted!")
    })
    onUpdated(() => {
      console.log("updated!")
    })
    // destroyed 调整为 unmounted
    onUnmounted(() => {
      console.log("unmounted!")
    })
  }
}
```

### 9. 依赖注入

```js
import { provide, inject } from "vue"

const CountSymbol = Symbol()

const Ancestor = {
  setup() {
    // providing a ref can make it reactive
    const count = ref(0)
    provide(CountSymbol, count)
  }
}

const Descendent = {
  setup() {
    const count = inject(CountSymbol)
    
    return { count }
  }
}
```

如果注入的是一个包装对象，则该注入绑定会是响应式的（也就是说，如果 Ancestor 修改了 count，会触发 Descendent 的更新）。

### 10. 类型推导

为了能够在 TypeScript 中提供正确的类型推导，我们需要通过一个函数来定义组件：

```js
import { defineComponent, ref } from "vue"

const MyComponent = defineComponent({
  // props declarations are used to infer prop types
  props: {
    msg: String
  },
  setup(props) {
    props.msg // string | undefined
    
    // bindings returned from setup() can be used for type inference
    // in templates
    const count = ref(0)
    
    return { count }
  }
})
```

`defineComponent` 从概念上来说 2.x 的 `Vue.extend` 是一样，但在 3.0 中它其实是单纯为了类型推导而存在的，内部的实现是个 noop（直接返回参数本身）。它的返回类型可以用于 TSX 和 Vetur 的模板自动补全。如果你使用单文件组件，则 Vetur 可以自动隐式地帮你添加这个调用。

如果你使用手写 render 函数或是 TSX，那么你可以在 `setup()` 当中直接返回一个渲染函数（注意这里不需要任何手动的类型声明）：

```js
import { defineComponent, ref, h } from "vue"

const MyComponent = defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    const count = ref(0)
    return () => h("div", [
      h("p", `msg is ${props.msg}`),
      h("p", `count is ${count.value}`)
    ])
  }
})
```

#### 10.1 纯 TypeScript 的 Props 类型声明

3.0 的 `props` 选项不是必须的，如果你不需要运行时的 props 类型检查，你也可以选择完全在 TypeScript 的类型层面声明 props 的类型：

```tsx
import { defineComponent, h } from "vue"

interface Props {
  msg: string
}

const MyComponent = defineComponent({
  setup(props: Props) {
    return () => h("div", props.msg)
  }
 })
```

如果不需要除了 `setup` 之外的选项，甚至可以直接传一个函数给 `defineComponent`：

```tsx
const MyComponent = createComponent((props: { msg: string }) => {
  return () => h("div", props.msg)
})
```

这里返回的 `MyComponent` 也可以在 TSX 中提供正确的 props 补全和推导。

#### 10.2 Required Props

Props 默认都是可选的，也就是说它们的类型都可能是 `undefined`。非可选的 props 需要声明 `required: true`：

```js
import { defineComponent } from "vue"

defineComponent({
  props: {
    foo: {
      type: String,
      required: true
    },
    bar: {
      type: String
    }
  },
  setup(props) {
    props.foo // string
    props.bar // string | undefined
  }
})
```

#### 10.3 复杂 Props 类型

Vue 提供的 `propType` 类型可以用来声明任意复杂度的 props 类型，但需要用 `as any` 进行一次强制类型转换：

```tsx
import { defineComponent, PropType } from "vue"

defineComponent({
  props: {
    options: (null as any) as PropType<{ msg: string }>
  },
  setup(props) {
    props.options // { msg: string } | undefined
  }
})
```

#### 10.4 依赖注入类型

依赖注入的 `inject` 方法是唯一必须手动声明类型的 API：

```tsx
import { defineComponent, inject, Ref } from "vue"

defineComponent({
  setup() {
    const count = Ref<number> = inject(CountSymbol)
    
    return { count }
  }
})
```

这里的 `Ref` 类型即是包装对象的类型，通过泛型参数来声明其内部包装的值的类型。



## 缺点/潜在问题

> 新的 API 使得动态地检视/修改一个组件的选项变得困难（原来是一个对象，现在是一段无法被检视的函数体）。

这可能是一件好事，因为通常在用户代码中动态地检视/修改组件是一类比较危险的操作，对于运行时也增加了许多潜在的边缘情况（特别是组件继承和使用 mixin 的情况下）。新 API 的灵活性应该在绝大部分情况下都可以用更显式的代码达成同样的结果。

> 缺乏经验的用户可能会写出 “面条代码”，因为新 API 不像旧 API 那样强制将组件代码基于选项分开来。

我们在 Class API RFC 和内部讨论中听到过好几次这样的声音，但我认为这是一种没有必要的担忧。虽然理论上新的 API 确实制约更少，但我认为 “面条代码” 的情况不太可能发生，这里详细解释一下。

基于函数的新 API 和基于选项的旧 API 之间的最大的区别，就是新 API 让抽取逻辑变得非常简单 -- 就跟在普通的代码中抽取函数一样。也就是说，我们不必只在需要复用逻辑的时候才收取函数，也可以单纯为了更好地组织代码去抽取函数。

基于选项的代码只是看上去更整洁。一个复杂的组件往往需要同时处理多个不同的逻辑任务，每个逻辑任务所涉及的代码在选项 API 是被分散在多个选项之中的。举例来说，从服务端抓取一份数据，可能需要用到 `props`、`data()`、`mounted` 和 `watch`。极端情况下，如果我们把一个应用中的所有的逻辑任务都放在一个组件里，这个组建必然会变得庞大而难以维护，因为每个逻辑任务的代码都被选项切成了多个碎片分散在各处。

对比之下，基于函数的 API 让我们可以把每个逻辑任务的代码都整理到一个对应的函数中。当我们发现一个组件变得过大时，我们会将它切分成多个更小的组件；同样地，如果一个组件的 `setup()` 函数变得很复杂，我们可以将它切分成多个更小的函数。而如果是基于选项，则无法做到这样的切分，因为用 mixin 只会让事情变得更糟糕。

从这个角度看，基于选项 vs. 基于函数就好像基于 HTML/CSS/JS 组织代码 vs. 基于单文件来组织代码。



## 升级策略

新的 API 和 2.x 的 API 完全兼容（只是多了一个 `setup()` 选项），并且可以一起使用。新 API 适合在组件复杂度明显的情况下用来更好的组织和复用逻辑，或是用来提供可高度复用的插件。

理论上，新 API 可以完全提供 2.x API 的全部能力，因此我们可能会提供一个可选的编译时选项，启用后可以去掉所有仅为 2.x API 支持而存在的代码，减少一部分体积和性能开销。



## 附录

### 1. 与 React Hooks 的对比

这里提出的 API 和 React Hooks 有一定的相似性，具有同等的基于函数抽取和复用逻辑的能力，但也有很本质的区别。React Hooks 在每次组件渲染时都会调用，通过隐式地将状态挂载在当前的内部组件节点上，在下一次渲染时根据调用顺序取出。而 Vue 的 `setup()` 每个组件实例只会在初始化时调用一次，状态通过引用存储在 `setup()` 的闭包内。这意味着基于 Vue 的函数 API 的代码：

+ 整体上更符合 JavaScript 的直觉；
+ 不受调用顺序的限制，可以有条件的被调用；
+ 不会在后续更新时不断产生大量的内联函数而影响引擎优化或是导致 GC 压力；
+ 不需要总是使用 `useCallback` 来缓存传给子组件的回调以防止过度更新；
+ 不需要担心传了错误的依赖数组给 `useEffect/useMemo/useCallback` 从而导致回调中使用了过期的值 -- Vue 的依赖追踪是全自动的。

> 注：React Hooks 的开创性毋庸置疑，也是本提案的灵感来源。Hooks 代码和 JSX 并置使得对值的使用更简洁也是其优点，但其设计确实存在上述问题，而 Vue 的响应式系统恰巧能够让我们绕过这些问题。

### 2. Class API 的类型问题

Class API 提案的主要目的是寻找一个能够提供更好的提供 TypeScript 支持的组件声明方式。但是由于 Vue 需要将来自多个选项的属性混合到同一个渲染上下文，这使得即使使用了 Class，要得到良好的类型推导也不是很容易。

以 props 的类型推导为例。要将 props 的类型 merge 到 class 的 `this` 上，我们有两个选择：用 class 的泛型参数，或是用 decorator。

这是用泛型参数的例子：

```tsx
interface Props {
  message: string
}

class App extends Component<Props> {
  static props = {
    messgae: String
  }
}
```



由于泛型参数是纯类型层面的，所以我们还需要额外地进行一次运行时的 props 选项声明来获得正确的行为。这就导致需要进行双重声明。

使用 decorator 的例子如下：

```tsx
class App extends Component<Props> {
	@prop message: string
}
```

Decorators 存在如下问题：

+ ES 的 decorator 提案仍然在 stage-2 且极其不稳定。过去一年内已经经历了两次彻底大改，且和 TS 现有的实现已经完全脱节。现在引入一个基于 TS decorator 实现的 API 风险太大。
+ Decorator 只能声明 class `this` 上的属性，却无法将某一类 decorator 声明的属性归并到一个对象上（比如 `$props`），这就导致 `this.$props` 无法被推导，且影响 TSX 的使用。
+ 用户可能会觉得可以用 `@prop message: string = 'foo'` 这样的写法去声明默认值，但事实上技术层面无法做到符合语义的实现。

最后，class 还有一个问题，那就是目前 class method 不支持参数的 contextual typing，也就是说我们无法基于 class 本身的 fields 来推导某个 method 的参数类型，需要用户去声明。