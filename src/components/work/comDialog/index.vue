<!--
 * @Author: XiaoYu
 * @Date: 2023-02-23 10:02:16
-->
<script setup>
import { ref, reactive } from "vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";

// 接收来自父组件的数据
let props = defineProps({
  dialogData: { type: Object },
  type: "add",
});
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogData.visible"
      :width="dialogData.width"
      :fullscreen="dialogData.fullscreen"
      :modal="dialogData.modal"
      :close-on-click-modal="dialogData.closeOnClickModal"
      :close-on-press-escape="dialogData.closeOnPressEscape"
      :show-close="dialogData.showClose"
      :center="dialogData.center"
      :append-to-body="dialogData.appendToBody"
    >
      <template #title="{}">
        <div class="com-dialog-header">
          <h3 class="dialog-header-title">
            {{ props.type == "edit" ? "编辑" : "新增" }}{{ dialogData.title }}
          </h3>
          <el-button type="danger" @click="dialogData.handleClose()">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </div>
      </template>

      <div>
        <span v-if="dialogData.message != ''">{{ dialogData.message }}</span>
        <!-- 具名插槽 -->
        <slot name="page-from" v-else></slot>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogData.handleClose()">{{
            dialogData.closeText
          }}</el-button>
          <el-button type="primary" @click="dialogData.handelConfirm()">{{
            dialogData.confirmText
          }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.el-dialog__header {
  margin-right: 0 !important;
}
.com-dialog-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dialog-header-title {
  font-size: 18px;
}
</style>
