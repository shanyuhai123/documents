# DNS 解析 Github Pages

## 前言

Github Pages 访问变得愈加困难了，所以不断有人私聊我笔记网站挂了。

## DNS 解析

在访问网站时，需要通过 DNS 解析网站的地址，显然可以在 DNS 解析处解决该问题，是国内 IP 访问的就解析到本地（也有选择 Gitee 和 Coding），是国外 IP 访问就解析到 Github Pages。

![dns record](./assets/dns-record.png)

将域名的线路类型调整为 **境外**，再增加一条解析到国内的记录即可。

使用站长工具进行测试：

![website routes test](./assets/website-routes-test.png)

## HTTPS 失败

操作完以上步骤后访问正常，但卡在了国内服务启用 HTTPS 失败，猜测是 HTTPS 服务商解析 DNS 优先走了 Github 的，于是：

1. 先停用该域名的所有解析
2. ping 域名确认失败
3. DNS 添加指向国内的解析
4. ping 域名确认指向国内
5. DNS 恢复指向 Github 的解析
6. 测试结果成功
