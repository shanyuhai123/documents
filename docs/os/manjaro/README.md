# 体验美好的 Manjaro 吧

## 制作 U 盘启动

以往在 Windows 下常使用 [rufus](https://rufus.ie/) 来制作启动盘，而 `rufus` 暂无对 `Linux` 平台的支持。

> 安利下 [Ventoy](https://github.com/ventoy/Ventoy)。



### 1. 获取 U 盘路径

```bash
fdisk -l # 从中找到 /dev/sdc
```

### 2. 格式化 U 盘

```bash
mkfs.[type] /dev/sdc # [type] 为需要的类型，如 fat32、ext4、ntfs，例 mkfs.ext4
```

### 3. dd 命令

指定 `iso` 及 U盘路径即可，相对于 `rufus` 等工具，该指令可能会花费较多的时间，原因未明。

```bash
dd if=/path/ubuntu-20.04-live-server-amd64.iso of=/dev/sdc
```



## 虚拟机安装 Manjaro

首先需要安装虚拟机，此处选用 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)。

接着需要准备好 manjaro 的 ISO 文件，此处选用 [kde](https://manjaro.org/download/kde/) 版本。

### 虚拟机中加载 Manjaro

1. 虚拟机安装完成后，点击新建；
2. 输入名称，并选择 `Arch Linux` 版本；
3. 接下来是分配内存，当然是越大越好；
4. 选择创建虚拟硬盘；
5. 虚拟硬盘文件类型选择默认的 VDI；
6. 虚拟硬盘控件选择动态分配即可；
7. 虚拟硬盘的大小推荐 30G 以上；
8. 接着就创建好一个空壳了；
9. 还需要进一步配置虚拟机，选择对应的虚拟机点击设置；
10. 选择 `系统 > 处理器` 可以选择 CPU 的数量，同样是越多越好，但是不要影响到电脑本身，量力而为；
11. 选择 `存储 > 控制器` 可以选择 ISO 文件，选择之前下载的 Manjaro ISO 文件，切记不要装成其余的了；
12. 点击 OK，这样就基础配置好了，如果你想要虚拟机拥有本地网络的话，可以在网络中修改为 `桥接网卡` 。

### 安装 Manjaro

启动后会进入欢迎界面，修改下时区，键盘位置，语言，当然比较重要的是记得把驱动选择为闭源（nofree），这些完成后选择 Boot 就可以启动了。

进入系统后，会重新进行一些配置，比较重要的就是分区了，虚拟机的话会有一个完整的分区可供选择，直接选择抹除磁盘就可以了。

如果是实体机器的话，如果不需要双系统存在也可以选择抹除磁盘。

双系统的话就需要手动分区了，选中你之前空出来的那个硬盘块。核心的分区有三个：

1. 首先是内核，启动引导，选择 `/boot` 然后分配给 512MB 即可，最大可分配给 2G。它平时并不参与运行，仅在启动和内核升级时会用到；
2. 接着是交换分区，选择 `Swap`，过去的经验是物理内存在 8G 以上，就给 8G（或 1.5 倍），物理内存小于 8G，给 1.5 - 2 倍即可。不过我们使用的是 Manjaro（桌面 Linux），所以还是分个 20G 压压惊好了。
3. 最后是主要的一项了， `/` 将剩余的控件全部分给它吧。虽然有很多人会进一步分一个 `/home`，但个人觉得没有必要。

这些分区是以往做虚拟机学习时的经验，至于是否适用于桌面版 Linux，还有真正的商业级架构尚未知。
最后，安装速度与你的网速、电脑性能成正比，如果你等待半天都无法安装成功，那么可以直接把网线拔了（因为会默认进行系统软件更新），稍等片刻就会安装成功了。

### 那真机呢

当虚拟机测试完毕后，真机自是同理了。



## 修改软件源

默认软件源非国内，需要进行调整：

```bash
sudo pacman-mirrors -i -c China -m rank
```

### ArchLinuxCN

ArchlinuxCN 是由 Arch Linux 中文社区维护的非官方的仓库，也就是说它会提供一些没有被 Arch Linux 收录的国产软件。 需注意它是 `arch` 的而非 `manjaro` 的，而 `manjaro` 的官方源更新滞后于 `arch`，当上游出现 `ABI` 破坏性更新时，ArchlinuxCN 会优先保证 Arch Linux 的用户体验，至于更新落后的 `manjaro` 可能就会挨打了。

### 配置

命令行配置：

```bash
sudo vim /etc/pacman.conf

# 在最后追加
# 当然你也可以使用其他镜像
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
# Server = https://mirrors.aliyun.com/archlinuxcn/$arch

# 再添加源的 key
sudo pacman -S archlinuxcn-keyring

# 更新软件列表
sudo pacman -Syy
```

界面配置：

`Octopi` > `工具` > `软件源编辑器`。



## 优化 Arch 使用

### 支持 emoji

> 没有 emoji 就没有了 :thinking:

安装 `noto-fonts-emoji`：

```bash
sudo pacman -S noto-fonts-emoji
```

设置用户字体在 `~/.config/fontconfig/fonts.conf`，当然也可以设置系统字体 `/etc/fonts/local.conf`：

```bash
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
 <alias>
   <family>sans-serif</family>
   <prefer>
     <family>Noto Sans</family>
     <family>Noto Color Emoji</family>
     <family>Noto Emoji</family>
     <family>DejaVu Sans</family>
   </prefer> 
 </alias>

 <alias>
   <family>serif</family>
   <prefer>
     <family>Noto Serif</family>
     <family>Noto Color Emoji</family>
     <family>Noto Emoji</family>
     <family>DejaVu Serif</family>
   </prefer>
 </alias>

 <alias>
  <family>monospace</family>
  <prefer>
    <family>Noto Mono</family>
    <family>Noto Color Emoji</family>
    <family>Noto Emoji</family>
   </prefer>
 </alias>
</fontconfig>
```





## 切换到 Arch

在长期使用 `Manjaro` 后不妨试试 `Arch`。必读 [WIKI](https://wiki.archlinux.org/)。

<img :src="$withBase('/os/arch/manjaro-arch.png')" alt="arch" style="display:block;margin:0 auto;">
