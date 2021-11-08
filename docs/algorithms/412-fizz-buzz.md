---
autoSort: -412
---

# Fizz Buzz

## 字符串拼接

按照顺序推入 `Fizz Buzz`。

``` ts
function fizzBuzz(n: number): string[] {
  const ret: string[] = []

  for (let i = 1; i <= n; i++) {
    const strs = []
    if (i % 3 === 0) {
      strs.push('Fizz')
    }
    if (i % 5 === 0) {
      strs.push('Buzz')
    }
    if (strs.length === 0) {
      strs.push(i)
    }

    ret.push(strs.join(''))
  }

  return ret
}
```
