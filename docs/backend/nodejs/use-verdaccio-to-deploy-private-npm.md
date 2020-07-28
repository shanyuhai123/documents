---
title: 利用 verdaccio 部署私有 npm
---

## 起始

搭建私有 NPM 的方案有几个，此处选取 [Verdaccio](https://verdaccio.org/zh-CN/)。



## 尝试

```bash
# 全局安装
npm i verdaccio -g

# 启用
verdaccio
```

接着在 `4873` 端口就可以看到它的页面。



## 持久化

可利用 [pm2](https://www.npmjs.com/package/pm2) 使 `verdaccio` 维持在后台且开机启动服务。

```bash
# 首先全局安装 pm2
npm i pm2 -g

# pm2 启动 verdaccio
pm2 start verdaccio

# 保存现有 pm2 数据
pm2 save

# 设置开机启动
pm2 startup
# 在 ubuntu 下会生成一段提示
# 根据提示执行指令即可

# 重启服务器验证
pm2 ls
# 还可以在 systemd 中查看状态
systemctl status pm2-shanyuhai.service
```

当然可能更好的选择是使用 `docker`，`verdaccio` 为我们提供了其使用方式。



## 使用

其使用如 `npm` 一般，利用 `npm adduser --registry http://localhost:4873` 即可以注册用户了。



::: tip

[官网](https://verdaccio.org/zh-CN/) 上有更多的细节可以查看。

:::

### 1. 帐号限制

作为私有 npm 服务，一般拒绝自行添加用户，一般由管理员分配帐号。

可设置 `config.yaml` 中的 `max_users: -1` 来禁用 `npm adduser` 指令，并使用 [verdaccio-htpasswd](https://www.npmjs.com/package/verdaccio-htpasswd) 来替代。

### 2. config 文件说明

`verdaccio` 配置文件在 `~/.config/verdaccio` 目录下。

```yaml
#
# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.
#
# Look here for more config file examples:
# https://github.com/verdaccio/verdaccio/tree/master/conf
#

# path to a directory with all packages
# 发布的 npm 包的存放路径
storage: ./storage
# path to a directory with plugins to include
# 启用的插件路径
plugins: ./plugins

# 配置 web 界面
web:
  title: Verdaccio
  # comment out to disable gravatar support
  # gravatar: false
  # by default packages are ordercer ascendant (asc|desc)
  # sort_packages: asc
  # convert your UI to the dark side
  # darkMode: true

# translate your registry, api i18n not available yet
# i18n:
# list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations
#   web: en-US

# 用户验证
auth:
  htpasswd:
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    # max_users: 1000

# a list of other known repositories we can talk to
# 未找到 npm 包时寻找的地址
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

# 配置 npm 包权限
packages:
  '@*/*':
    # scoped packages
    # 可访问权限
    access: $all # $all 表示所有人
    # 可发布权限
    publish: $authenticated # $authenticated 表示只有通过验证的人
    # 可取消发布权限
    unpublish: $authenticated
    # 包不存在时的代理
    proxy: npmjs

  '**':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish/publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated
    unpublish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.
# A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.
# WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.
server:
  keepAliveTimeout: 60

middlewares:
  audit:
    enabled: true

# log settings
logs:
  - { type: stdout, format: pretty, level: http }
  #- {type: file, path: verdaccio.log, level: info}
#experiments:
#  # support for npm token command
#  token: false
#  # support for the new v1 search endpoint, functional by incomplete read more on ticket 1732
#  search: false

# This affect the web and api (not developed yet)
#i18n:
#web: en-US
```

更新配置后：

```bash
verdaccio -c config.yaml
```

