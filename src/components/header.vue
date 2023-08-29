<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import LogoImgIcon from '../icons/logo-img.vue'
  const { path } = useRoute()
  const { push } = useRouter()
  const goEditor = () => {
    if (path.includes('/editor')) return
    push({ path: '/editor' })
  }
</script>

<template>
  <header class="header-wrapper">
    <div class="flex items-center" @click="goEditor">
      <LogoImgIcon />
      <h1 class="text-xl ml-2 font-bold">低代码demo</h1>
    </div>
    <slot></slot>
  </header>
</template>

<style lang="scss">
  .header-wrapper {
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 0 12px;
    width: 100%;
    height: var(--editor-header-height);
    box-sizing: border-box;
  }
</style>
