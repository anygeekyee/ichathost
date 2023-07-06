import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import WorkBench from '@/views/WorkBench/index.vue'
import AnalysisPage from '@/views/Visualization/AnalysisPage/index.vue'
import MultidimensionalPage from '@/views/Visualization/MultidimensionalPage/index.vue'
import Dialogue from '@/views/List/Dialogue/index.vue'
import Robot from '@/views/List/Robot/index.vue'
import Group from '@/views/Form/Group/index.vue'
import Distribution from '@/views/Form/Distribution/index.vue'
import Detail from '@/views/Detail/index.vue'
import ResultSuccess from '@/views/Result/ResultSuccess/index.vue'
import ResultError from '@/views/Result/ResultError/index.vue'
import Abnormal from '@/views/Abnormal/index.vue'
import UserInfo from '@/views/User/UserInfo/index.vue'
import UserSetting from '@/views/User/UserSetting/index.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: 'workbench',
    component: Layout,
    children: [
      { path: '/workbench', name: 'workbench', component: WorkBench },
      {
        path: '/visualization',
        children: [
          {
            path: '/visualization/AnalysisPage',
            name: 'AnalysisPage',
            component: AnalysisPage,
          },
          {
            path: '/visualization/MultidimensionalPage',
            name: 'MultidimensionalPage',
            component: MultidimensionalPage,
          },
        ],
      },
      {
        path: '/list',
        children: [
          {
            path: '/list/dialogue',
            name: 'list-dialogue',
            component: Dialogue,
          },
          {
            path: '/list/robot',
            name: 'list-robot',
            component: Robot,
          },
        ],
      },
      {
        path: '/form',
        children: [
          {
            path: '/form/distribution',
            name: 'distribution-form',
            component: Distribution,
          },
          {
            path: '/form/group',
            name: 'form-group',
            component: Group,
          },
        ],
      },
      {
        path: '/detail',
        component: Detail,
      },
      {
        path: '/result',
        children: [
          {
            path: '/result/success',
            name: 'result-success',
            component: ResultSuccess,
          },
          {
            path: '/result/error',
            name: 'result-error',
            component: ResultError,
          },
        ],
      },
      {
        path: '/abnormal',
        component: Abnormal,
      },
      {
        path: '/user',
        children: [
          {
            path: '/user/info',
            name: 'user-info',
            component: UserInfo,
          },
          {
            path: '/user/setting',
            name: 'user-setting',
            component: UserSetting,
          },
        ],
      },
    ],
  },
  { path: '/login', name: 'login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
