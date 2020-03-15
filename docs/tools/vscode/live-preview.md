---
title: 实时预览
---

## 介绍

虽然可以使用 `webpack` 的 `Hot Module` 来实时更新，但对于写一些简单的 CSS 用例来说则显得麻烦了一些。



## 简单使用

在 `EXTENSIONS` 中搜索 `Live Server` 并安装，之后即可在 Status Bar 上看到新增的 `Go Live` 图标，点击即可启动它。

> 需注意，这一切都是在常规的 CSS 用例下使用，若考虑更复杂的情况为什么不直接 `webpack` 而来折腾自己呢？



## 配合 Browser Preview

在具有双屏时直接使用 `Live Server` 即可获取良好的体验，但仅有一个屏幕时频繁的切换窗口也会带来糟糕的体验。

解决的方案就是安装 `Browser Preview`，然后打开 `Settings` 搜索 `useBrowserPreview`，勾选即可。