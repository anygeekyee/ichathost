/**
 * 参数外可配置的参数:
 * meta: {
 *  title: 可选
 *  sort：title不能为空，菜单排序
 *  roles: 可选，数组
 *  hideInMenu: 可选， 设置true，不会显示在菜单中
 *  noCache: 可选，设置true，不会缓存页面
 * }
 */

import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/home/index')
  },
  {
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "error-page" */ '@/views/error-page/404')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    redirect: '/404'
  }
]

/**
 * 私有路由表
 */
export const privateRoutes = [
  // 数据看板
  dashboard,
  // 教学上报
  teachingReport,
  // 作业进度管理
  homeworkProcess,
  // 教育局端作业进度管理
  adminHomeworkCenter,
  // 优秀作业中心
  homeworkCenter,
  // 作业方案公示
  homeworkPublicity,
  // 一教一辅公示
  teachingPublicity,
  // 优秀作业管理
  excellentHomework,
  // 家长反馈中心
  parentFeedback,
  // 基础设置
  basicManagement,
  // 学校基础管理
  basicSchoolManagement,
  // 学校管理
  schoolManagement,
  // 教师端的
  teacherHomeworkCenter
]

const routerOption = {
  history: createWebHashHistory(),
  routes: [...publicRoutes]
}

const router = createRouter(routerOption)

// 角色菜单
// 1：教育局端-作业监管员
// 2：学校-作业管理员
// 3: 教师
export const menusList = {
  1: ['dashboard', 'adminHomeworkCenter', 'homeworkPub', 'teachingPub', 'excellentHomework', 'schoolManagement', 'parentFeedback', 'basicMana'],
  2: ['teachingReport', 'homeworkProcess', 'homeworkCenter', 'basicSchoolManagement'],
  3: ['teacherHomeworkCenter']
}

// 重置路由
export const resetRouter = () => {
  const { menus } = useRouterStore()
  menus.forEach(menu => {
    router.removeRoute(menu)
  })
}

export default router
