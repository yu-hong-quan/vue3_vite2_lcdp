<!--
 * @Author: XiaoYu
 * @Date: 2023-02-24 16:35:41
-->
<script setup>
import { ref, onMounted } from "vue";
defineOptions({
  name: "pageRight",
});
// 获取浏览器窗口的可视区域的高度
const getViewPortHeight = () => {
  return document.documentElement.clientHeight || document.body.clientHeight;
};
const height = ref(0);
onMounted(() => {
  height.value = (getViewPortHeight() - 80) + 'px'
  // window.onresize = () => {
  //   height.value = getViewPortHeight();
  // };
});
</script>

<template>
  <div class="page_right" :style="{ height }">右侧属性栏</div>
</template>

<style lang="scss" scoped>
.page_right {
  min-width: 390px;
  height: 100%;
  background: #fff;
  contain: layout;
  margin-top: 80px;
}
</style>
