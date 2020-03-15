---
title: 同步配置
---

## 介绍

用于同步编辑器的配置。

> gist 页面会存在访问限制，最好备好代理工具。



## 步骤

### 1. 安装

在 `EXTENSIONS` 中搜索 `Settings Sync` 并安装。

### 2. 生成 token

进入 Github，点击头像的 `Settings`，再点击 `Developer settings`，再点击 `Personal access tokens`，随后点击 `Generate new token` 即可根据提示生成 **token**。

1. Note 部分可以输入你可以理解的提示，例如 `vscode settings sync`；
2. Select scopes 部分仅需要勾选 `gist` 即可，**请勿给其余的权限**。
3. 最后点击 `Generate token` 即可生成 token。

### 3. 编辑 Settings Sync 配置

在第一次安装 `Settings Sync` 插件时会弹出一个弹窗让你填写配置。

有两个选项 `LOGIN WITH GITHUB`、 `EDIT CONFIGURATION`，此处点击  `EDIT CONFIGURATION`。

当后续想再次编辑时你可以更改对应 `Settings JSON`，也可以在编辑器中按下 `Ctrl + Shift + P`，然后输入 `sync` 找到 `Advanced Options` 选中在打开 `Open Options`。

### 4. 上传配置

上传配置需要你提供创建编辑 `gist` 的权限，也就是之前生成的 **token**，在配置界面填入 `token`，该插件会自动保存配置。

接着随便打开一个页面，按下 `Shift + Alt + U` 即可上传你的配置。稍后可以在编辑器控制台的输出(`OUTPUT`)标签看到上传信息，上传完成后会得到一个 `Gist ID`。回到 Github，点击头像的 `Your gists` 可看到新增的 `gist`。

### 5. 下载配置

你可以自己使用这一份配置，也可以分享给他人，仅需你将自己的 `Gist ID`  分享出去即可。如果忘了 `Gist ID` 可以回到 Github，点击头像的 `Your gists` 找到对应的 `gist`，此时浏览器的地址栏就是你的 `Gist ID`，或者在 `Embed` 处查看。

在配置界面填入对应的 `Gist ID`，再随便打开一个页面，按下 `Shift + Alt + D` 即可下载你的配置，稍后可以在编辑器控制台的输出(`OUTPUT`)标签看到下载信息。