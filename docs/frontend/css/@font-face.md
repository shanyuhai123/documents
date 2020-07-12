---
title: font-face
autoPrev: README
---

## 概述

`@font-face` 可以为网页制定在线字体。其不仅可以放在在CSS的最顶层, 也可以放在 @规则 的 [条件规则组](https://developer.mozilla.org/zh-CN/docs/CSS/At-rule#Conditional_Group_Rules) 中。



```
@font-face {
  [ font-family: <family-name>; ] ||
  [ src: <src>; ] ||
  [ unicode-range: <unicode-range>; ] ||
  [ font-variant: <font-variant>; ] ||
  [ font-feature-settings: <font-feature-settings>; ] ||
  [ font-variation-settings: <font-variation-settings>; ] ||
  [ font-stretch: <font-stretch>; ] ||
  [ font-weight: <font-weight>; ] ||
  [ font-style: <font-style>; ]
}
where 
<family-name> = <string> | <custom-ident>+
```



## 使用

以往经常以图标的方式来调用它，例如使用阿里巴巴图标库下载 `iconfont.css`：

```css
@font-face {font-family: "iconfont";
  src: url('iconfont.eot'); /* IE9 */
  src: url('iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('base64') format('woff2'), /* base64 省略 */
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

如果比较激进的话可以考虑仅保留 `woff2`。

### 1. font-family

可以声明一个自己喜欢的名字，之后在对应选择器的 font-family 属性中调用它了。

### 2. src

常用 `url` 来指定在线字体，也可以利用 `local` 指定用户本地的字体。



## 其他

一般阿里巴巴图标库还提供了生成 `svg` 的方法，其具有一些特性：

- 支持多色图标了，不再受单色限制。
- 通过一些技巧，支持像字体那样，通过 `font-size`、`color` 来调整样式。
- 兼容性较差，支持 ie9+,及现代浏览器（现在完全不是问题）。
- 浏览器渲染svg的性能一般，还不如png。

调用方式也更加简单，引入对应的 JavaScript 脚本即可。