/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 16:38:03
 */
import { Tickets, Edit, Suitcase, Notebook, DataAnalysis } from "@element-plus/icons-vue";
import PageTree from '@/components/layout/pageLeft/page-tree/index.vue'
import DataSource from '@/components/layout/pageLeft/data-source/index.vue'
import CustomComponent from '@/components/layout/pageLeft/custom-component/index.vue'
import ContainerComponent from '@/components/layout/pageLeft/container-component/index.vue'
import BaseWidgets from '@/components/layout/pageLeft/base-widgets/index.vue'
export const tabs = () => {
  return [
    {
      name: '页面',
      label: '页面',
      icon: Tickets,
      comp: PageTree
    }, {
      name: '基础组件',
      label: '基础组件',
      icon: Edit,
      comp: BaseWidgets
    }, {
      name: '容器组件',
      label: '容器组件',
      icon: Suitcase,
      comp: ContainerComponent
    }, {
      name: '业务组件',
      label: '业务组件',
      icon: Notebook,
      comp: CustomComponent
    }, {
      name: '数据源',
      label: '数据源',
      icon: DataAnalysis,
      comp: DataSource
    }
  ]
}