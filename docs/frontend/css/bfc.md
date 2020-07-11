---
title: BFC
---

## 概念

**块格式化上下文（Block Formatting Context，BFC）** ，其可以处理外边距折叠和清除浮动。



## 产生

+ 根元素（`<html>`）
+ 浮动元素（元素的 [`float` 不是 `none`）
+ 绝对定位元素（元素的 `position` 为 `absolute` 或 `fixed`）
+ 行内块元素（元素的 `display` 为 `inline-block`）
+ 表格单元格（元素的 `display` 为 `table-cell`，HTML表格单元格默认为该值）
+ 表格标题（元素的 `display` 为 `table-caption`，HTML表格标题默认为该值）
+ 匿名表格单元格元素（元素的 `display` 为 `table`、`table-row`、 `table-row-group`、`table-header-group`、`table-footer-group`（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 `inline-table`）
+ `overflow` 值不为 `visible` 的块元素
+ `display` 值为 `flow-root` 的元素
+ `contain` 值为 `layout`、`content` 或 paint 的元素
+ 弹性元素（`display` 为 `flex` 或 `inline-flex` 元素的直接子元素）
+ 网格元素（`display` 为 `grid` 或 `inline-grid` 元素的直接子元素）
+ 多列容器（元素的 `column-count` 或 `column-width` 不为 `auto`，包括 ``column-count` 为 `1`）
+ `column-span` 为 `all` 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）。