---
title: VIEWS
---

## 概念

视图是虚拟的表。

优点：

+ 重用 SQL 语句
+ 简化复杂的 SQL 操作
+ 使用表的组成部分而不是整个表
+ 保护数据
+ 更改数据格式和表示



## 使用

### 简单示例

创建视图：

```sql
CREATE VIEW product_customers AS
	SELECT
		cust_name,
		cust_contact,
		prod_id
	FROM customers c 
	JOIN orders o
		USING(cust_id)
	JOIN orderitems oi
		USING(order_num)
```

使用视图：

```sql
SELECT
	cust_name,
  cust_contact
FROM product_customers
WHERE prod_id = 'TNT2'
```



## 可更新视图

视图除了可以用在 SELECT 中，也可以用在增改删中，但具有限制条件：

+ 分组（GROUP BY 和 HAVING）
+ 联结
+ 子查询
+ 并
+ 聚集函数
+ DISTINCT
+ 导出计算列

