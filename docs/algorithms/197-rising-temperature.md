---
autoSort: -197
---

# 上升的温度

## 日期比较

借助日期比较函数。

``` sql
SELECT
  w1.id
FROM
  Weather w1,
  Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature
```
