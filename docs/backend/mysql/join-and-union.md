---
title: JOIN & UNION
---

## 多表查询

由于 JOIN 和 UNION 都是多表查询，所以放在一起了。



## JOIN

### 内部联结

内部联结又称为等值联结，它基于两个表之间的相等测试。

```sql
SELECT
	vend_name,
  prod_name,
  prod_price
FROM vendors v
JOIN products p
	USING (vend_id)
ORDER BY vend_name, prod_name

-- 自联结
SELECT
	p1.prod_id,
  p1.prod_name
FROM products p1
JOIN products p2
	ON p1.vend_id = p2.vend_id
	AND p2.prod_id = 'DTNTR'
```



### 外部联结

```sql
SELECT
	c.cust_id,
  o.order_num
FROM customers c
LEFT JOIN orders o
	ON c.cust_id = o.cust_id
```



### 聚集函数

```sql
SELECT
	c.cust_name,
  c.cust_id,
  count(o.order_num) as num_ord
FROM customers c
LEFT JOIN orders o
	ON c.cust_id = o.cust_id
GROUP BY c.cust_id
```



## UNION

在某种程度上 UNION 可以大幅简化 WHERE 子句。

UNION 中每个查询必须包含相同的列、表达式或聚集函数。

```sql
-- 指定 ALL 不会取消重复的行
SELECT
	vend_id,
  prod_id,
  prod_price
FROM products
WHERE prod_price <= 5
UNION ALL
SELECT
	vend_id,
  prod_id,
  prod_price
FROM products
WHERE vend_id IN (1001, 1002)
```

