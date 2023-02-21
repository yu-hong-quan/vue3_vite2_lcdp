<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>

</script>

<template>
  <!-- 放置路由容器 -->
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
