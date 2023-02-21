/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入状态管理器
import store from './store';
// 引入路由
import router from './router'

createApp(App).use(store).use(router).mount("#app");
