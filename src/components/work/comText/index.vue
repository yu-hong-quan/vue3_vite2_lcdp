<!--
 * @Author: XiaoYu
 * @Date: 2023-02-27 15:38:46
-->
<script setup>
import { reactive } from "vue";
let valObj = reactive({
  //属性集
  value: "预览文本", //显示文字
  fontSize: 16, //字体大小
  color: "#333", //字体颜色
  align: "center", //组件对齐方式
  fontWeight:'bold',//加粗
});
</script>
<template>
  <div>
    <span
      class="com_text"
      :style="{
        'fontSize': valObj.fontSize + 'px',
        'color': valObj.color,
        'fontWeight': valObj.fontWeight,
        'text-align': valObj.align,
      }"
      >{{ valObj.value }}</span
    >
  </div>
</template>
<style lang="scss" scoped>
.com_text{
  display: inline-block;
}
</style>
