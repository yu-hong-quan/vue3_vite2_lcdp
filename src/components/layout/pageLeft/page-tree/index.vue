<!--
 * @Author: XiaoYu
 * @Date: 2023-02-21 10:09:22
-->
<script setup>
import { ref, reactive, onMounted } from "vue";
import { Plus, MoreFilled, Edit, Delete, Paperclip } from "@element-plus/icons-vue";
import ComDialog from "@/components/work/comDialog/index.vue";
import { storeToRefs } from "pinia";
import commonStore from "@/store";
defineProps({
  name: "page-tree",
});
const { page } = commonStore();
const { addPageItem, updatePageItem, deletePageItem } = page;
//使用storeToRefs可以保证解构出来的数据也是响应式的
const { pageList, pageActivte } = storeToRefs(page);
let type = ref("add");
let formObj = reactive({
  title: "",
  page: "",
});
const ruleFormRef = ref();

onMounted(() => {});

let dialogData = reactive({
  visible: false,
  title: "页面",
  width: "25%",
  fullscreen: false,
  modal: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  showClose: false,
  center: false,
  appendToBody: true,
  message: "",
  closeText: "取消",
  confirmText: "确认",
  handleClose: () => {
    dialogData.visible = false;
  },
  handelConfirm: () => {
    submitForm(ruleFormRef);
  },
});

const rules = reactive({
  title: [{ required: true, message: "请输入页面标题", trigger: "blur" }],
  page: [{ required: true, message: "请输入页面地址", trigger: "blur" }],
});

const hadlHighlightCheck = (val) => {
  let { title } = pageList.value[val];
  if (title != pageActivte.value) {
    pageActivte.value = title;
  }
};

const addPage = () => {
  resetFrom();
  type.value = "add";
  console.log(type.value);
  dialogData.visible = true;
};

const editPage = () => {
  type.value = "edit";
  for (let i = 0; i < pageList.value.length; i++) {
    let item = pageList.value[i];
    if (item.title == pageActivte.value) {
      formObj.title = item.title;
      formObj.page = item.page;
    }
  }
  dialogData.visible = true;
};

const deletePage = () => {
  deletePageItem(pageActivte.value);
  ElMessage({
    showClose: true,
    type: "success",
    duration: 2000,
    message: "删除成功",
  });
};

const setHome = () => {
  ElMessage({
    showClose: true,
    type: "success",
    duration: 2000,
    message: "设置成功",
  });
};

const resetFrom = () => {
  formObj = reactive({ title: "", page: "" });
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.value.validate((valid, fields) => {
    if (valid) {
      if (type.value === "add") {
        addPageItem(formObj);
        pageActivte.value = formObj.title;
        ElMessage({
          showClose: true,
          type: "success",
          duration: 2000,
          message: "添加成功",
        });
      } else {
        updatePageItem(formObj);
        ElMessage({
          showClose: true,
          type: "success",
          duration: 2000,
          message: "修改成功",
        });
      }
      dialogData.visible = false;
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="page-tree">
    <el-button type="primary" :icon="Plus" size="large" class="add_btn" @click="addPage()"
      >添加页面</el-button
    >
    <div class="list_wapper">
      <template v-for="(item, index) in pageList" :key="index">
        <div
          class="list_item"
          :style="{ background: pageActivte == item.title ? '#ECF5FF' : '#fff' }"
          @click="hadlHighlightCheck(index)"
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
          <el-dropdown trigger="click" align-center="center">
            <el-icon :size="14" color="#606266"><component :is="MoreFilled" /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Edit" @click="editPage()">编辑</el-dropdown-item>
                <el-dropdown-item :icon="Delete" @click="deletePage()"
                  >删除
                </el-dropdown-item>

                <el-dropdown-item :icon="Paperclip" @click="setHome()"
                  >设为首页</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </div>
    <ComDialog :dialogData="dialogData" :type="type">
      <!-- 具名插槽，v-solt可以使用#代替 -->
      <template #page-from>
        <el-form
          :model="formObj"
          :rules="rules"
          ref="ruleFormRef"
          label-position="right"
          label-width="100px"
          style="max-width: 360px"
        >
          <el-form-item label="页面标题：" prop="title">
            <el-input v-model="formObj.title" clearable />
          </el-form-item>
          <el-form-item label="页面路径：" prop="page">
            <el-input v-model="formObj.page" clearable />
          </el-form-item>
        </el-form>
      </template>
    </ComDialog>
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
