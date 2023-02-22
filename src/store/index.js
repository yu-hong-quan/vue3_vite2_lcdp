/*
 * @Author: XiaoYu
 * @Date: 2023-02-21 11:35:06
 */
import pageStore from "./modules/pageStore";

export default function userStore(){
  return {
    page:pageStore(),
  }
}