<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import draggable from "vuedraggable";
import { reactive } from "vue";
import comText from "@/components/work/comText/index.vue";
import { storeToRefs } from "pinia";
import commonStore from "@/store";
defineProps({
  name: "base-widgets",
});

const { comDra } = commonStore();
//使用storeToRefs可以保证解构出来的数据也是响应式的
const { draggableData } = storeToRefs(comDra);
let dataArray = reactive([
  {
    id: 4,
    name: "文本",
    com: comText,
  },
]);
let itemObj = reactive({})
// 获取当前拖动的对象
const cloneComponent = (item) => {
  itemObj = item
  console.log(itemObj);
};
const checkMove = (e) => {
  console.log(e);
};
const onEnd = (e) => {
  console.log(e);
  draggableData.value.push(itemObj)
};
</script>

<template>
  <div class="base-widgets">
    <draggable
      v-model="dataArray"
      item-key="id"
      animation="300"
      :group="{ name: 'container', pull: 'clone', put: false }"
      :sort="false"
      @start="drag = true"
      @end="onEnd"
      :clone="cloneComponent"
      :move="checkMove"
    >
      <template #item="{ element }">
        <div class="draggable_item">
          <div class="name_warrper">
            <span class="left_name">{{ element.name }}</span>
          </div>

          <component :is="comText"></component>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="scss" scoped>
.base-widgets {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  .draggable_item {
    width: 100%;
    height: 120px;
    border: solid 3px #ebeef5;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    background: #fff;
    .name_warrper {
      width: 100%;
      height: 100%;
      position: absolute;

      z-index: 5;
      .left_name {
        display: inline-block;
        margin-left: -2px;
        margin-top: -2px;
        width: auto;
        background-color: #409eff;
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 15px;
        padding: 5px;
        box-sizing: border-box;
      }
    }
  }
  .draggable_item:hover {
    border-color: #409eff;
    cursor: move;
  }
}
</style>
