---
autoSort: -175
---

# 组合两个表

数据库[多表查询](/backend/mysql/join-and-union)。

## outer join

``` sql
SELECT
  p.FirstName,
  p.LastName,
  a.City,
  a.State
FROM Person p
LEFT JOIN Address a
  ON p.PersonId = a.PersonId
```
