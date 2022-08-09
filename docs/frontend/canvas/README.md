# 花里胡哨的 Canvas

Canvas 只支持两种形式的图形绘制：矩形和路径。

## 动画的基本步骤

> 当调用 `fill` 函数时，所有没有闭合的形状都会自动闭合，所以不需要调用 `closePath` 函数，但调用 `stroke` 时不会自动闭合。

1. 清空 canvas
2. 保存 canvas 状态
3. 绘制动画图形
4. 恢复 canvas 状态

## 状态的保存和恢复

Canvas 状态存储在栈中，每当 `save` 方法调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

+ 当前应用的变形（移动、旋转和缩放）
+ 以及下面这些属性：strokeStyle、fillStyle、globalAlpha、lineWidth、lineCap、lineJoin、miterLimit、lineDashOffset、shadowOffsetX、shadowOffsetY、shadowBlur、shadowColor、globalCompositeOperation、font、textAlign、textBaseline、direction、imageSmoothingEnabled
+ 裁剪路径，用来隐藏不需要的部分

## 像素操作

可以通过 `ImageData` 对象操纵像素数据，直接读取或将数据数组写入该对象中。
读取某行某列的像素点可使用公式 `(列 * (imageData.width * 4)) + (行 * 4) + R/G/B/A`，其中 `R/G/B/A` 对应的值为 `0/1/2/3`。

### 读取、写入像素

使用 `getImageData` 读取像素：

``` ts
function pick(ctx: CanvasRenderingContext2D, event: MouseEvent, destination: HTMLElement) {
  const x = event.clientX
  const y = event.clientY
  const pixel = ctx.getImageData(x, y, 1, 1)
  const [r, g, b, a] = pixel.data

  const rgba = `rgba(${r}, ${g}, ${b}, ${a / 255})`
  
  destination.style.background = rgba
  destination.textContent = rgba
  return rgba
}
```

使用 `putImageData` 写入像素：

``` ts
const image = new Image()
// 灰度
const grayscale = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i] = avg
    data[i + 1] = avg
    data[i + 2] = avg
  }

  ctx.putImageData(imageData, 0, 0)
}

// 反相
const invert = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]
    data[i + 1] = 255 - data[i + 1]
    data[i + 2] = 255 - data[i + 2]
  }

  ctx.putImageData(imageData, 0, 0)
}

// 复古（深褐色）
const sepia = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    let red = data[i], green = data[i + 1], blue = data[i + 2]

    data[i] = Math.min(Math.round(0.393 * red + 0.769 * green + 0.189 * blue), 255)
    data[i + 1] = Math.min(Math.round(0.349 * red + 0.686 * green + 0.168 * blue), 255)
    data[i + 2] = Math.min(Math.round(0.272 * red + 0.534 * green + 0.131 * blue), 255)
  }

  ctx.putImageData(imageData, 0, 0)
}
```

### 缩放和反锯齿

从原图中裁剪以鼠标中心 `10*10` 的像素，可以考虑先将原点移至 `-5,-5` 处，再向下裁剪 `10*10` 即可。

``` ts
const draw = (event: MouseEvent, originCanvas: HTMLCanvasElement, zoomCanvas: HTMLCanvasElement, smooth: boolean = true): void => {
  const x = event.clientX
  const y = event.clientY
  const zCtx = zoomCanvas.getContext('2d')

  // 抗锯齿
  zCtx.imageSmoothingEnabled = smooth
  
  zCtx.drawImage(
    originCanvas,
    Math.abs(x -5), Math.abs(y - 5), 10, 10, // source
    0, 0, 200, 200 // destination
  )
}
```

## 内置 API

> 标记部分曾带来困扰的

### drawImage

语法支持三种传参：

```js
// s => source image
// d => destination canvas
ctx.drawImage(image, dx, dy)
ctx.drawImage(image, dx, dy, dWidth, dHeight)
// 该形式常用于 sprite image
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

## 参考资料

+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)
