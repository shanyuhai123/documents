---
autoSort: -182
---

# 超找重复的电子邮箱

关于 [HAVING](/backend/mysql/select.html#分组)。

## HAVING

``` sql
SELECT
  email
FROM Person
GROUP BY email
HAVING count(email) > 1
```
