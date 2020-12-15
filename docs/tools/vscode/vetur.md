---
title: Vetur
---

## 修改模板

### typescript.vue

其相对位置为 `server/dist/veturSnippets/script/typescript.vue`，个人更倾向于使用 `defineComponent` 方法。
```vue
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
\t${0}
})
</script>
```