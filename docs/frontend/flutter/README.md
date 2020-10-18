---
title: Flutter
sidebarDepth: 2
---

## 前言

Flutter 官网地址为 [flutter.dev](https://flutter.dev/)

开发环境为 `manjaro`。



::: danger 补充

有意思的是，当我重新安装 `flutter` 后：

 ````bash
# 此处为 gitlab 非 gitee
git clone https://github.com/flutter/flutter.git
 ````

以下在安装和使用时遇到的问题就消失了，但其中发生了什么也不可考究了。

所以不妨先按以下进行操作，最后再切换为 `github` 的仓库。

:::



## 安装

### 1. Flutter SDK

官网推荐最简单的方式是使用 `snap`，而 [snapd](https://snapcraft.io/docs/installing-snapd) 是支持 manjaro 的，那么直接安装它：

```bash
# snap 官网说 manjaro 预装了 snap，但可惜的是我这边并没有
sudo pacman -S snapd
```

接着就可以安装 `flutter` 了：

```bash
sudo snap install flutter --classic

# error: cannot communicate with server: Post "http://localhost/v2/snaps/flutter": dial unix /run/snapd.socket: connect: no such file or directory
```

糟糕的是，安装失败了，[找到解决方法](https://askubuntu.com/questions/1258137/cannot-communicate-with-server-post-http-localhost-v2-apps-dial-unix-run-sn)：

```bash
sudo systemctl unmask snapd.service
systemctl start snapd.service
```

再继续执行上一步的安装命令，等待安装完成。



当然，由于网速问题，我选择了使用 `git` 下载的方式，并使用了 `gitee` 的仓库：

```bash
# 修正 gitee 仓库名为 flutter
git clone https://gitee.com/mirrors/Flutter.git flutter -b stable --depth 1
```

### 2. 添加环境变量

再将其路径写到 `.bashrc` 或 `.zshrc` 等 `rc` 文件写入，还要记得将镜像改为 `cn`，否则你可能会卡在 `Building flutter tool...`：

```bash
# 增加 flutter
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"
```

接着就可以找到 `flutter` 和 `dart`：

```bash
which flutter dart
```

### 3. flutter doctor

可用 `flutter doctor` 来检测缺乏的环境。

```bash
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel unknown, 1.22.0, on Linux, locale zh_CN.UTF-8)
[✗] Android toolchain - develop for Android devices
    ✗ Unable to locate Android SDK.
      Install Android Studio from:
      https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK
      components.
      (or visit
      https://flutter.dev/docs/get-started/install/linux#android-setup for
      detailed instructions).
      If the Android SDK has been installed to a custom location, set
      ANDROID_SDK_ROOT to that location.
      You may also want to add it to your PATH environment variable.

[!] Android Studio (not installed)
[!] Connected device
    ! No devices available

! Doctor found issues in 3 categories.
```

### 4. Android Studio

根据提示缺乏了 `android studio`：

```bash
sudo pacman -S android-studio
```

安装完成后启动 `Android Studio`，根据提示一步步操作即可。

可以再使用 `flutter doctor` 检测一下：

```bash
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel unknown, 1.22.0, on Linux, locale zh_CN.UTF-8)
 
[!] Android toolchain - develop for Android devices (Android SDK version
    30.0.2)
    ✗ Android licenses not accepted.  To resolve this, run: flutter doctor
      --android-licenses
[!] Android Studio
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[!] Connected device
    ! No devices available
```

### 5. plugins

启动 `Android Studio` 后在其右下角有 `Configure`，选择 `plugins`。

进入界面后搜索 `flutter`，点击 `installed` 后根据提示一步步确认即可。

糟糕的是，在 `flutter doctor` 检测下依然会提示未安装，但使用是可以使用的，[ubuntu 20.04 也存在该问题](https://stackoverflow.com/questions/57085479/android-studio-flutter-plugin-not-installed-this-adds-flutter-specific-functi)。



### 6. toolchain

可以直接忽略：

```bash
flutter doctor --android-licenses
```



## 使用

### 1. 卡在 Creating Flutter Project

创建项目时卡在 `Creating Flutter Project`，但前往对应目录时发现项目已经创建完成，[解决方案](https://blog.csdn.net/wojiaoqiaoxiaoqiao/article/details/105806943)。

### 2. 卡在 flutter doctor

```bash
Checking Android licenses is taking an unexpectedly long time...
```

这个问题有点奇怪，但是直接关闭 `Android Studio` 后就没有问题了。

### 3. 卡在 Running Gradle task 'assembleDebug

参考这个[解决方案](https://stackoverflow.com/questions/59516408/flutter-app-stuck-at-running-gradle-task-assembledebug)：

```bash
# 获取详细的信息
flutter run -v
```

> 接下来的操作与其他回答均不一致，算是新手一顿乱操作竟然能运行了。  

发现时在下载 `gradle-5.6.2-all.zip` 引发了问题，手动将该文件下载下来放入 `/home/your_name/.gradle/wrapper/dists` 中。

然后修改项目的 `android/gradle/wrapper/gradle-wrapper.properties` 文件中 `distributionUrl` 指向 `file\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip`，然后将下载的文件放入该位置即可。

如果希望以后新建的项目都指向该地址呢？

回到之前 `git clone flutter` 的位置，找到 `packages/flutter_tools/templates/app/android.tmpl/gradle/wrapper/gradle-wrapper.properties` 文件，将  `distributionUrl` 指向 `file\:///home/your_name/.gradle/wrapper/dists/gradle-5.6.2-all.zip` 即可。



## 配置

### 1. 禁用 ios

```bash
# 查看使用说明及当前配置
flutter config -h

flutter config --no-enable-ios
# Settings:
#   enable-ios: false
```

