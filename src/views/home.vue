<template>
  <div>
    {{ userStore }}
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

//  修改State   调用actions中的方法
userStore.updateName("李四");
</script>
<style lang="scss" scoped></style>
