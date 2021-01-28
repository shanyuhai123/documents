---
title: 终端代理
---

## proxychains-ng

浏览器代理及应用代理均不存在问题，而终端代理总是出现各种奇怪的问题。

曾经使用以下方式，然后不知道被自己更新了什么就都失效了。

```bash
# ALL_PROXY
export ALL_PROXY=socks5://127.0.0.1:1080

# git
git config --global http.proxy 'socks5://127.0.0.1:1080'
```

最后接触了 [proxychains-ng](https://github.com/rofl0r/proxychains-ng)，感觉其更加强大与简单。

安装：

```bash
sudo pacman -S proxychains-ng
```

修改配置：

```bash
sudo vim /etc/proxychains.conf

# 注释掉 proxy_dns
# proxy_dns
# 最后一行改为对应的代理
socks5 127.0.0.1 1080
```



## 使用

1. curl

   ```bash
   proxychains curl www.google.com
   ```

2. git

   ```bash
   proxychains git clone git@github.com:rofl0r/proxychains-ng.git
   ```

3. yay

   ```bash
   proxychains yay -S microsoft-edge
   ```

   

