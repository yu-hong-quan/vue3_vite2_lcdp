import { defineStore } from "pinia";
const comDraggable = defineStore({
  id: 'comDraggable',
  // 开启数据持久化
  persist: true,
  state: () => {
    return {
      draggableData: []
    }
  },
  actions: {

  },
  mutations: {
    addCom(val) {
      this.draggableData.push(val)
    },
  }
})

export default comDraggable;