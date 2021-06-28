---
title: 图形
---

## border-radius

CSS 中很简单的东西，Canvas 则稍有麻烦。

<div style="display: flex;align-items: center;justify-content: space-between;">
  <canvas ref="roundCorner" width="300" height="300"></canvas>
  <canvas ref="circle" width="300" height="300"></canvas>
</div>

```js
export default {
  mounted() {
    this.drawRoundCorner()
    this.drawCircle()
  },
  methods: {
    drawRoundCorner() {
      const roundCorner = this.$refs.roundCorner
      const roundCornerCtx = roundCorner.getContext('2d')

      this.roundedImage(roundCornerCtx, 10, 10, 280, 280, 10)
      roundCornerCtx.strokeStyle = '#004643'
      roundCornerCtx.stroke()
      roundCornerCtx.fillStyle = '#f9bc60'
      roundCornerCtx.fill()
      roundCornerCtx.restore()
    },
    drawCircle() {
      const circle = this.$refs.circle
      const circleCtx = circle.getContext('2d')

      circleCtx.save()
      circleCtx.beginPath()
      circleCtx.arc(150, 150, 130, 0, Math.PI * 2, false)
      circleCtx.strokeStyle = '#232946'
      circleCtx.stroke()
      circleCtx.clip()
      circleCtx.fillStyle = '#eebbc3'
      circleCtx.fill()
      circleCtx.restore()
    },
    roundedImage(ctx, x, y, width, height, radius) {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    }
  }
}
```


<script>
export default {
  mounted() {
    this.drawRoundCorner()
    this.drawCircle()
  },
  methods: {
    drawRoundCorner() {
      const roundCorner = this.$refs.roundCorner
      const roundCornerCtx = roundCorner.getContext('2d')

      this.roundedImage(roundCornerCtx, 10, 10, 280, 280, 10)
      roundCornerCtx.strokeStyle = '#004643'
      roundCornerCtx.stroke()
      roundCornerCtx.fillStyle = '#f9bc60'
      roundCornerCtx.fill()
      roundCornerCtx.restore()
    },
    drawCircle() {
      const circle = this.$refs.circle
      const circleCtx = circle.getContext('2d')
    
      circleCtx.save()
      circleCtx.beginPath()
      circleCtx.arc(150, 150, 130, 0, Math.PI * 2, false)
      circleCtx.strokeStyle = '#232946'
      circleCtx.stroke()
      circleCtx.clip()
      circleCtx.fillStyle = '#eebbc3'
      circleCtx.fill()
      circleCtx.restore()
    },
    roundedImage(ctx, x, y, width, height, radius) {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    }
  }
}
</script>



## 参考资料

+ [Canvas draw image with round corners and circle clip](https://codepen.io/movii/pen/QBgqeY)
