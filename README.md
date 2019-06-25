[![Build Status](https://travis-ci.org/shanyuhai123/documents.svg?branch=master)](https://travis-ci.org/shanyuhai123/documents)

## 介绍
这是一个 VuePress 搭建的文档
具体如何搭建 VuePress 文档可以通过我录制的视频来学习, 视频地址为 https://www.bilibili.com/video/av43316513/

## 如何使用
```bash
# 1. 首先拷贝该项目
git clone git@github.com:shanyuhai123/documents.git

# 2. 安装依赖
yarn add # 或者 npm i

# 3. 本地运行查看(在运行前请先进行相关配置)
yarn docs:dev # 或者 npm run docs:dev

# 4. 推送到 github 的 gh 分支
yarn deploy # 或者 npm run deploy
```

## 配置
在使用该项目之前需要进行配置
因为本地尚未推送 Valine 的 appId 和 appKey
所以需要在 config 目录下新建 secretKeyConf.js 文件并暴露先关内容

### 1. secretKeyConf 配置项

```bash
# Valine
1. appId
2. appKey
# google analytics
3. ga
# google 网站认证
4. googleSearchConsole
```

### 2. 修改 node_modules 文件

1. 在默认主题上添加 Valine 组件

   路径为 

   ```bash
   # node_modules/@vuepress/theme-default/components/Page.vue
   ```

   修改内容为

   ```vue
       </div>
   
       <slot name="bottom"/>
       <!-- 仅需添加 <Valine></Valine> 即可 -->
       <Valine></Valine>
     </main>
   </template>
   ```

   Valine 已移除

