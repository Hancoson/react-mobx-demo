/**
 * @Author: Guoxing.han
 * @Date: 2017-12-07 15:46:16
 * @version 0.0.1
  */
import {observable,action} from 'mobx';

class HomeStore {
  @observable text;

  constructor() {
    this.text = 'Hello Word!'
  }
  @action adb(){
    this.text=123
  }
}
const homeStore = new HomeStore()

export {homeStore}