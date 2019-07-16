---
title: Promise 对象
---

## 1. Promise 的含义

Promise 是异步变成的一种解决方案, 比起传统的解决方案(回调函数和事件), 更为合理和强大

它由社区最早提出和实现, ES6 将其写进了语言标准, 统一了用法, 原生提供了 Promise 对象

所谓 Promise, 简单来说就是一个容器, 里面保存着某个未来才会结束的事件(通常是一个异步操作) 的结果

从语法上来说, Promise 是一个对象, 从它可以获取异步操作的消息

Promise 提供统一的 API, 各种异步操作都可以用同样的方法进行处理

`Promise` 对象具有一下两个特点

1. 对象的状态不受外界影响

   Promise 对象代表一个异步操作, 有三种状态: `pending` 进行中, `fulfilled` 已成功, `rejected` 已失败

   只有异步操作的结果, 可以决定当前是哪一种状态, 任何其他操作都无法改变这个状态

   这也是 Promise 这个名字的由来, 它的英语意思就是 "承诺", 表示其他手段无法改变

2. 一旦状态改变, 就不会再变, 任何时候都可以得到这个结果

   Promise 对象的状态改变, 只有两种可能: 从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`

   只要这两种情况发生, 状态就凝固了, 不会再发生变化, 会一直保持这个结果, 这时就称为 `resolved` (已定型)

   如果改变已经发生, 你再对 Promise 对象添加回调函数, 也会立即得到这个结果

   这与事件(Event) 完全不同, 事件的特点是, 如果你错过了它, 再去监听, 是得不到结果的

注意, 为了行文方便, 文章后面的 `resolved` 统一只指 `fulfilled` 状态, 不包含 `rejected` 状态
有了 Promise 对象, 就可以将异步操作以同步操作的流程表达出来, 避免了层层嵌套的回调函数. 此外, Promise 对象提供统一的接口, 使得控制异步操作更佳容易

Promise 也有一些缺点, 首先, 无法取消 Promise, 一旦新建它们就会立即执行, 无法中途取消. 其次, 如果不设置回调函数, Promise 内部抛出的错误不会反应到外部. 其三, 当处于 `pending` 状态时, 无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

如果某些事件不断发生, 一般来说, 使用 `Stream` 模式比部署 `Promise` 是更好的选择

## 2. 基本用法

ES6 规定, Promise 对象是一个构造函数, 用来生成 `Promise` 实例

下面代码创建了一个 Promise 实例

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

Promise 构造函数接受一个函数作为参数, 该函数的两个参数分别为 `resolve` 和 `reject` , 它们是两个函数, 由 JavaScript 引擎提供, 不用自己部署

`resolve` 函数的作用, 将 Promise 对象的状态从 `pending` 变为 `resolved` , 在异步操作成功的同时调用, 并将异步操作的结果, 作为参数传递出去; `reject` 函数的作用是, 将 Promise 对象的状态从 `pending` 变为 `rejected` , 在异步操作失败时调用, 并将异步操作爆出的错误, 作为参数传递出去

Promise 实例生成以后, 可以调用 `then` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数

```javascript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

`then` 方法可以接受两个回调函数作为参数

第一个回调函数是 Promise 对象的状态变为 `resolved` 时调用, 第二个回调函数是 Promise 对象的状态变为 `rejected` 时调用

其中第二个参数是可选的, 不一定要提供

下面是一个 Promise 对象的简单例子

```javascript
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```

Promise 新建后就会立即执行

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```

关于要彻底了解上面的执行步骤, 需要了解一下事件执行的顺序

下面是异步加载图片的例子

```javascript
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
```

再来个用 Promise 对象实现 Ajax 操作的例子

```javascript
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

`resolve` 函数的参数除了正常的值以外, 还可能是另外一个 Promise 实例

```javascript
const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```

`p2` 的 `resolve` 方法将 `p1` 作为参数, 即一个异步操作的结果是返回另一个异步操作

注意, 这时 `p1` 的状态就会传递给 `p2`, 也就是说 `p1` 的状态决定了 `p2` 的状态

如果 `p1` 的状态是 `pending` , 那么 `p2` 的回调函数就会等待 `p1` 的状态改变; 如果 `p1` 的状态已经是 `resolved` 或者 `rejected` , 那么 `p2` 的回调函数将会立即执行

调用 `resolve` 或 `reject` 并不会终结 Promise 的参数函数的执行

