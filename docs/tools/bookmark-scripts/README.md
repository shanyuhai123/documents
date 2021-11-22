# 书签脚本

一些可以快捷使用的脚本，更复杂的推荐油猴。

## 如何使用

将下方的脚本拖拽至标签栏即可全局使用。

![bookmark scripts](./assets/bookmark-scripts.gif)

## 脚本

<a href="javascript: document.querySelectorAll('*').forEach(q => q.style.outline = q.style.outline ? '' : '1px solid red')"><Badge text="外边框" type="danger" vertical="middle"/></a>

::: details 说明

可以给页面中所有的元素添加外边框，便于查看 `DOM` 结构。

:::

<a href="javascript: document.querySelectorAll('a').forEach(a=>{if(!a.style.pointerEvents){a.setAttribute('markPointerEvents',true);a.style.pointerEvents='none';return;}if(a.getAttribute('markPointerEvents')&&a.style.pointerEvents==='none'){a.removeAttribute('markPointerEvents');a.style.pointerEvents='';return;}})"><Badge text="阻止链接跳转" type="danger" vertical="middle"/></a>

::: details 说明

阻止 a 链接跳转，便于复制文字。

拖到书签栏位置后，点击一次禁止跳转，再点击恢复跳转。

:::
