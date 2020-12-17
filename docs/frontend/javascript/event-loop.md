---
title: 事件队列
---

## 分类

### 1. 宏任务（macro task）

+ script
+ I/O
+ xhr
+ setTimeout
+ setInterval
+ setImmediate(Node)
+ requestAnimationFrame(Browser)

### 2. 微任务（micro task）

+ Promise
+ MutationObserve(Browser)
+ process.nextTick(Node)

### 3. 其他

+ UI rendering(Browser)，其会在 `microtask queue` 之后，`macrotask queue` 之前 



## Browser Event Loop

基本操作为，先执行**一个** `macro task`，过程中遇到 `micro task` 时，将其放到 `micro task` 的事件队列中，当前 `macro task` 执行完成后，查看 `micro task` 的事件队列，依次执行 `micro task`。如果还有 `macro task`，再执行**下一个** `macro task`。

1. 同步代码
2. 执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
3. 执行 `microtask`，如果在执行 `microtask` 的过程中又产生了 `microtask`，那么那么会加入到队列的队尾，也会在这个周期被调用执行
4. 执行完所有微任务后，如有必要会渲染页面
   1. 判断 `document` 是否需要更新，浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次
   2. 判断是否有 `resize` 或 `scroll` 事件，有的话会去触发事件，所以它们也至少 16.6ms 才会触发一次，自带节流
   3. 判断是否触发了 media query
   4. 更新动画并且发送事件
   5. 判断是否有全屏操作事件
   6. 执行 `requestAnimationFrame` 回调
   7. 执行 `intersectionObserve` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
   8. 更新界面
5. 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 `setTimeout` 中的回调函数

## Node Event Loop

简化概览：

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

阶段概述：

+ timers：本阶段执行已经被 `setTimeout` 和 `setInterval` 调度的回调函数
+ I/O callbacks：执行延迟到下一个循环迭代的 I/O 回调
+ idle、prepare：仅系统内部使用
+ poll：检索新的 I/O 事件；执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 `setImmediate` 调度之外的），其余情况 node 将在适当的时候在此阻塞
+ check：`setImmdiate` 回调函数在此执行
+ close callbacks：一次关闭的回调函数，如 `socket.on('close', () => {})`



### 1. setTimeout 和 setImmdiate

执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时器将受进程性能的约束（这可能会受到计算机上其他正在运行应用程序的影响）。

```js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

// timeout immediate
// or (上下两种均可能)
// immediate timeout
```

但，如果这两个函数放入一个 I/O 循环内调用，那么 `setImmdiate` 总是优先被调用：

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// immediate
// timeout
```





## 案例分析

### demo-1

```js
console.log('a');

setTimeout(function() {
    console.log('b');
    process.nextTick(function() {
        console.log('c');
    })
    new Promise(function(resolve) {
        console.log('d');
        resolve();
    }).then(function() {
        console.log('e')
    })
})
process.nextTick(function() {
    console.log('f');
})
new Promise(function(resolve) {
    console.log('g');
    resolve();
}).then(function() {
    console.log('h')
})

setTimeout(function() {
    console.log('i');
    process.nextTick(function() {
        console.log('j');
    })
    new Promise(function(resolve) {
        console.log('k');
        resolve();
    }).then(function() {
        console.log('l')
    })
})
```

逐步分析：

1. 第一轮事件循环
   1. 第一个 `macro task(script)` 进入主线程，`console.log('a')`，输出 `a`
   2. 遇到 `setTimeout`，将其回调加入 `macro task`
   3. 遇到 `process.nextTick`，将其回调加入 `micro task`
   4. 遇到 `new Promise`，执行输出 `g`，并将 `then` 加入 `micro task`
   5. 遇到 `setTimeout`，将其回调加入 `macro task`
   6. `macro task` 执行完毕，检查 `micro task` 并依次执行
   7. 执行 `process.nextTick` 回调，输出 `f`
   8. 执行 `promise then`，输出 `h`
   9. 检查 `macro task`，存在队列，进入第二轮
2. 第二轮事件循环
   1. 执行 `console.log('b')`，输出 `b`
   2. 遇到 `process.nextTick`，将其回调加入 `micro task`
   3. 遇到 `new Promise`，执行输出 `d`，并将 `then` 加入 `micro task`
   4. 当前 `macro task` 执行完毕，开始 `micro task`
   5. 执行 `process.nextTick`，输出 `c`
   6. 执行 `promise then`，输出 `e`
   7. 检查 `macro task`，存在队列，进入第三轮
3. 第三轮事件循环
   1. 执行 `console.log('i')`，输出 `i`
   2. 遇到 `process.nextTick`，将其回调加入 `micro task`
   3. 遇到 `new Promise`，执行输出 `k`，并将 `then` 加入 `micro task`
   4. 当前 `macro task` 执行完毕，开始 `micro task`
   5. 执行 `process.nextTick`，输出 `j`
   6. 执行 `promise then`，输出 `l`
   7. 检查 `macro task`，结束

### demo-2

```js
const $inner = document.querySelector('#inner')
const $outer = document.querySelector('#outer')

function handler () {
  console.log('click') // 直接输出

  Promise.resolve().then(_ => console.log('promise')) // 注册微任务

  setTimeout(_ => console.log('timeout')) // 注册宏任务

  requestAnimationFrame(_ => console.log('animationFrame')) // 注册宏任务

  $outer.setAttribute('data-random', Math.random()) // DOM属性修改，触发微任务
}

new MutationObserver(_ => {
  console.log('observer')
}).observe($outer, {
  attributes: true
})

$inner.addEventListener('click', handler)
$outer.addEventListener('click', handler)
```

点击`#inner`，其执行顺序是：`click` -> `promise` -> `observer` -> `click` -> `promise` -> `observer` -> `animationFrame` -> `animationFrame` -> `timeout` -> `timeout`。



## 参考

+ [如何解释Event Loop面试官才满意？](https://zhuanlan.zhihu.com/p/72507900)
+ [Node.js 事件循环，定时器和 process.nextTick()](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)
+ [微任务、宏任务与Event-Loop](https://juejin.cn/post/6844903657264136200)