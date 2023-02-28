<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import draggable from "vuedraggable";
import { reactive } from "vue";
defineProps({
  name: "custom-component",
});
let dataArray = reactive([
  {
    id: 1,
    name: "图片",
  },
  {
    id: 2,
    name: "轮播图",
  },
  {
    id: 3,
    name: "优惠券滑块",
  },
]);
</script>

<template>
  <div class="custom-component">
    <draggable
      v-model="dataArray"
      item-key="id"
      group="people"
      @start="drag = true"
      @end="drag = false"
      animation="300"
    >
      <template #item="{ element }">
        <div class="draggable_item">
          <div class="name_warrper">
            <span class="left_name">{{ element.name }}</span>
          </div>

          <van-button type="primary"></van-button>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="scss" scoped>
.custom-component {
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
