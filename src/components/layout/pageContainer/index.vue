<!--
 * @Author: XiaoYu
 * @Date: 2023-02-24 16:35:41
-->
<script setup>
import { reactive, ref } from "vue";
import draggable from "vuedraggable";
import comText from "@/components/work/comText/index.vue";
// 引入hooks
import moveCopyCom from "@/hooks/index";
import { storeToRefs } from "pinia";
import commonStore from "@/store";
defineOptions({
  name: "pageContainer",
});
const { comDra } = commonStore();
//使用storeToRefs可以保证解构出来的数据也是响应式的
const { draggableData } = storeToRefs(comDra);
let copyArray = reactive(draggableData.value);
console.log(copyArray);
let comIndex = ref(0);

// 点击
const onClick = (val) => {
  comIndex.value = val;
};

// 拖动
const onStart = (e) => {
  console.log(e);
};

// 放下
const onEnd = (e) => {
  console.log(e);
  comIndex.value = e.newDraggableIndex
};

</script>

<template>
  <div class="pageContainer">
    <div class="editor_box">
      <draggable
        v-model="copyArray"
        item-key="id"
        group="container"
        @start="onStart"
        @end="onEnd"
        animation="300"

      >
        <template #item="{ element,index }">
          <div
            :class="comIndex == index ? 'draggable_item clickAcitve' : 'draggable_item'"
            @click="onClick(index)"
          >
            <div class="name_warrper">
              <span class="left_name" :class="comIndex == index ? 'show_name' : ''">{{ element.name }}</span>
            </div>
            <component :is="comText"></component>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pageContainer {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .editor_box {
    width: 375px;
    height: 812px;
    background: #fafafa;
    box-sizing: border-box;
    background-clip: content-box;
    contain: layout;
    box-shadow: 0 0 5px #eee;
    > div {
      width: 100%;
      height: 100%;
      .draggable_item {
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        background: #fff;
        border: solid 3px #fff;
        .name_warrper {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 5;
          .left_name {
            margin-left: -40px;
            margin-top: -2px;
            width: auto;
            background-color: #006eff;
            font-size: 12px;
            color: #fff;
            text-align: center;
            line-height: 15px;
            padding: 5px;
            box-sizing: border-box;
            display: none;
            border-radius: 2px;
          }
          .show_name{
            display: inline-block;
          }
        }
      }
      .draggable_item:hover {
        cursor: move;
      }


      .clickAcitve {
        border: solid 3px #409eff;
        box-sizing: border-box;
        display: flex;
      }
    }
  }
}
</style>
