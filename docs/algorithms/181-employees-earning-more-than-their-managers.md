---
autoSort: -181
---

# 超过经理收入的员工

## JOIN

``` sql
SELECT
  e.Name as 'Employee'
FROM
  Employee as e,
  Employee as m
WHERE e.ManagerId = m.Id AND e.Salary > m.Salary
```
