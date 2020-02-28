---
title: 处理 JSX 中函数调用
---

## 问题

```jsx
<button onClick={this.setKey(key)} />
```

虽然期望的是传递函数引用，然而实际上是函数调用，为了解决这个问题通常存在一些解决方案。



## 解决

### 1. 传递一个函数引用

```jsx
<button onClick={() => this.setKey(key)} />
```

### 2. 函数修改为闭包

```jsx
vm = {
  setKey(key) {
    return () => console.log(key);
  }
}

<button onClick={this.setKey(key)} />
```

### 3. 使用 bind 方法

```jsx
<button onClick={this.setKey.bind(this, key)} />
```

