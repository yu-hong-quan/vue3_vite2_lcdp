/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src")
}
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslintPlugin({
    //   // 配置
    //   cache: false // 禁用 eslint 缓存
    // })
  ],
  resolve: {  // *** 路径配置
    alias,    
    "vue/multi-word-component-names": 0
  }
})
