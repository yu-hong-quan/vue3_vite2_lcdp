<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:41:10
-->
<template>
  <div class="home">
    <!-- 顶部菜单栏 -->
    <pageHead />
    <div class="home_bottom">
      <!-- 左侧边栏 -->
      <pageLeft />
      <!-- 主体内容 -->
      <pageContainer />
      <!-- 右侧边栏 -->
      <pageRight />
    </div>
  </div>
</template>

<script setup>
import pageHead from "@/components/layout/pageHead/index.vue";
import pageLeft from "@/components/layout/pageLeft/index.vue";
import pageContainer from "@/components/layout/pageContainer/index.vue";
import pageRight from "@/components/layout/pageRight/index.vue";
defineOptions({
  name: "pageHome",
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: $home_bgColor;
  overflow-y: hidden;
  .home_bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
