---
description: Arch 下支持 emoji
---

# 支持 emoji

> 没有 emoji 就没有了 :thinking:

## 操作步骤

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
