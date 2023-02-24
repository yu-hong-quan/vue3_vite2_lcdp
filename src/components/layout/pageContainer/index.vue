<!--
 * @Author: XiaoYu
 * @Date: 2023-02-24 16:35:41
-->
<script setup>
defineOptions({
  name: "pageContainer",
});
</script>

<template>
  <div class="pageContainer">
    <div class="editor_box">主体内容</div>
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
    overflow: hidden auto;
    background: #fafafa;
    box-sizing: border-box;
    background-clip: content-box;
    contain: layout;
    box-shadow: 0 0 5px #eee;
  }
}
</style>
