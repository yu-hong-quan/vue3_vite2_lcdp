<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:41:10
-->
<template>
  <div class="home">
    <!-- 顶部菜单栏 -->
    <pageHead/>
    <!-- 左侧边栏 -->
    <pageLeft/>
  </div>
</template>

<script setup>
import pageHead from '@/components/layout/pageHead/index.vue'
import pageLeft from '@/components/layout/pageLeft/index.vue'
defineOptions({
  name: "pageHome",
});
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: $home_bgColor;
}
</style>
