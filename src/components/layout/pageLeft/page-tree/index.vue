<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import { ref, onMounted } from "vue";
import { Plus, MoreFilled,Edit,Delete,Paperclip } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import userStore from "@/store";
defineProps({
  name: "page-tree",
});
const { page } = userStore();
const { addPageItem, updatePageItem, deletePageItem } = page;
//使用storeToRefs可以保证解构出来的数据也是响应式的
const { pageList, pageActivte } = storeToRefs(page);

onMounted(() => {
  addPageItem([
    {
      title: "首页",
      page: "/pages/home/index",
      pageActivte: "首页",
    },
    {
      title: "商品列表页",
      page: "/pages/shopping/index",
      pageActivte: "商品列表页",
    },
  ]);
  console.log(pageList);
});

const hadlHighlightCheck = (val) => {
  console.log(pageActivte.value);
  if (val != pageActivte.value) {
    pageActivte.value = val;
  }
};
</script>

<template>
  <div class="page-tree">
    <el-button type="primary" :icon="Plus" size="large" class="add_btn"
      >添加页面</el-button
    >
    <div class="list_wapper">
      <template v-for="(item, index) in pageList" :key="index">
        <div
          class="list_item"
          :style="{ background: pageActivte == item.title ? '#ECF5FF' : '#fff' }"
          @click="hadlHighlightCheck(item.title)"
        >
          <div class="item_left">
            <span class="title">{{ item.title }}</span>
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="item.page"
              placement="right"
            >
              <span class="page">({{ item.page }})</span>
            </el-tooltip>
          </div>
          <el-dropdown  trigger="click">
            <el-icon :size="14" color="#606266"><component :is="MoreFilled" /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Edit">编辑</el-dropdown-item>
                <el-dropdown-item :icon="Delete">删除</el-dropdown-item>
                <el-dropdown-item :icon="Paperclip">设为首页</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.page-tree {
  width: 100%;
  height: 100%;
  .add_btn {
    margin: 10px 0 0 10px;
  }
  .list_wapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .list_item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px;
      box-sizing: border-box;
      .item_left {
        width: 235px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #606266;
        white-space: nowrap;
        .page {
          width: 150px;
          margin-left: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .item_right {
        display: flex;
        font-size: 15px;
      }
    }
    .list_item:hover {
      background: #ecf5ff;
      cursor: pointer;
    }
  }
}
</style>
