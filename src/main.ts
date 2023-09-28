import { createApp } from 'vue'
import App from './App.vue'

// 引入清除默认样式文件
import '@/style/reset.scss'
// 引入Element Plus
import ElementPlus from 'element-plus'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入路由
import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})
/* for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
} */
app.mount('#app')
