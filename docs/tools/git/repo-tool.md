# 多仓库工具 Repo

## 前言

有个小任务，拉取 [Chromium OS](https://www.chromium.org/chromium-os/quick-start-guide) 的代码：

```bash
cd ${SOURCE_REPO}
repo init -u https://chromium.googlesource.com/chromiumos/manifest.git

# Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing
repo sync
```

其使用到了 [repo](https://source.android.google.cn/setup/develop/repo?hl=zh-cn) 工具。

## 安装

```bash
# 进入用户目录
cd /usr/bin
# 从清华源下载 repo
sudo curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
# 赋予执行权限
sudo chmod +x repo

# 校验
repo --version
```
