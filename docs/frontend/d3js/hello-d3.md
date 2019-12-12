---
title: 你好 D3
---

## SVG

## 始于SVG

可缩放矢量图形（Scalable Vector Graphics，SVG）是一种基于可扩展标记语言（XML），用于描述二维矢量图形的图形格式。

`D3` 是一个可以基于数据来操作文档的 JavaScript 库。可以使用 HTML、CSS、SVG 以及 Canvas 来展示数据。

> 配合 Vue 使用时常用 computed 属性，以数据驱动数据。

### 1. svg

`svg` 元素（容器元素、结构元素）可以在文档内嵌套一个独立的 `svg` 片段，这个片段具有独立的视口和坐标系统。`svg` 嵌套时彼此的视口和坐标系统也独立。

其 `xmlns` 属性定义了命名空间，可以区别与 HTML 冲突的元素。

### 2. g

`g` 元素常用于对图形进行分组，添加到 `g` 元素上的变换会应用到所有的子元素上。

此外，最重要的一点是可以利用 `use` 来对元素进行复用。

### 3. path

`path` 是 SVG 基本形状中最强大的一个。

1. 移动（Move to，M）：

   `<path d="M10 10"/>`。

2. 划线（Line，L）：

   简写，`H` 绘制水平线，`V` 绘制垂直线，`<path d="M10 10 H 90 V 90 H 10 L 10 10"/>`。

3. 闭合路径（Z）：

   `<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>`。

4. 曲线（C）：

   三次贝塞尔曲线需要定义一个点和两个控制点，`<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>`。

5. 更长的曲线（S）：

   S 命令跟在一个 C 或 S 命令后面时，则它的第一个控制点会被假设为前一个命令曲线的第二个控制点的中心对称点。

   同理可得二次贝塞尔曲线（Q）和对应的 （T）。

6. 弧形（A）：

   弧形可视为圆形或椭圆的一部分，`<path d="M80 80
              A 45 45, 0, 0, 0, 125 125
              L 125 80 Z" fill="green"/>`。

### 3. basic shapes

`rect`、`circle`、`Ellipse`、`Line`、`Polyline`、`Path`。



## SVG 样式

SVG 支持的样式方式与 CSS 相似：内联样式、内部样式表、外部样式表及表现属性。

### 1. 内联样式

元素内部使用 style 属性即可。

### 2. 内部样式表

内部样式定义在 `svg` 元素下的 `def` 元素中。

```css
<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg>
  <defs>
    <style type="text/css"><![CDATA[
      circle{
          fill:#ccc
      }
    ]]></style>
  </defs>
  <circle cx="10" cy="10" r="5"/>
</svg>
```

### 3. 外部样式表

样式定义在 CSS 文件中，使用选择器来设置相应的样式。

### 4. 表现属性

以属性的形式指定样式，但是优先级最低，易被其余样式方式覆盖。



## D3 概念

随着代码量的增多，越来越理解到设计理念的区别，一如 jQuery 的 DOM 操作，一如 MVVM 框架的数据驱动，理解了这些概念再学习起来才算是找到了门路。

然而一般只有熟悉某一个后才能切身体会到它的设计理念，所以目前关于其概念为空。

### 1. 选择集（Selections）

与 jQuery 的 `$` 基本一致。

```js
this.d3
  .select(".selection-binding") // 仅选中匹配的第一个元素
  .selectAll("p") // 选中所有匹配的元素
  .data(dataset) // 插入数据
  .text(d => {
    return d;
  });
```

### 2. enter 和 exit

> 其中留给人印象最深的莫过于这两个方法。

在利用数据绑定时，可能出现 DOM 元素不匹配的问题。`enter` 操作用于添加新的 DOM 元素，`exit` 操作用于移除多余的 DOM 元素。

然而实际应用中，不可能先去统计元素的个数，记住以数据驱动的思想。

```js
d3.select("body")
	.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
	.enter().append("p")
	.text(function(d) { return "I’m number " + d + "!"; });
```

