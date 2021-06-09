---
title: 微信小程序
---

## 微信环境

~~由于开发环境为 manjaro，所以开发环境也得[折腾一下](https://github.com/dragonation/wechat-devtools)，下载好包后还需要准备好 `wine` 支持，否则在使用时会出现一些问题。~~

[wechat-devtools](https://github.com/dragonation/wechat-devtools) 没有继续维护，折腾两天升级 1.05 失败，老实回归 Windows，要解决的就剩下数据共享问题：

1. `ln` 软连接到共享文件夹，由于微信开发者工具不能直接打开共享文件夹，采用 [FreeFileSync](https://freefilesync.org/) 同步两个文件夹
2. 或许直接外部数据方案会更好一些



## 构成

|                           构成单元                           | 后缀  | 说明                        |
| :----------------------------------------------------------: | :---: | --------------------------- |
|                        配置文件(JSON)                        | .json | 用于配置小程序而非程序本身  |
| 模板文件([WXML](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/)) | .wxml | 可看成 Vue 的 Template 部分 |
| 样式文件([WXSS](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)) | .wxss | CSS                         |
|                       脚本逻辑文件(JS)                       |  .js  | JavaScript                  |

### 配置文件

配置文件有 `app.json`、`project.config.json` 及页面内配置：

+ `app.json`

  包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等，页面内配置覆盖全局配置，[更多](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)。

+ `project.config.json`

  开发者工具的配置，可理解为 `.vscode`、 `tsconfig.json` 及 `package.json` 的集合体。



## 参考资料

1. [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AE%80%E4%BB%8B)
2. [uni-app](https://uniapp.dcloud.io/)
3. [uView](https://www.uviewui.com/)