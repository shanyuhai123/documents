# currying

> 复杂的看 [lodash](https://github.com/lodash/lodash/blob/es/curry.js)

## 一道题目

```js
sum(1)(2,3).sumOf() // 6
```

## 发散

### 1. 最简化

```js
// sum(1)(2) => 3
const sum = (x) => (y) => x + y
```

### 2. 追加更多

```js
// sum(1)(2)(3)(4) => 10
// 但总要有一个区分终结的标志
// sum(1)(2)(3)(4)() => 10

const sum = (x) => {
  let result = x

  return function add (y) {
    if (y) {
      result += y
      return add
    } else {
      return result
    }
  }
}
```

### 3. 更好的终结形式

```js
// sum(1)(2).sumOf() => 3
// sum(1)(2)(3)(4).sumOf() => 3

const sum = (x) => {
  let result = x

  function add (y) {
    result += y
    return add
  }

  add.sumOf = () => result

  return add
}
```

### 4. 更多的参数

```js
// sum(1)(2,3).sumOf() => 6
// sum(1,2)(3)(4,5,6).sumOf() => 21

const sum = (...args) => {
  let result = [...args]

  function add (...orgs) {
    result.push(...orgs)
    return add
  }

  // 取个巧，最后计算
  add.sumOf = () => result.reduce((acc, cur) => acc + cur)

  return add
}
```
