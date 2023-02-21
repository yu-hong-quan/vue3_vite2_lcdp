<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import { tabs } from "@/utils/leftTabs";
import { ref,onMounted } from "vue";
defineProps({
  name: "pageLeft",
});
const tabsData = tabs();
const activeName = ref(tabsData[0].name);
let scrollbarHeight = ref(0)
onMounted(()=>{
  scrollbarHeight.value = document.documentElement.clientHeight * 0.934 + "px"
  window.onresize = () => {
    if (scrollbarHeight) scrollbarHeight.value = document.documentElement.clientHeight * 0.934 + "px"
  };
}) 
</script>

<template>
  <el-tabs v-model="activeName" tab-position="left" class="left-aside">
    <template v-for="tabItem in tabsData" :key="tabItem.name">
      <el-tab-pane :name="tabItem.name" lazy>
        <template #label>
          <div class="tab-item">
            <el-icon :size="26"><component :is="tabItem.icon" /></el-icon>
            <span>{{ tabItem.label }}</span>
          </div>
        </template>
        <el-scrollbar :height="scrollbarHeight">
          <component :is="tabItem.comp" />
        </el-scrollbar>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<style lang="scss" scoped>
.left-aside {
  width: 380px;
  padding-top: 80px;
  height: 100%;
  contain: layout;
  box-sizing: border-box;
  background: $left_bgColor;
  box-shadow: 0 0 5px #afafaf;
  > :deep(.el-tabs__header) {
    margin-right: 0;

    .el-tabs__item {
      height: 80px;
      padding: 20px 16px;

      .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        [class^="el-icon-"] {
          font-size: 20px;
        }
      }
    }
  }

  > :deep(.el-tabs__content) {
    height: 100%;
  }

}
</style>
