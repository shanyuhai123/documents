---
title: 锚点
---

## 选项卡

```vue
<style lang="stylus" scoped>
.anchor-demo-1.tabs
  width 100px
  height 60px
  overflow hidden
  color #fff
  .tab
    line-height 60px
    text-align center
    &#anchor-demo-one
      background #893615
    &#anchor-demo-two
      background #A72310
    &#anchor-demo-three
      background #0C1F22
</style>

<section class="anchor-demo-1 tabs">
	<div class="tab" id="anchor-demo-one">内容1</div>
  <div class="tab" id="anchor-demo-two">内容2</div>
  <div class="tab" id="anchor-demo-three">内容3</div>
</section>

<section class="anchor-demo-1 links">
	<a class="link" href="#anchor-demo-one">1</a>
  <a class="link" href="#anchor-demo-two">2</a>
  <a class="link" href="#anchor-demo-three">3</a>
</section>
```

::: details 效果

<style lang="stylus" scoped>
.anchor-demo-1.tabs
  width 100px
  height 60px
  overflow hidden
  color #fff
  .tab
    line-height 60px
    text-align center
    &#anchor-demo-one
      background #893615
    &#anchor-demo-two
      background #A72310
    &#anchor-demo-three
      background #0C1F22
</style>


<section class="anchor-demo-1 tabs">
	<div class="tab" id="anchor-demo-one">内容1</div>
  <div class="tab" id="anchor-demo-two">内容2</div>
  <div class="tab" id="anchor-demo-three">内容3</div>
</section>

<section class="anchor-demo-1 links">
	<a class="link" href="#anchor-demo-one">1</a>
  <a class="link" href="#anchor-demo-two">2</a>
  <a class="link" href="#anchor-demo-three">3</a>
</section>

:::



## 回到顶部

```html
<a class="anchor-demo-2" href="#">回到顶部</a>
```

::: details 效果

<a class="anchor-demo-2" href="#">回到顶部</a>

:::