import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  layouts: {
    Layout,
  },
})
