/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 15:19:44
 */
import { Upload, Download, Cellphone, DocumentCopy, RefreshLeft, RefreshRight, Delete, Position, ChatLineSquare } from "@element-plus/icons-vue";
export const useTools = () => {
  return [
    {
      title: '导入JSON',
      icon: Upload,
      onClick: () => {

      },
    },
    {
      title: '导出JSON',
      icon: Download,
      onClick: () => {

      },
    },
    {
      title: '真机预览',
      icon: Cellphone,
      onClick: () => {

      },
    },
    {
      title: '复制页面',
      icon: DocumentCopy,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 2000,
          message: '敬请期待！',
        });
      },
    },
    {
      title: '撤销',
      icon: RefreshLeft,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 2000,
          message: '敬请期待！',
        });
      },
    },
    {
      title: '重做',
      icon: RefreshRight,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 2000,
          message: '敬请期待！',
        });
      },
    },
    {
      title: '清空页面',
      icon: Delete,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 2000,
          message: '敬请期待！',
        });
      },
    },
    {
      title: '预览',
      icon: Position,
      onClick: () => {
        // localStorage.setItem(localKey, JSON.stringify(jsonData));
        // window.open(location.href.replace('/#/', '/preview/#/'));
      },
    },
    {
      title: '反馈',
      icon: ChatLineSquare,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 2000,
          message: '敬请期待！',
        });
      },
    },
  ];
}