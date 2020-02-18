---
title: 安装 Node.js
---

## nvm

[nvm](https://github.com/creationix/nvm) 用于解决多版本共存问题，可以使用最新的版本来测试新出的特性，也可以使用 `LTS` 来支撑稳定的业务，便于切换版本。

### 1. 安装

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

### 2. 测试

正常情况下测试：

```bash
nvm --version

# -bash: nvm: command not found
```

这是因为环境变量还未生效，执行 `source ~/.bashrc` 使环境变量生效，然后重新测试。

```bash
nvm --version

# 0.34.0
```



## nrm

用于解决 npm 镜像访问慢的问题，提供测速，便于切换源。

npm 自身是提供了切换源的配置的，但是多个源切换起来很麻烦。

```bash
npm config set registry https://registry.npmjs.org/
```

### 1. 安装

[nrm](https://github.com/Pana/nrm) 也是 `Node.js` 模块，可用于切换 npm 源。

```bash
npm install --global nrm
```

### 2. 查看源

```bash
nrm ls

# * npm ---- https://registry.npmjs.org/
#  cnpm --- http://r.cnpmjs.org/
#  taobao - https://registry.npm.taobao.org/
#  nj ----- https://registry.nodejitsu.com/
#  npmMirror  https://skimdb.npmjs.com/registry/
#  edunpm - http://registry.enpmjs.org/
```

### 3. 测速

```bash
nrm test
# * npm ---- 1837ms
#  cnpm --- 1050ms
#  taobao - 125ms
#  nj ----- Fetch Error
#  npmMirror  3027ms
#  edunpm - Fetch Error
```

### 4. 切换源

```bash
nrm use taobao
```



## npm

核心，用于解决 `Node.js` 模块安装问题，其本身也是一个模块。

### 1. 查看可安装版本

```bash
nvm ls-remote

# v10.13.0   (LTS: Dubnium)
# ...
# v10.15.3   (Latest LTS: Dubnium)
# v11.0.0
# ...
# v11.11.0
```

### 2. 安装

选择上方最新的 LTS 版本，如果需要对 Nodejs 进一步测试的话可以选择最新版本。

```bash
nvm install v10.15.3 # LTS
nvm install v11.11.0 # 最新版
```

### 3. 测试结果

```bash
node -v
# v10.15.3
npm -v
# 6.4.1
```

### 4. 切换版本

```bash
nvm use v11.11.0 
node -v

# v11.11.0
```

### 5. 查看可用版本

```bash
# 本地
nvm ls
# 远程
nvm ls-remote
```
