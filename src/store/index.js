/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:35:06
 */
import pageStore from "./modules/pageStore";
import comDraggable from "./modules/comDraggable";
export default function commonStore(){
  return {
    page:pageStore(),
    comDra:comDraggable()
  }
}