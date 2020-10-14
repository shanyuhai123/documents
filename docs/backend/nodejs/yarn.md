---
title: Yarn
---

## 强制使用 yarn

该脚本来源于 [Vue](https://github.com/vuejs/vue-next/blob/master/scripts/checkYarn.js)：

```js
if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\u001b[39m\n'
  )
  process.exit(1)
}
```

配合上 `package.json` 的 `preinstall` 生命周期：

```json
{
  "scripts": {
    "preinstall": "node ./scripts/checkYarn.js"
  }
}
```

这样就大功告成了。



## link

`yarn link` 并不像 `npm link` 一样可以全局使用，需要安装到指定文件夹下才可使用，当然也是有一定的方法的：

```json
{
  "scripts": {
    "link:add": "yarn global add file:$(pwd)"
  }
}
```

执行 `yarn link:add` 即可。