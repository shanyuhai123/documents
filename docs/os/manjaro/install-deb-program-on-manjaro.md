# 在 Manjaro 安装 deb 程序

虽然很多程序已经支持了 Linux 平台，但大多数仅提供了 `deb` 包。

## 操作步骤

安装 `debtap`：

```bash
yay -S debtap
```

更新 `debtap`：

```bash
sudo debtap -u
```

找到你下载好的 `deb` 包：

```bash
debtap example_2.8.0.0_x86_64.publish.deb
```

最后使用 `pacman` 安装本地 `pkg` 即可：

```bash
sudo pacman -U example_2.8.0.0_x86_64.pkg.tar.zst
```
