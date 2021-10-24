---
autoSort: -13
---

# 罗马数字转整数

## 比较

若罗马数字右侧比当前数字大，则将当前数字视为负值。

```ts
enum RomanNum {
  'I'= 1,
  'V'= 5,
  'X'= 10,
  'L'= 50,
  'C'= 100,
  'D'= 500,
  'M'= 1000
}

const isRomanNumeral = (roman: string): boolean => {
  return roman.match(/[IVXLCDM]/g)?.length === roman.length
}

function romanToInt(s: string): number {
  if (!s || !isRomanNumeral(s)) return 0
  
  let sum = 0
  let current = 0
  let next = 0
  for (let i = 0; i < s.length; i++) {
    if (next) {
      current = next
    } else {
      current = RomanNum[s[i]]
    }
    next = RomanNum[s[i + 1]]
    if (i < s.length - 1 && current < next) {
      sum -= current
    } else {
      sum += current
    }
  }
  
  return sum
}
```

## 更暴力的映射

这部分来源于 [Functional Typescript Solution](https://leetcode.com/problems/roman-to-integer/discuss/1191442/Functional-Typescript-Solution)：

```ts
const romanNumeralMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  CD: 400,
  CM: 900,
  XL: 40,
  XC: 90,
  IV: 4,
  IX: 9
}

const romanNumeralRegex = /(CD|CM|XL|XC|IV|IX|M|D|C|L|X|V|I)/g

function romanToInt (s: string): number {
  return s
    .match(romanNumeralRegex)
    .map((numeral) => romanNumeralMap[numeral])
    .reduce((acc, n) => acc + n)
}
```
