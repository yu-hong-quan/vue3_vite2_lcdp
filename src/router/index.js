/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:39:03
 */
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import("@/views/home.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(), //哈希值模式
    routes,
});

// 暴露出去
export default router;