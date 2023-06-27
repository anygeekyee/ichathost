import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    // host: "localhost",//ip地址例如192.168.1.177
    host: true,
    open: true,
    proxy: {
      '/dev-api': {
        target: "https://xxxx.com/",
        changeOrigin: true, //设置访问目标地址允许跨域
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      },
    }
  },
  resolve: {
    alias: {
      //别名配置
      "~": path.resolve(__dirname, "./"), //配置的别名
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue(),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src'],
      // 组件的有效文件扩展名。
      extensions: ['vue'],
      // 搜索子目录
      deep: true,
      // ui库解析器，也可以自定义
      // resolvers: [VantResolver()],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    })
  ],
})
