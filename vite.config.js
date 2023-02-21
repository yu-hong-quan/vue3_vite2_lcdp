/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
 */
import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import eslintPlugin from 'vite-plugin-eslint'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    ElementPlus({
      importStyle: 'sass',
      useSource: true
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        })
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    // eslintPlugin({
    //   // 配置
    //   cache: false // 禁用 eslint 缓存
    // })
  ],
  resolve: {  // *** 路径配置
    alias: {
      '@': pathResolve("src")
    },
    "vue/multi-word-component-names": 0
  },
  css: {
    preprocessorOptions: {
      //define global scss variable
      scss: {
        additionalData: `@import "@/style/common/layout.scss";`
      }
    }
  }
})
