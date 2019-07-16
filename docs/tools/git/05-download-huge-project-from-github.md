---
title: 从 Github 下载大项目
---

## 问题详情

最近准备开始查看 Vuetify 的一些实现步骤，直接在 Github 上阅读不是很方便，所以就想下载下来阅读。
结果下载时下载速度总是只有 4kb/s - 6kb/s，下载到最后还会报错……

## 解决方案

早期在 Windows 下设置 socks5 代理是没有问题的，但是 Manjaro 下遇到了问题，下载速度依然很慢。
就想到了另外一种取巧的方法，在之前使用 Gitee（码云）的时候提供了下载 Github 项目的服务。

## 操作步骤

0. 这次以 clone `vuetify` 为示例
1. 进入码云官网，点击新建项目
2. 回到 Github 你想要 clone 的项目位置，如：`https://github.com/vuetifyjs/vuetify`
3. 下拉到最下方，导入已有项目：`https://github.com/vuetifyjs/vuetify.git`
4. 点击确认后，等待完成（大概会等待 5 分钟）
5. 像你在 Github 上一样将项目 `clone` 下来即可（实测 1mb/s+）