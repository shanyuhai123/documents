---
title: Stored Procedure
---

## 概念

存储过程三大作用：

+ 存储和管理 SQL 代码
+ 性能优化
+ 数据安全

糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：

+ [存储过程在实际项目中用的多吗？（知乎）](https://www.zhihu.com/question/54408187)
+ [存储过程在实际项目中用的多吗？（SF）](https://segmentfault.com/q/1010000007981279)
+ [为什么阿里巴巴Java开发手册里要求禁止使用存储过程？](https://www.zhihu.com/question/57545650/answer/325422160)

但基础的还是要了解的。



## 创建存储过程

```sql
DROP PROCEDURE IF EXISTS get_customer_by_id;

DELIMITER //

CREATE PROCEDURE get_customer_by_id (
    id VARCHAR(10)
)
BEGIN
    SELECT * FROM  customers c
    WHERE c.cust_id = id;
END//

DELIMITER ;
```

再调用：

```sql
CALL get_customer_by_id(10003)
```

