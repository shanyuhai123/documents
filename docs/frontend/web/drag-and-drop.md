# HTML 拖放

**HTML 拖放（Drag and Drop）** 接口使应用程序能够在浏览器中使用拖放功能。例如，用户可以使用鼠标选择可拖拽（draggable）元素，将元素拖拽到可放置（droppable），并释放鼠标按钮以放置这些元素。拖拽操作期间，会有一个可拖拽元素的半透明快照跟随鼠标指针。

## 事件

### 应用于被拖拽的元素

+ `drag`：当拖拽元素时触发（每 100 毫秒触发一次）
+ `dragstart`：当用户开始拖拽一个元素时触发（从操作系统向浏览器拖拽文件时，不会触发）
+ `dragend`：当拖拽操作结束时触发（从操作系统向浏览器拖拽文件时，不会触发）

### 应用于目标元素

> 被拖拽的元素区域也可监听以下事件

+ `dragenter`：当拖拽到一个可释放目标时触发
+ `dragover`：当元素被拖到一个可释放目标上时触发（每 100 毫秒触发一次）
+ `drop`：当元素在可释放目标上被释放时触发
+ `dragleave`：当鼠标离开目标元素时触发

### 阻止默认行为

1. 在 `dragover` 中，需要执行 `event.preventDefault()` 来阻止拖拽的默认操作，不知道这个默认操作是什么，但如果不阻止就不会触发 `drop` 事件
2. 在 `drop` 中同样需要执行 `event.preventDefault()` 来阻止拖拽的默认操作，如在 Firefox 如果 data 是链接则会跳转

## dataTransfer

直接通过 TypeScript 查看定义，可以看到是在 `MouseEvent` 的基础上增加了 `dataTransfer` 属性：

```ts
interface DragEvent extends MouseEvent {
  readonly dataTransfer: DataTransfer | null;
}

/** 
 * 用于保存拖放操作期间正在拖动的数据
 * 数据传递用全局变量不可以吗？如果仅在一个页面内拖东数据是没有问题的，但从桌面拖动到网页（或从网页拖动到桌面）则需要通过内置的 API。
 */
interface DataTransfer {
  /** 指定拖放操作所允许的一个效果 */
  effectAllowed: "none" | "copy" | "copyLink" | "copyMove" | "link" | "linkMove" | "move" | "all" | "uninitialized";
  /** 属性控制在拖放操作中给用户的反馈（通常是视觉上的，可就是没啥用） */
  dropEffect: "none" | "copy" | "link" | "move";

  /** 拖动的文件列表 */
  readonly files: FileList;
  /** 包含所有拖动数据列表的 DataTransferItemList 对象 */
  readonly items: DataTransferItemList;
  /** 返回在 dragstart 事件中(setData)设置的拖动数据格式的数组 */
  readonly types: ReadonlyArray<string>;

  /** 删除指定格式的数据。如果省略参数，则删除所有数据。 */
  clearData(format?: string): void;
  /** 返回指定的数据。如果没有此类数据，则返回空字符串。 */
  getData(format: string): string;
  /** 添加指定的数据。 */
  setData(format: string, data: string): void;
  /** 设置拖动图像 */
  setDragImage(image: Element, x: number, y: number): void;
}
```

## 参考资料

+ [HTML 拖放 API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
