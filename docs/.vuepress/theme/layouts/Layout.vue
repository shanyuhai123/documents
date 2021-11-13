<template>
  <Layout>
    <template #navbar-after>
      <a class="icon-button" href="https://github.com/shanyuhai123/documents" target="_blank" aria-label="View GitHub Repo">
        <Icon :icon="icons.githubIcon" width="18" />
      </a>
    </template>
  </Layout>
</template>

<script lang="ts">
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { Icon } from '@iconify/vue'
import githubIcon from '@iconify-icons/brandico/github'

export default {
  components: {
    Layout,
    Icon
  },
  data() {
    return {
      icons: {
        githubIcon
      }
    }
  }
}
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  margin: 1px -0.8rem 0 1rem;
  padding: 0 6px;
  color: var(--c-text);
}
</style>

