---
title: 同步一个 fork
---

## 配置 upstream

```bash
# 查看远程仓库
git remote -v
# 以 `ant-design-vue` 示例
git remote add upstream https://github.com/vueComponent/ant-design-vue.git
git remote -v # 验证
```



## 同步 upstream

```bash
git fetch upstream # fetch
git merge upstream/master # merge
```



## 推送

```bash
git push
```

最后前往 github 验证即可。