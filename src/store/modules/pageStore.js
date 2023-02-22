/*
 * @Author: XiaoYu
 * @Date: 2023-02-22 09:48:04
 */
import { defineStore } from "pinia";

const usePageStore = defineStore({
  id: 'usePageStore',
  // 开启数据持久化
  persist: true,
  state: () => {
    return {
      pageList: [],
      pageActivte:'首页'
    }
  },
  actions: {
    async addPageItem(old){
      console.log(old);
      this.pageList = old
    },
    async updatePageItem(val){
      this.pageList = val
    },
    async deletePageItem(val){
      this.pageList = val
    }
  },
  mutations: {

  }
})

export default usePageStore;