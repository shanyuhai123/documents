---
title: SELECT
---

## 子句说明

| 子句     | 说明               | 是否必须使用           |
| -------- | ------------------ | ---------------------- |
| SELECT   | 要返回的列或表达式 | 是                     |
| FROM     | 从中检索数据的表   | 仅在从表选择数据时使用 |
| WHERE    | 行级过滤           | 否                     |
| GROUP BY | 分组说明           | 仅在按组计算聚集时使用 |
| HAVING   | 组级过滤           | 否                     |
| ORDER BY | 输出排序顺序       | 否                     |
| LIMIT    | 要检索的行数       | 否                     |



## 列

指从表的一个或多个数据列。

### 列选择

```sql
-- 单列
SELECT 
	prod_name
FROM products

-- 多列
SELECT 
	prod_id,
  prod_name,
  prod_price
FROM products

-- 全部
SELECT * FROM products
```

### 限制结果

```sql
-- 直接在列上限制
SELECT 
	DISTINCT vend_id
FROM products

-- 限制
SELECT 
	prod_name
FROM products
LIMIT 5

-- 偏移
SELECT 
	prod_name
FROM products
LIMIT 5, 5
```



## 排序

排序的概念比较简单，需要注意的是一般会将其放在后面执行。

```sql
-- 指定排序
SELECT 
	prod_name
FROM products
ORDER BY prod_name

-- 二次排序
SELECT 
	prod_id,
	prod_name,
  prod_price
FROM products
ORDER BY prod_price, prod_name

-- 指定顺序规则
-- 配合上 LIMIT 达到查询最大最小
SELECT 
	prod_id,
	prod_name,
  prod_price
FROM products
ORDER BY prod_price DESC, prod_name
```



## 过滤

感觉与日常要写的 `filter` 方法一致。

### 简单 WHERE

```sql
-- 简单
SELECT 
	prod_name,
  prod_price
FROM products
WHERE prod_price = 2.5

-- 范围
SELECT 
	prod_name,
  prod_price
FROM products
WHERE prod_price BETWEEN 2 AND 5

-- NULL
SELECT 
	cust_id,
  cust_name
FROM customers
WHERE cust_email IS NULL
```

### 组合语句

注意 AND 和 OR 同时使用时 AND 计算优先级更高，在任何多种操作符存在时都使用 `()`  明确区分，避免出现问题。

```sql
SELECT 
	vend_id,
	prod_id,
  prod_name,
  prod_price
FROM products
WHERE vend_id = 1002 OR vend_id = 1003 AND prod_price <= 5
```

### 范围表示

`IN` 操作符可表示条件范围，可利用 IN WHERE 子句完成一些麻烦的手写行为。

```sql
SELECT 
	vend_id,
	prod_id,
  prod_name,
  prod_price
FROM products
WHERE vend_id IN (1002, 1003)
ORDER BY prod_price

-- NOT
SELECT 
	vend_id,
	prod_id,
  prod_name,
  prod_price
FROM products
WHERE vend_id NOT IN (1002, 1003)
ORDER BY prod_price

-- 子查询
SELECT 
	cust_name,
  cust_contact
FROM customers
WHERE cust_id IN (
	SELECT
		cust_id
	FROM orders
  WHERE order_num IN (
    SELECT 
      order_num
    FROM orderitems
    WHERE prod_id = 'TNT2'
  )
)
```

### 通配符

前面的过滤很常见，但更实用的还看通配符。

```sql
-- % 表示任何字符出现任意次数
SELECT 
	prod_id,
	prod_name
FROM products
WHERE prod_name LIKE "%an%"

-- 匹配中间
SELECT 
	prod_id,
	prod_name
FROM products
WHERE prod_name LIKE "s%e"

-- _ 表示任何字符出现一次
SELECT 
	prod_id,
	prod_name
FROM products
WHERE prod_name LIKE "_et%"
```

### 正则表达式

无论啥语言都逃不过正则表达式的魔爪，幸运的是它们的规则、关键字基本相通，减少了学习成本。

```sql
SELECT 
	prod_id,
	prod_name
FROM products
WHERE prod_name REGEXP '[1-9] Ton'

-- MySQL 解释一次、正则表达式库再解释一次
SELECT 
	prod_id,
	prod_name
FROM products
WHERE prod_name REGEXP '\\d{4}'
```

### 对特殊格式的处理

例如日期格式，当仅想对比到日时：

```sql
SELECT 
	cust_id,
  order_num,
  order_date
FROM orders
WHERE date(order_date) = '2005-09-01'
```

更多内置的方法可[参考](https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html)。



## 计算字段

很多时候是由计算返回的结果。别名 `alias` 可简写为 AS，甚至还可忽略。

```sql
SELECT 
	vend_id,
  concat(vend_name, '(',vend_country, ')') vend_title
FROM vendors
ORDER BY vend_name

-- 算术运算
SELECT 
	prod_id,
  quantity,
  item_price,
  quantity * item_price AS total_price
FROM orderitems
WHERE order_num = 20005

-- 子查询
SELECT
	cust_name,
  cust_state,
  (
    SELECT 
      count(*)
    FROM orders
    WHERE orders.cust_id = c.cust_id
  ) AS orders
FROM customers c
ORDER BY cust_name
```



## 分组

如果对 `count(*)` 存在困惑的话，配合上分组就好理解了。

```sql
SELECT 
	vend_id,
  count(*) AS num_prods
FROM products
GROUP BY vend_id
```

需注意配合分组使用的是 `HAVING` 而非 `WHERE`，一种理解是 `WHERE` 在数据分组前进行过滤，`HAVING` 在数据分组后进行过滤，到底是怎么回事得看 MySQL 的源码了。

```sql
SELECT 
	vend_id,
  count(*) AS num_prods
FROM products
GROUP BY vend_id
HAVING count(*) > 2
```

