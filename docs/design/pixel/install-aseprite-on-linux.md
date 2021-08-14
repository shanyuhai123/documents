# 在 Linux 下安装 Aseprite

> 由于使用 `yay` 安装失败，于是另辟蹊径
>
> [视频版](https://www.bilibili.com/video/BV1Vh411a7SS/)



## 环境准备

虽然也可以本地安装依赖编译，但为了避免对现有的环境造成影响，选择了 Docker，需要准备好 [Docker](/backend/docker/init.html) 及 [Docker Compose](/backend/docker/compose.html) 环境。



## 安装

如果你可以访问 [Github](https://github.com/shanyuhai123/docker-aseprite-linux)：

```bash
# clone
git clone git@github.com:shanyuhai123/docker-aseprite-linux.git

# 编译
cd docker-aseprite-linux
docker-compose build
docker-compose up
```

缺乏网络代理的情况下可用 [Gitee](https://gitee.com/shanyuhai123/docker-aseprite-linux)：

```bash
https://gitee.com/shanyuhai123/docker-aseprite-linux.git
```

安装完成后执行 `docker-aseprite-linux/output/aseprite/build/bin/aseprite` 即可启动。



## 汉化

已从 [Aseprite汉化及界面调整教程](https://steamcommunity.com/sharedfiles/filedetails/?id=1333477949) 下载并修改部分配置，即 `dependencies` 中 `.aseprite-extension` 后缀的文件。

### 设置 Language 和 Theme

1. 打开 Aseprite，点击菜单栏 Edit => Preferences
2. 在 Preferences 窗口点击左侧的 Extensions => Add Extension
3. 弹出文件选择框，依次选择 `hanhua-1.2.23.aseprite-extension` 和 `zhuti-xiangsu.aseprite-extension` 文件
4. 在 Preferences 窗口点击左侧的 General => Language => zh
5. 在 Preferences 窗口点击左侧的 Theme => aseprite.theme.pixel

以上修改记得 Apply => OK

