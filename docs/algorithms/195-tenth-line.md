---
autoSort: -195
---

# 第十行

## sed

个人比较习惯用 `sed`。

``` sh
sed -n 10p file.txt
```

## tail

``` sh
tail -n +10 file.txt | head -1
```

## awk

``` sh
awk 'NR==10' file.txt
```
