---
autoSort: -183
---

# 从不订购的客户

## NOT IN

``` sql
SELECT
  name as 'Customers'
FROM Customers c
WHERE c.id NOT IN (
  SELECT
    customerId
  FROM Orders
)
```
