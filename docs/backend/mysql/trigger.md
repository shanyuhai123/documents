---
title: TRIGGER
---

## 概念

触发器是在  INSERT、UPDATE、DELETE 语句前后自动执行的一段。

每个表每个事件每次只允许一个触发器，因此每个表最多支持 6 个触发器（每条 INSERT、UPDATE、DELETE 的之前和之后）。



## 实践

### INSERT

[MYSQL5以后，不允许触发器返回任何结果](https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233)，而且缺乏返回的对比，不如为其新增一列。

```sql
DROP TRIGGER IF EXISTS orders_after_insert;

DELIMITER //

CREATE TRIGGER orders_after_insert
	AFTER INSERT ON orders
  FOR EACH ROW
BEGIN
    SELECT NEW.order_num INTO @order;
END//

DELIMITER ;
```

### UPDATE

```sql
DROP TRIGGER IF EXISTS vendors_before_update;

DELIMITER //

CREATE TRIGGER vendors_before_update
	BEFORE UPDATE ON vendors
    FOR EACH ROW
BEGIN
    SET NEW.vend_state = upper(NEW.vend_state);
END//

DELIMITER ;
```

