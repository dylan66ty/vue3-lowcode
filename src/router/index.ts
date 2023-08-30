import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/editor'
  },
  {
    path: '/editor',
    name: 'Editor',
    meta: {
      title: '低代码demo'
    },
    component: () => import('@/views/editor')
  },
  {
    path: '/preview',
    name: 'Preview',
    meta: {
      title: '预览'
    },
    component: () => import('@/views/preview/index.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {
      title: '历史记录'
    },
    component: () => import('@/views/record/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta.title as string
})

export default router
