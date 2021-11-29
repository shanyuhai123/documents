---
autoSort: -620
---

# 有趣的电影

## ORDER BY

```sql
SELECT
  *
FROM
  cinema
WHERE
  description != 'boring' AND id % 2 = 1
ORDER BY rating DESC
```
