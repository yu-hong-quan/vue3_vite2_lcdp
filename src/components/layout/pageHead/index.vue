<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import { reactive, ref } from "vue";
import { VideoPlay } from "@element-plus/icons-vue";
import { useTools } from "@/utils/headerTools";
defineProps({
  name: "pageHead",
});
const tools = useTools();
const runPreview = () => {
  // sessionStorage.setItem(localKey, JSON.stringify(jsonData));
  // localStorage.setItem(localKey, JSON.stringify(jsonData));
  // isShowH5Preview.value = true;
};
</script>

<template>
  <div class="header_warrper">
    <!-- <img src="/vite.svg" class="logo" alt="Vite logo" /> -->
    <el-row  type="flex">
      <el-col :span="6" class="left-tools flex items-center">
        <div class="logo"></div>
        <h3 class="font-semibold">Vue3低代码平台</h3>
      </el-col>
      <el-col :span="12" class="flex items-center center-tools">
        <template v-for="(toolItem, index) in tools" :key="index">
          <div
            class="tool-item"
            @click="toolItem.onClick"
          >
            <el-icon>
              <component :is="toolItem.icon" />
            </el-icon>
            <div class="title">{{ toolItem.title }}</div>
          </div>
        </template>
      </el-col>
      <el-col :span="6" class="right-tools flex flex-row-reverse items-center">
        <a
          href="https://github.com/15017872695/vue3_vite2_lcdp"
          target="_blank"
          style="margin-top: 6px; margin-right: 20px"
        >
          <el-tooltip class="item" effect="dark" content="仓库" placement="bottom">
            <svg
              width="39"
              height="39"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </el-tooltip>
        </a>
        <el-tooltip class="item" effect="dark" content="运行" placement="bottom">
          <el-button
            type="primary"
            :icon="VideoPlay"
            size="large"
            circle
            class="flex-shrink-0 !p-6px"
            @click="runPreview"
          />
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.header_warrper {
  width: 100%;
  height: $header_height;
  background: $header_bgColor;
  flex-shrink: 0;
  box-sizing: border-box;
  box-shadow: 0 0 7px #afafaf;
  padding: 5px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 100;
  .el-row {
    margin: 0 !important;
    .items-center {
      display: flex;
      align-items: center;
      .tool-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .el-icon{
          font-size: 20px;
        }
        .title{
          font-size: 14px;
        }
      }
    }
    .center-tools{
      justify-content: space-around;
    }
  }
  .left-tools{
    padding-left: 32px;
    box-sizing: border-box;
    .logo {
    width: 70px;
    height: 70px;
    background-image: url("@/assets/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .font-semibold {
    font-size: 20px;
    margin-left: 10px;
  }
  }
  

  .tool-item {
    .title {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .el-button {
    font-size: 22px;
  }
  .right-tools{
    justify-content: flex-end;
    padding-right: 32px;
    box-sizing: border-box;
  }

  .right-tools > * {
    margin-left: 8px;
  }
}
</style>