```javascript
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

一般来说, 调用 `resolve` 或 `reject` 之后, Promise 的使命就完成了, 后续操作应该放到 `then` 方法里面, 而不应该写在 `resolve` 或 `reject` 后面. 所以, 最好在它们的前面加上 return 语句, 这样就不会有意外

```javascript
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```

## 3. Promise.prototype.then()

Promise 实例具有`then`方法, 也就是说, `then`方法是定义在原型对象`Promise.prototype`上的

它的作用是为 Promise 实例添加状态改变时的回调函数

`then`方法返回的是一个新的`Promise`实例, 因此可以采用链式写法, 即 `then` 方法后面再调用另一个 `then` 方法

```javascript
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```

上面的代码使用 `then` 方法, 依次指定了两个回调函数. 第一个回调函数完成以后, 会将返回结果作为参数, 传入第二个回调函数

采用链式的`then`, 可以指定一组按照次序调用的回调函数

这时, 前一个回调函数, 有可能返回的还是一个 Promise 对象(即有异步操作), 这时后一个回调函数, 就会等待该 Promise 对象的状态发生变化, 才会被调用

```javascript
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});
```

如果采用箭头函数, 上面的代码可以写得更简洁

```javascript
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);
```

## 4. Promise.prototype.catch()

`Promise.prototype.catch` 方法是 `.then(null, rejection)` 或 `.then(undefined, rejection)` 的别名, 用于指定发生错误时的回调函数

```javascript
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

上面代码中, `getJSON` 方法返回一个 Promise 对象, 如果该对象状态变为 `resolved` ,则会调用 `then` 方法指定的回调函数; 如果异步操作抛出错误, 状态就会变为 `rejected` , 就会调用 `catch` 方法指定的回调函数, 处理这个错误

另外, 如果 `then` 方法指定的回调函数, 如果运行中抛出错误, 也会被 `catch` 方法捕获

```javascript
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

举个例子

```javascript
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test
```

上面的写法与下面两种是等价的

```javascript
// 写法一
const promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```

比较上面两种写法, 可以发现 `reject` 方法的作用, 等同于抛出错误

如果 Promise 状态已经变为 `resolved` , 再抛出错误是无效的

```javascript
const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok
```

Promise 对象的错误具有 "冒泡" 性质, 会一直向后传递, 直到被捕获为止, 也就是说, 错误总是会被下一个 `catch` 语句捕获

```javascript
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

一般来说, 不要在 `then` 方法里面定义 `rejected` 状态的回调函数(即 `then` 的第二个参数), 总是使用 `catch` 方法

```javascript
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

上面的代码中, 第二种写法要好于第一种写法

第二种写法不仅可以捕获前面 `then` 方法执行中的错误, 也更接近同步的写法

与传统的 `try/catch` 代码块不同的是, 如果没有使用 `catch` 方法指定错误处理的回调函数, Promise 对象抛出的错误不会传递到外层代码, 即不会有任何反应

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错, 因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```

通俗来说, Promise 会吃掉错误

这个脚本放在服务器执行, 退出码就是 `0`

不过, Node 有一个 `unhandleRejection` 事件, 专门监听未捕获的 `reject` 错误

```javascript
process.on('unhandledRejection', function (err, p) {
  throw err;
});
```

一般总是建议, Promise 对象后面要跟 `catch` 方法, 这样可以处理 Promise 内部发生的错误

