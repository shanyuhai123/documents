---
title: You Get
---

## 介绍

一款很棒的[下载工具](https://github.com/soimort/you-get)。



## 简单使用

跳过安装部分。

一般看到感兴趣的视频后，先查看可用的参数(画质、格式)：

```bash
you-get -i
# download-with: you-get --itag=242 [URL]
```

将指定参数添加到下载方式中：

```bash
you-get --itag=242 'url'
```

当出现错误时：

```bash
you-get -i 'url' --debug
```

很多时候一个视频分很多段：

```bash
you-get --playlist 'url'
```



## 在线观看

除了将视频保存下来，还可以在线播放(`-p`/`--player`)。

### 1. 播放器

```bash
you-get -p vlc url
```

### 2. 浏览器

```bash
you-get -p chromium url
```



## 更多参数

|           参数           | 说明         |
| :----------------------: | ------------ |
|   `-o`/`--output-dir`    | 指定存储路径 |
| `-O`/`--output-filename` | 指定文件名   |
|   `-x`/`--http-proxy`    | 指定代理     |
|     `-c`/`-cookies`      | 指定 cookies |

当 `you-get` 不好用时，可以试一下 [annie](https://github.com/iawia002/annie)，维护的很勤快。