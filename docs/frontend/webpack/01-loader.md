---
title: Webpack 的 loader 配置
---

## 加载 CSS

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

### 1. 加载 CSS 的两种形式

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

### 2. 为 CSS 添加浏览器引擎前缀

在匹配到 css 文件时需要添加 `postcss-loader`, 上方已有示例

此外还需要在根目录下新建 `postcss.config.js`

```js
module.exports = {
  plugins: [
    require('autoprefixer'),
  ]
}
```

## 加载 Images

::: danger 所需依赖

:tada: LOADERS

1. `file-loader`
2. `html-loader`
3. `url-loader`

:::

### 1. 加载 Images 的三种方式

1. 通过 JavaScript 加载

   ```js
   // index.js
   import Pic from './webpack01.png';
   
   const newImage = new Image();
   newImage.src = Pic; // 赋予
   
   // webpack.config.js
   rules: [
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader'
         }
       ]
     }
   ]
   ```

2. 通过 CSS 加载

   ```css
   #app {
     color: orangered;
     font-size: 0.5rem;
     width: 200px;
     height: 300px;
     background: url('./webpack01.jpg')
   }
   ```

   其余的按照上方的配置即可

3. 通过 HTML 加载

   ```js
   // index.html
   <img src="./webpack01.jpg" alt="">
     
   // webpack.config.js
   rules: [
     {
       test: /\.html$/,
       use: [
         {
           loader: 'html-loader',
           options: {
             attrs: ['img:src'], // 此处匹配上方的 img 标签 src 属性
           }
         }
       ]
     }
   ]
   ```

### 2. 优化 Images 加载

针对一些晓得图片没必要发送 HTTP 请求获取图片, 直接将图片转为 base64 的形式即可

```js
// webpack.config.js
rules: [
  // 需要注释掉 file-loader 这个匹配否则还会继续匹配然后生成图片
  // {
  //   test: /\.(png|svg|jpg|gif)$/,
  //   use: [
  //     {
  //       loader: 'file-loader'
  //     }
  //   ]
  // },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 20*1024 // 小于 20k 的图片转为 base64 
        }
      }
    ]
  }
]
```

## 加载 Font(字体)

::: danger 所需依赖

:tada: LOADERS

1. `file-loader`
2. `url-loader`

:::

### 1. 加载 Font 的两种方式

1. 使用 `file-loader` 

   ```js
   // webpack.config.js
   rules: [
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         {
           loader: 'file-loader',
         }
       ]
     }
   ]
   ```

   ```css
   /* style.css */
   @font-face {
     font-family: 'ShanFont';
     src: url('./ShanHunTianGeMoJi-2.ttf');
     font-weight: 600;
     font-style: normal;
   }
   
   .shan {
     font-family: 'ShanFont';
     color: blueviolet;
   }
   ```

2. 使用 `url-loader`

   `url-loader` 更进一步可以对资源的大小进行判断, 然后是否转成 base64 的资源