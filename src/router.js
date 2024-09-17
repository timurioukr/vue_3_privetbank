import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/cabinet',
    name: 'cabinet',
    component: () => import('@/views/Cabinet.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router