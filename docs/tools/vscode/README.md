# 编辑器 VSCode

插件安装位置为 `~/.vscode/extensions/` 下。

## 喜欢的配置

### 1. 隐藏菜单栏

> 在稍微熟练 `VSCode` 后菜单栏的存在就显得有些多余，占位也偏多。

打开 `Settings`，输入 `菜单栏(中文)` 或 `Menu Bar Visibility(英文)` 可找到该配置项，选择 `toggle` 即当按下 `ALT` 时会进行显隐切换。

### 2. 侧边栏

> 虽然侧边栏默认是在左边，但编写代码时基本无需关注菜单栏的状态，放在右边更为恰当。

打开 `Settings`，输入 `侧边栏(中文)` 或 `Side Bar(英文)` 可找到该配置项，选择 `right` 即可。

`CTRL + B` 可快速切换侧边栏显隐。

### 3. 禅模式

> 更为专注的模式，不过我也仅在编写~~文档~~笔记时使用。

在 `VSCode` 界面中按下 `CTRL + K` 然后再按下 `Z` 即可进入禅模式。

### 4. 文件跳转

在 `VSCode` 界面中按下 `CTRL + P` 即可进入搜索，找到对应的文件即可。

如果知道在当前文件夹且知道位置那么可以按下  `CTRL + SHIFT + E` 打开资源管理器，再使用上下键即可。

### 5. 创建文件/文件夹

> 可根据 `侧边栏` 或 `文件跳转` 中的步骤进入对应位置。

先按下 `CTRL + K`，再按下 `CTRL + S` 即可进入快捷键设置。输入 `newFile` 绑定按键 `CTRL + N`，在搜索 `newFolder` 绑定按键 `CTRL + SHIFT + N`，当然也可以选择你喜欢的。

## 快捷键

### 切换工作区

编辑：`Ctrl + 1/2/3`

命令行：`CTRL + ~`

菜单（资源管理器）：`Ctrl + Shift + E`

菜单（搜索）：`Ctrl + Shift + S`

菜单（源代码管理器）：`Ctrl + Shift + G`

菜单（调试）：`Ctrl + Shift + D`

## 主题配置

作为视觉动物，一个良好的配色可以帮助你更快的识别问题。

### 1. 区分项目

可利用 `Title Bar Colors` 的 `激活、未激活` 颜色来区分开启的多个 `VSCode` 窗口，可在[中国色](http://zhongguose.com/)选取喜欢的颜色。

## 版本提升

### 1. 快速启动 scripts 脚本  <Badge text="v1.37"/>

打开项目后在侧边栏会根据  `package.json` 脚本生成 `NPM SCRIPTS` ，点击即可快速启动。

### 2. 对比差异 <Badge text="v1.41"/>

利用 `CTRL` 选中 2 个文件，然后右键 `Select for Compare` 即可查看两个文件之间的差异。

### 3. 时间线 <Badge text="unknown"/>

查看一个文件被 `git` 跟踪的记录。

打开 `Settings`，切换到 `JSON` 格式：

```json
{
  "timeline.showView": true
}
```

### 4. 建议预览 <Badge text="v1.57"/>

对提示的代码进行预览，当提示的内容较多时比较实用。

打开 `Settings`，切换到 `JSON` 格式：

```json
{
  "editor.suggest.preview": true,
  "editor.suggest.previewMode": "subwordDiff"
}
```

## 参考资料

1. [VSCode](https://code.visualstudio.com/docs)