`catch` 方法返回的还是一个 Promise 对象, 因此后面还可以接着调用 `then` 方法

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错, 因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
// carry on
```

上面代码运行完 `catch` 方法指定的回调函数, 会接着运行后面那个 `then` 方法指定的回调函数

如果没有报错, 则会跳过 `catch` 方法

```javascript
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// carry on
```

上面的代码因为没有报错, 跳过了 `catch` 方法, 直接执行后面的 `then` 方法

此时, 要是 `then` 方法里面报错, 就与前面的 `catch` 无关了

`catch` 方法之中, 还能再抛出错误

```javascript
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错, 因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错, 因为 y 没有声明
  y + 2;
}).then(function() {
  console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
```

修改一下

```javascript
someAsyncThing().then(function() {
  return someOtherAsyncThing();
}).catch(function(error) {
  console.log('oh no', error);
  // 下面一行会报错, 因为y没有声明
  y + 2;
}).catch(function(error) {
  console.log('carry on', error);
});
// oh no [ReferenceError: x is not defined]
// carry on [ReferenceError: y is not defined]
```

## 5. Promise.prototype.finally()

`finally`方法用于指定不管 Promise 对象最后状态如何, 都会执行的操作, 该方法是 ES2018 引入标准的

```javascript
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

上面代码中, 不管`promise`最后的状态, 在执行完`then`或`catch`指定的回调函数以后, 都会执行`finally`方法指定的回调函数

举个例子, 服务器使用 Promise 处理请求, 然后使用 `finally` 方法关掉服务器

```javascript
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
```

`finally` 方法的回调函数不接受任何参数, 这意味没有办法知道, 前面的 Promise 状态到底是 `fulfilled` 还是 `rejected`

这表明, `finally` 方法里面的操作, 应该是与状态无关的, 不依赖于 Promise 的执行结果

`finally`本质上是`then`方法的特例

```javascript
promise
.finally(() => {
  // 语句
});

// 等同于
promise
.then(
  result => {
    // 语句
    return result;
  },
  error => {
    // 语句
    throw error;
  }
);
```

它的实现也很简单

```javascript
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

从上面的实现还可以看到, `finally`方法总是会返回原来的值

```javascript
// resolve 的值是 undefined
Promise.resolve(2).then(() => {}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// reject 的值是 undefined
Promise.reject(3).then(() => {}, () => {})

// reject 的值是 3
Promise.reject(3).finally(() => {})
```

## 6. Promise.all()

`Promise.all` 方法用于将多个 Promise 实例, 包装成一个新的 Promise 实例

```javascript
const p = Promise.all([p1, p2, p3]);
```

上面代码中, `Promise.all` 方法接受一个数组作为参数, `p1`、`p2`、`p3`都是 Promise 实例, 如果不是, 就会先调用下面讲到的 `Promise.resolve` 方法, 将参数转为 Promise 实例, 再进一步处理

参数也可以不是数组, 但是必须具有 Iterator 接口, 且返回的每个成员都是 Promise 实例

`p`的状态由`p1`、`p2`、`p3`决定, 分成两种情况

1. 只有状态都变成 `fulfilled` , `p` 的状态才会变为 `fulfilled` , 此时 `p1` , `p2`, `p3` 的返回值组成一个数组, 传递给 `p` 的回调函数

2. 只有其中一个被 `rejected` , `p` 的状态就会变为 `rejected` , 此时第一个被 `rejected` 的实例的返回值, 就会传递给 `p` 的回调函数

下面举个例子

```javascript
// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
```

上面代码中, `promises`是包含 6 个 Promise 实例的数组, 只有这 6 个实例的状态都变成`fulfilled`, 或者其中有一个变为`rejected`, 才会调用`Promise.all`方法后面的回调函数

再来一个例子

```javascript
const databasePromise = connectDatabase();

const booksPromise = databasePromise
  .then(findAllBooks);

const userPromise = databasePromise
  .then(getCurrentUser);

Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommendations(books, user));
```

上面代码中, `booksPromise`和`userPromise`是两个异步操作, 只有等到它们的结果都返回了, 才会触发`pickTopRecommendations`这个回调函数

比如自己写 `demo`, 获取书获取用户, 当两个数据均获得了才会返回数据

注意, 如果作为参数的 Promise 实例, 自己定义了`catch`方法, 那么它一旦被`rejected`, 并不会触发`Promise.all()`的`catch`方法

```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
```

该实例执行完`catch`方法后, 也会变成`resolved`, 导致`Promise.all()`方法参数里面的两个实例都会`resolved`, 因此会调用`then`方法指定的回调函数, 而不会调用`catch`方法指定的回调函数

如果`p2`没有自己的`catch`方法, 就会调用`Promise.all()`的`catch`方法

```javascript
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// Error: 报错了
```

## 7. Promise.race()

`Promise.race`方法同样是将多个 Promise 实例, 包装成一个新的 Promise 实例

```javascript
const p = Promise.race([p1, p2, p3]);
```

上面代码中, 只要`p1`、`p2`、`p3`之中有一个实例率先改变状态, `p`的状态就跟着改变

那个率先改变的 Promise 实例的返回值, 就传递给`p`的回调函数

`Promise.race`方法的参数与`Promise.all`方法一样, 如果不是 Promise 实例, 就会先调用下面讲到的`Promise.resolve`方法, 将参数转为 Promise 实例, 再进一步处理

举个例子, 如果指定时间内没有获得结果, 就像 Promise 的状态变为 `reject` , 否则变为 `resolve`

```javascript
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
```

上面代码中, 如果 5 秒之内`fetch`方法无法返回结果, 变量`p`的状态就会变为`rejected`, 从而触发`catch`方法指定的回调函数

## 8. Promise.resolve()

有时需要将现有对象转为 Promise 对象, `Promise.resolve`方法就起到这个作用

```javascript
const jsPromise = Promise.resolve($.ajax('/whatever.json'));
```

`Promise.resolve` 等价于下面的写法

```javascript
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

`Promise.resolve` 方法的参数分为四种情况

1. 参数是一个 Promise 实例

   如果参数是 Promise 实例, 那么将不做任何修改, 原封不动地返回这个实例

2. 参数是一个 `thenable` 对象

   `thenable`对象指的是具有`then`方法的对象, 比如下面这个对象

   ```javascript
   let thenable = {
     then: function(resolve, reject) {
       resolve(42);
     }
   };
   ```

   `Promise.resolve` 方法会将这个对象转为 Promise 对象, 然后就立即执行 `thenable` 对象的 `then` 方法

   ```javascript
   let thenable = {
     then: function(resolve, reject) {
       resolve(42);
     }
   };
   
   let p1 = Promise.resolve(thenable);
   p1.then(function(value) {
     console.log(value);  // 42
   });
   ```

3. 参数不是具有 `then` 方法的对象, 或根本不是对象

   如果参数是一个原始值, 或者是一个不具有`then`方法的对象, 则`Promise.resolve`方法返回一个新的 Promise 对象, 状态为`resolved`

   ```javascript
   const p = Promise.resolve('Hello');
   
   p.then(function (s){
     console.log(s)
   });
   // Hello
   ```

4. 不带有任何参数

   `Promise.resolve`方法允许调用时不带参数, 直接返回一个`resolved`状态的 Promise 对象

   ```javascript
   const p = Promise.resolve();
   
   p.then(function () {
     // ...
   });
   ```

   需要注意的是, 立即 `resolve` 的 Promise 对象, 是在本轮 "事件循环" 的结束时, 而不是在下一轮 "时间循环" 的开始时

   ```javascript
   setTimeout(function () {
     console.log('three');
   }, 0);
   
   Promise.resolve().then(function () {
     console.log('two');
   });
   
   console.log('one');
   
   // one
   // two
   // three
   ```

## 9. Promise.reject()

`Promise.reject(reason)` 方法也会返回一个新的 Promise 实例, 该实例的状态为 `rejected`

```javascript
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```

注意, `Promise.reject()`方法的参数, 会原封不动地作为`reject`的理由, 变成后续方法的参数。这一点与`Promise.resolve`方法不一致

```javascript
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};

Promise.reject(thenable)
.catch(e => {
  console.log(e === thenable)
})
// true
```

## 10. 应用

### 加载图片

可以将图片的加载写成一个 Promise, 一旦加载完成, Promise 的状态就发生变化

```javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

### Generator 函数和 Promise 的结合

使用 Generator 函数管理流程, 遇到异步操作的时候, 通常返回一个`Promise`对象

```javascript
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);
```

函数`run`用来处理这个`Promise`对象, 并调用下一个`next`方法

## 11. Promise.try()

实际开发中, 经常遇到一种情况：不知道或者不想区分, 函数`f`是同步函数还是异步操作, 但是想用 Promise 来处理它

因为这样就可以不管`f`是否包含异步操作, 都用`then`方法指定下一步流程, 用`catch`方法处理`f`抛出的错误

```javascript
Promise.resolve().then(f)
```

上面的写法有一个缺点, 就是如果`f`是同步函数, 那么它会在本轮事件循环的末尾执行

```javascript
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now
```

上面代码中, 函数`f`是同步的, 但是用 Promise 包装了以后, 就变成异步执行了

那么有没有一种方法, 让同步函数同步执行, 异步函数异步执行, 并且让它们具有统一的 API 呢

第一种方法是使用 `async` 函数来写

```javascript
const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next
```

如果 `f` 是异步的, 就可以使用 `then` 执行下一步

```javascript
(async () => f())()
.then(...)
```

需要注意的是, `async () => f()`会吃掉`f()`抛出的错误

所以, 如果想捕获错误, 要使用`promise.catch`方法

```javascript
(async () => f())()
.then(...)
.catch(...)
```

第二种方法是使用 `new Promise()`

```javascript
const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next
```

鉴于这是一个很常见的需求, 所以有一个提案, 提供 `Promise.try` 替代上面的写法

```javascript
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next
```

由于`Promise.try`为所有操作提供了统一的处理机制, 所以如果想用`then`方法管理流程, 最好都用`Promise.try`包装一下

```javascript
function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}
```

上面代码中, `database.users.get()`返回一个 Promise 对象, 如果抛出异步错误, 可以用`catch`方法捕获, 就像下面这样写

```javascript
database.users.get({id: userId})
.then(...)
.catch(...)
```

但是`database.users.get()`可能还会抛出同步错误（比如数据库连接错误, 具体要看实现方法）, 这时你就不得不用`try...catch`去捕获

```javascript
try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}
```

上面这样的写法就很笨拙了, 这时就可以统一用`promise.catch()`捕获所有同步和异步的错误

```javascript
Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)
```