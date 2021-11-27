# 认识 Chrome

身为前端，面对的最多莫过于浏览器了。

## 修改人性化设置

Chrome 浏览器总是会提供一些 “人性化” 设置，所以我们需要去关闭它。

在浏览器地址栏输入 `chrome://flags/` 即可进入设置界面。

### 1. 显示完整地址

在 `93.0.4577.63` 中已经找不到对应的设置了，仅可以右键地址栏然后选择 “总是选择完整地址”。

### 2. 禁止标签页缩略图预览

在 `chrome://flags/` 中搜索 `Tab Hover Card Images`，然后禁用即可。

## 获取 Chromium 源码

可以通过 [Chromium Code Search](https://source.chromium.org/) 在线查看源码，也可以[下载](https://www.chromium.org/chromium-os/quick-start-guide)到本地查看：

```bash
cd ${SOURCE_REPO}
repo init -u https://chromium.googlesource.com/chromiumos/manifest.git

# Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing
repo sync
```

## 参考资料

1. [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
2. [The Chromium Projects](https://www.chromium.org/)
3. [Chromium Code Search](https://source.chromium.org/)
4. [Chromium bugs](https://bugs.chromium.org/p/chromium/issues/list)
