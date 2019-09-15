---
title: 可视化 access 日志
---

## 介绍

虽然 Nginx 已经提供 access 日志来查阅，但是不得不说很难看清，常规的正则过滤又显得较为麻烦。于是就找到了这么一款实时网络日志分析器 [GoAccess](https://github.com/allinurl/goaccess)。



## 安装

此处以 Ubuntu Server 18.04 为示例，官网说明了，如果直接安装可能安装到较为老的版本，需要[更新](https://github.com/allinurl/goaccess#official-goaccess-debian--ubuntu-repository)。

```bash
echo "deb https://deb.goaccess.io/ $(lsb_release -cs) main" | sudo tee -a /etc/apt/sources.list.d/goaccess.list
wget -O - https://deb.goaccess.io/gnugpg.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install goaccess

goaccess --version # 验证 GoAccess - 1.3.
```



## 使用

### 1. 最简单的静态使用

::: danger

goaccess -f /var/log/nginx/access.log -o report.html --log-format=COMBINED

:::

+ `-f`：指定日志文件
+ `-o`：指定报表路径
+ `--log-format`：日志格式，不加则会报错

这样就会生成一份 html 文件，可以利用 scp（推荐）、sz、rsync 下载该文件到本地后查看。

### 2. 配合 Nginx 实时更新

首先需要创建一个 Nginx 配置文件：

```bash
sudo cp default.conf access-log.conf
sudo mkdir /var/www/html/report

vim access-log.conf
# 修改以下内容，自定义 xxx
server_name  xxx.shanyuhai.top;
location /report.html {
    alias /var/www/html/report/report.html;
    # 代理，限制访问
    allow xxx.xxx.xxx.xxx;
    deny all;
}

# 接着前往域名提供商添加 DNS 解析
```

::: danger

goaccess -f /var/log/nginx/access.log -o /var/www/html/report/report.html --log-format=COMBINED --real-time-html

:::

启动服务后会提示开启了一个 websocket，验证

```bash
ll /var/www/html/report
```

接着就可以在浏览器访问对应的地址了。

