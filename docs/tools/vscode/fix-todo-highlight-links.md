# 修复 TODO HIGHLIGHT 的链接

[VSCODE-TODO-HIGHLIGHT](https://github.com/wayou/vscode-todo-highlight) 在 linux 平台下输出所有事项时对路径进行了编码，导致跳转失败。

## 修复

由于作者许久未维护且不想发包，所以本地进行修改即可，打开插件安装位置 `~/.vscode/extensions`，找到 `vscode-todo-highlight` 的 `util` 文件：

```diff
- var patternB = '#' + (i + 1) + '\t' + v.uri + ':' + (v.lineNum + 1) + ':' + (v.startCol + 1);
+ var patternB = '#' + (i + 1) + '\t' + decodeURIComponent(v.uri) + ':' + (v.lineNum + 1) + ':' + (v.startCol + 1)
```

重启 VSCode 即可。
