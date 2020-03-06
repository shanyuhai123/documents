---
title: 识别 alias
---

## 介绍

很多时候为了避免复杂的层级关系，常常使用 webpack 的 `alias` 功能来简化路径，但这也产生了新的问题，无法实时解析文件中的内容，导致缺乏提示。

在 VSCode 官网也提供了该项的[说明](https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson)。



## 配置文件

```json
# jsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
  "include": [
    "./src/**/*.vue",
    "./src/**/*.js"
  ]
}
```

