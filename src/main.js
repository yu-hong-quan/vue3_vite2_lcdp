/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
 */
import { createApp } from "vue";
import App from "./App.vue";
// 引入状态管理器
import store from './store';
// 引入路由
import router from './router'
// 引入公共样式重置
import '@/style/common/reset.scss'

// 引入加载进度条插件 Nprogress js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


router.beforeEach((to,from,next) => {
  NProgress.start() 
  next()
})

router.afterEach(() => {
  NProgress.done()
})
createApp(App).use(store).use(router).mount("#app");
