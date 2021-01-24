---
title: TRANSACTIONS
---

## 概念

事务处理是一种机制，用来管理成批的 SQL 操作，以保证数据库的完整性。如果错误发生，则进行回退（撤销）到已知安全状态的版本。

术语：

+ 事务（transaction）：指一组 SQL 语句
+ 回退（rollback）：指撤销指定 SQL 语句的过程
+ 提交（commit）：指将未存储的 SQL 语句结果写入数据库表
+ 保留点（savepoint）：指事务处理中设置的临时占位符（place-holder），你可以对它发布回退（与回退整个事务处理不同）



## 示例

```sql
START TRANSACTION;
DELETE FROM orders
WHERE order_num = 20016;
DELETE FROM orderitems
WHERE order_num = 20016;
COMMIT;
```

