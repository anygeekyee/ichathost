<<<<<<< HEAD
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
=======
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
>>>>>>> 59a142cbc9ccb5507d66fb88d8826d9299a65ce9

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
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
>>>>>>> 59a142cbc9ccb5507d66fb88d8826d9299a65ce9
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
<<<<<<< HEAD
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
=======
})
>>>>>>> 59a142cbc9ccb5507d66fb88d8826d9299a65ce9
