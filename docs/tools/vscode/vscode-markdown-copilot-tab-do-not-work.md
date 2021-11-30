# Copilot tab 补全在 markdown 中不生效

似乎是由 [Markdown all in one](https://github.com/yzhang-gh/vscode-markdown/issues/1011) 插件引起的问题。

## 修复

按下 `Ctrl + Shift + P` 并搜索 `Preferences: Open Keyboard Shortcuts`，进入该界面后切换至 `JSON` 格式，并追加 `tab` 配置：

```json
[
  {
    "key": "tab",
    "command": "markdown.extension.onTabKey",
    "when": "editorTextFocus && !inlineSuggestionVisible && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'"
  },
  {
    "key": "tab",
    "command": "-markdown.extension.onTabKey",
    "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !suggestWidgetVisible && editorLangId == 'markdown'"
  }
]
```
