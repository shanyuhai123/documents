---
title: Webpack 的 loader 配置
---

## 1. 加载 CSS

::: danger 所需依赖

:tada: LOADERS
1. `less-loader/sass-loader/stylus-loader`
2. `postcss-loader`
3. `css-loader`
4. `style-loader/`
5. `MiniCssExtractPlugin.loader`

:tada: PLUGINS
1. `mini-css-extract-plugin`
2. `autoprefixer`

:::

### 加载 CSS 的两种形式

1. 通过 style-loader 加载到 `<style>` 标签中

   ```js
   {
     test: /\.css$/,
     use: [
       {
         loader: 'style-loader',
         options: {
           insertAt: 'top'
         },
       },
       'css-loader',
     ],
   },
   ```

2. 通过 mini-css-extract-plugin 将所有 css 提取到 `<link>` 标签的 CSS 文件中

   ```js
   {
     test: /\.styl$/,
     use: [
       {
         loader: MiniCssExtractPlugin.loader,
         options: {
           publicPath: './dist/',
         },
       },
       'css-loader',
       'postcss-loader',
       'stylus-loader',
     ],
   },
   ```

### 为 CSS 添加浏览器引擎前缀

在匹配到 css 文件时需要添加 `postcss-loader`, 上方已有示例

此外还需要在根目录下新建 `postcss.config.js`

```js
module.exports = {
  plugins: [
    require('autoprefixer'),
  ]
}
```

