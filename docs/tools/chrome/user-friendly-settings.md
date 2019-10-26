---
title: 人性化设置
---

## 介绍

Chrome 浏览器总是会提供一些 “人性化” 设置，所以我们需要去关闭它。



## 设置

在浏览器地址栏输入 `chrome://flags/`。

### 1. www

问题：地址栏无法显示 `www` 部分。

搜索 `Omnibox UI Hide Steady-State URL Scheme and Trivial Subdomains`，设置为 Disabled。

> 在 Linux 的 78.0.3904.70 版本已经无法设置。

### 2. tab hover

问题：悬浮在标签栏时，有一个大大的丑丑的 card。

搜索 `tab-hover-cards`，设置为 Disabled。