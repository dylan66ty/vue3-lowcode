<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { Delete, Edit, Position } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  import { linkTo } from '@/utils/helper'
  import { pageSave } from '@/utils/page-save'
  import Header from '@/components/header.vue'

  const list = ref<any>([])

  const { back } = useRouter()

  const handleItem = (type: 'editor' | 'preview', key: any) => {
    linkTo(`http://${location.host}/vue3-lowcode/#/${type}?saveId=${key}`)
  }

  const handleCancel = async (key: any) => {
    pageSave.delete(key)
    initData()
  }

  const hasRecord = computed(() => Object.keys(list.value).length > 0)
  const getItemTitle = (item: any) => {
    return item?.container?.title
  }

  const initData = async () => {
    list.value = pageSave.getAll()
  }

  initData()
</script>

<template>
  <Header />
  <div v-if="hasRecord" class="flex flex-wrap p-8 pb-0 box-border gap-8">
    <div v-for="(item, key, index) in list" :key="key" class="relative border">
      <div class="p-4" style="width: 270px; height: 270px">
        <el-skeleton :rows="5" animated />
      </div>
      <div class="p-4 pt-0">
        <el-button type="primary" size="small" :icon="Edit" @click="handleItem('editor', key)">编辑</el-button>
        <el-button type="success" size="small" :icon="Position" @click="handleItem('preview', key)">预览</el-button>
        <el-button type="danger" size="small" :icon="Delete" @click="handleCancel(key)">删除</el-button>
      </div>
      <div class="absolute right-2 top-2 text-sm text-gray-500">{{ getItemTitle(item) }}</div>
      <div class="absolute top-0 left-0 w-5 h-5 text-sm text-white bg-blue-500 text-center">{{ index + 1 }}</div>
    </div>
  </div>
  <el-empty v-else description="暂无历史记录">
    <el-button type="primary" @click="back">返回</el-button>
  </el-empty>
</template>
