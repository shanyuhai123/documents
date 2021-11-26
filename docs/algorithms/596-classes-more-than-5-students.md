---
autoSort: -596
---

# 超过 5 名学生的课

## HAVING

```sql
SELECT
  class
FROM
  courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5
```
