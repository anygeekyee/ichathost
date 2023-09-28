import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Dialogue from '@/views/Dialogue/index.vue'
import Robot from '@/views/Robot/index.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/dialogue',
        name: 'dialogue',
        component: Dialogue,
      },
      {
        path: '/robot',
        name: 'robot',
        component: Robot,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
