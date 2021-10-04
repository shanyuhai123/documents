<template>
  <div style="display: flex;align-items: center;justify-content: space-between;">
    <canvas ref="roundCorner" width="300" height="300"></canvas>
    <canvas ref="circle" width="300" height="300"></canvas>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const roundCorner = ref()
    const circle = ref()

    const roundedImage = (ctx, x, y, width, height, radius) => {
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

    const drawRoundCorner = () => {
      const roundCornerCtx = roundCorner.value.getContext('2d')

      roundedImage(roundCornerCtx, 10, 10, 280, 280, 10)
      roundCornerCtx.strokeStyle = '#004643'
      roundCornerCtx.stroke()
      roundCornerCtx.fillStyle = '#f9bc60'
      roundCornerCtx.fill()
      roundCornerCtx.restore()
    }
    const drawCircle = () => {
      const circleCtx = circle.value.getContext('2d')

      circleCtx.save()
      circleCtx.beginPath()
      circleCtx.arc(150, 150, 130, 0, Math.PI * 2, false)
      circleCtx.strokeStyle = '#232946'
      circleCtx.stroke()
      circleCtx.clip()
      circleCtx.fillStyle = '#eebbc3'
      circleCtx.fill()
      circleCtx.restore()
    }

    onMounted(() => {
      drawRoundCorner()
      drawCircle()
    })

    return {
      roundCorner,
      circle
    }
  }
})
</script>
