/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:36:18
 */
import { defineStore } from 'pinia'

 export const useUserStore = defineStore({
   id: 'user', // id必填，且需要唯一
   state: () => {
     return {
       name: '张三'
     }
   },
   actions: {
     updateName(name) {
       this.name = name
     }
   }
 })