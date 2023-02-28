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
      pageActivte: '首页'
    }
  },
  actions: {
    addPageItem(val) {
      console.log(val);
      this.pageList.push(val)
    },
    updatePageItem(val) {
      this.pageList.forEach(item => {
        if (item.title == val.title) {
          item.title = val.title
          item.page = val.page
        }
      });
    },
    deletePageItem(val) {
      let newArr = []
      for (let i = 0; i < this.pageList.length; i++) {
        const item = this.pageList[i];
        if (item.title != val) {
          newArr.push(item)
        }
      }
      this.pageList = newArr;
    }
  },
  mutations: {

  }
})

export default usePageStore;