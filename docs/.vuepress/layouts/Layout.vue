<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { Icon } from '@iconify/vue'
import GithubIcon from '@iconify-icons/brandico/github'
</script>

<template>
  <ParentLayout>
    <template #navbar-after>
      <a class="icon-button" href="https://github.com/shanyuhai123/documents" target="_blank" aria-label="View GitHub Repo">
        <Icon :icon="GithubIcon" width="18" />
      </a>
    </template>
  </ParentLayout>
</template>

<style lang="scss" scoped>
.icon-button {
  display: flex;
  align-items: center;
  margin: 0 -0.8rem 0 0.6rem;
  padding: 0 6px;
  color: var(--c-text);
}
</style>
