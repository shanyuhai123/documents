---
title: 提交信息
---

## Commit 规范化

大家都使用 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)。

Commit message 包括三个部分：

```bash
<type>(<scope>): <subject> # 必填
<BLANK LINE> # 空一行
<body> # 可选
<BLANK LINE> # 空一行
<footer> # 可选
```

+ type：必填，`commit` 的类型
  + feat：新功能
  + fix：修复 bug
  + docs：文档修改
  + style：格式修改，例如空格、分号等
  + refactor：不增加功能也不修复 bug 的代码更改
  + perf：性能提升、交互优化
  + test：测试相关修改
  + build：外部依赖项的修改，如 gulp、npm
  + ci：ci 的修改
  + chore：关于构建项目相关的修改，非代码和测试
  + revert：版本回滚
  
+ scope：选填，`commit` 的影响范围，常指定模块或文件名

+ subject：必填，`commit` 的简短描述

+ body：选填，`commit` 的详细描述

+ footer：选填，备注信息，通常是破坏性更新或关闭 Issue

  ```bash
  BREAKING CHANGE: 变动的描述
  Close #ISSUE_ID
  Closes #ISSUE_ID, #ISSUE_ID
  ```

### 1. 模板

提交信息最好在在[模板](https://www.npmjs.com/package/commitizen)的约束下：

```bash
npm i commitizen -D
```

初始化适配器：

```bash
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

在 `package.json` 中添加 `script`：

```json
{
  "scripts": {
    "commit": "cz"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

当执行 `yarn run commit` 就可以使用提交模板了。

### 2. 强制规范

为了在各种姿势使 commit 符合规范，[校验](https://github.com/conventional-changelog/commitlint#readme)是必要的。注意 **husky v5** 配置有所[更改](https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v6)。

**如何校验：**

+ 安装依赖

  ```bash
  npm i @commitlint/cli @commitlint/config-conventional -D
  ```

+ 指定校验模板

  ```bash
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
  ```

**何时校验：**

很明显需要在 `git commit` 前的生命周期内进行校验。

+ 安装 husky

  ```bash
  npm i husky -D
  ```

+ 拦截 git hook

  ```bash
  # Active hooks
  npx husky install
  
  # Add hook
  npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
  ```

+ 测试

  ```bash
  git add .
  git commit -m "hello husky"
  
  # 拦截
  ⧗   input: hello husky
  ✖   subject may not be empty [subject-empty]
  ✖   type may not be empty [type-empty]
  ```



## 生成 CHANGELOG

根据规则生成 CHANGELOG 的前提是 commit 规范化。

首先安装[依赖](https://github.com/conventional-changelog/standard-version)，如果之前使用了其他模板，也应寻找对应的依赖。

```bash
npm i standard-version -D
```

在 `package.json` 中添加 `script`：

```json
{
  "scripts": {
    "changelog": "standard-version"
  }
}
```

执行 `npm run release` 得到的效果一般，那么自然希望加点料。

### 1. 配置

新增 [`.versionrc.js`](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md) 文件：

```js
module.exports = {
  "header": "# CHANGELOG\n\n这是一个有趣的 CHANGELOG。\n\n",
  "types": [
    { "type": "feat", "section": "✨ Features | 新功能" },
    { "type": "fix", "section": "🐛 Fixes | Bug 修复" },
    { "type": "perf", "section": "🔥 Performance Improvements | 性能优化" }
  ]
}
```

### 2. 指定版本

npm 命令传参需要使用 `--`：

```bash
npm run changelog -- --release-as 1.6.0
# 或
npm run changelog -- -r minor
```

### 3. hash 链接

这需要为项目添加 `git remote` 地址：

```bash
git remote add origin git@github.com:yourname/project.git
```



## 代码校验

前面已经打好了铺垫，加上代码校验也是顺理成章的事情。

一般代码校验只希望[校验更新的文件](https://www.npmjs.com/package/lint-staged)：

```bash
npm i lint-staged -D
```

接着前往 `package.json` 增加 `lint-staged` 字段，以 vue-cli 创建的项目示例：

```json
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
    "vue-cli-service lint",
    "git add"
  ]
}
```

而 husky 校验同样不在 `package.json` 中设置了：

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

如果还想加些什么，可以手动追加，例如 [stylelint](https://github.com/stylelint/stylelint)。

