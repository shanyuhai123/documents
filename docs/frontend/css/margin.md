---
title: margin
---

## 概述

`margin` 属性为给定元素设置外边距属性。

```
形式语法: [ <length> | <percentage> | auto ]{1,4}

margin: style                  /*单值语法  所有边缘 */  举例： margin: 1em; 
margin: vertical horizontal    /*二值语法  纵向 横向 */  举例： margin: 5% auto; 
margin: top horizontal bottom  /*三值语法 上 横向 下*/  举例： margin: 1em auto 2em; 
margin: top right bottom left  /*四值语法 上 右 下 左*/  举例： margin: 2px 1em 0 auto; 

margin: inherit
```



## 边距折叠

> 多个**块**的外边距**有时**（发生在 `writing-mode` 的相反方向）合并为单个边距，其大小为单个边距的最大值，这种行为称为边距折叠。

外边距折叠存在三种情况。

### 1. 同一层相邻元素之间

在默认 `writing-mode` 情况下。

```vue
<style lang="stylus" scoped>
p.margin-demo-1
   margin 20px 0
</style>

<p class="margin-demo-1">第一段</p>
<p class="margin-demo-1">第二段</p>
```

::: details 效果

<style lang="stylus" scoped>
p.margin-demo-1
   margin 20px 0
</style>

<p class="margin-demo-1">第一段</p>
<p class="margin-demo-1">第二段</p>

:::

### 2. 父元素与后代元素（第一个/最后一个）

```vue
<style lang="stylus" scoped>
section.margin-demo-2
  margin-top 5px
  margin-bottom 20px
header.margin-demo-2
    margin-top 20px
footer.margin-demo-2
    margin-bottom 5px
</style>

<section class="margin-demo-2">
  <header class="margin-demo-2">子元素的 margin top 20</header>
  <main></main>
  <footer class="margin-demo-2">父元素的 margin bottom 20</footer>
</section>
```

::: details 效果

<style lang="stylus" scoped>
section.margin-demo-2
  margin-top 5px
  margin-bottom 20px
header.margin-demo-2
    margin-top 20px
footer.margin-demo-2
    margin-bottom 5px
</style>

<section class="margin-demo-2">
  <header class="margin-demo-2">子元素的 margin top 20</header>
  <main></main>
  <footer class="margin-demo-2">父元素的 margin bottom 20</footer>
</section>

:::

### 3. 空的块级元素

```vue
<style lang="stylus" scoped>
p.margin-demo-3
  margin 0
div.margin-demo-3
  margin 20px 0
</style>

<p class="margin-demo-3">上 margin 20px</p>
<div class="margin-demo-3"></div>
<p class="margin-demo-3">下 margin 20px</p>
```

<style lang="stylus" scoped>
p.margin-demo-3
  margin 0
div.margin-demo-3
  margin 20px 0
</style>

::: details 效果

<p class="margin-demo-3">上 margin 20px</p>
<div class="margin-demo-3"></div>
<p class="margin-demo-3">下 margin 20px</p>

:::

## auto

在为一个定宽元素设置居中效果时常常会使用 `margin: 0 auto;`，其中利用 `auto` 来平分剩余空间而实现居中。

得知了 `auto` 可以占用空间后，可以利用其类似 `text-align` 做到对块级元素左中右对齐。

甚至可以利用其实现垂直居中的效果：

```css
div {
  position: absolute;
  width: 100;
  height: 50;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
}
```

