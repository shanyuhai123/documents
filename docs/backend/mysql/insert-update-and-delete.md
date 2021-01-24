---
title: INSERT、UPDATE & DELETE
---

## INSERT

插入数据最好指定列名，可跳过默认取默认值的列且可更改顺序。

多行数据以 `,` 分隔。

```sql
INSERT INTO customers
	(cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country)
VALUES
	('Pep E. LaPew', '100 Main Street', 'Los Angeles', 'CA', '90046', 'USA'),
  ('M. Martian', '42 Galaxy', 'New York', 'NY', '11213', 'USA')
```



## UPDATE

更新语句由三部分组成：

+ 要更新的表
+ 列名和它们的新值
+ 确定要更新行的过滤条件

```sql
UPDATE customers
SET 
	cust_name = 'The Fudd',
	cust_email = 'elmer@fudd.com'
WHERE cust_id = 10005
```



## DELETE

注意检查 WHERE 有没有使用。

```sql
DELETE FROM customers
WHERE cust_id = 10006
```

