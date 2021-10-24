---
autoSort: -14
---

# 最长公共前缀

## 前缀递增

最直观的想法

```ts
const minStr = (strs: string[]): string => strs.reduce((c ,r) => r.length > c.length ? r : c)

function longestCommonPrefix(strs: string[]): string {  
  const str = minStr(strs)
  let prefix = ''

  for (let i = 1; i <= str.length; i++) {
    const cur = str.slice(0, i)
    if (strs.every(str => str.startsWith(cur))) {
      prefix = cur
    }
  }

  return prefix
}
```

## 依次比较

取第一项为默认前缀，前缀依次与其他字符串进行比较。

```ts
const reducePrefix = (prefix: string, str: string): string => {
  let min = prefix.length > str.length ? str : prefix

  for (let i = 0; i < min.length; i++) {
    if (prefix[i] !== str[i]) {
      return min.slice(0, i)
    }
  }

  return min
}

function longestCommonPrefix(strs: string[]): string {  
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    prefix = reducePrefix(prefix, strs[i])
  }

  return prefix
}
```

## 减少比较

实际上仅需要比较字符串最短的那一批就好了，但最短的只有一个时还需要与次短数据比较。

但实际上性能没有什么优化。

```ts
const collect = (strs: string[]) => strs.reduce((acc, cur) => {
  if (cur.length === acc.len) {
    acc.least.push(cur)
  }

  if (cur.length < acc.len) {
    acc.len = cur.length
    acc.less = acc.least
    acc.least = [cur]
  }

  return acc
}, {
  len: Infinity,
  least: [] as string[],
  less: [] as string[]
})

const compare = (str1: string, str2: string): string => {
  let min = str1.length > str2.length ? str2 : str1

  for (let i = 0; i < min.length; i++) {
    if (str1[i] !== str2[i]) {
      return min.slice(0, i)
    }
  }

  return min
}

function longestCommonPrefix(strs: string[]): string {  
  if (!strs || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  const { least, less } = collect(strs)
  if (least.length === 1) {
    least.push(...less)
  }

  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    prefix = compare(prefix, strs[i])
  }

  return prefix
}
```

## 分治

```ts
const compare = (str1: string, str2: string): string => {
  let i = 0
  for (; i < str1.length && i < str2.length; i++) {
    if(str1.charAt(i) !== str2.charAt(i)) {
      break
    }
  }

  return str1.slice(0, i)
}

const lcpRec = (strs: string[]): string => {
  const len = strs.length
  if (len === 1) {
    return strs[0]
  }

  let mid = Math.floor(len / 2),
      left = strs.slice(0, mid),
      right = strs.slice(mid, len)

  return compare(lcpRec(left), lcpRec(right))
}

function longestCommonPrefix(strs: string[]): string {  
  if (strs === null || strs.length === 0) return ''
  
  return lcpRec(strs)
}
```
