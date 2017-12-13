/**
 * @Author: Guoxing.han
 * @Date: 2017-12-07 15:46:16
 * @version 0.0.1
 */
import {observable, action} from 'mobx';

class HomeStore {
  @observable text;
  @observable num;

  constructor() {
    this.num = 0
    this.text = 'Hello Word!'
  }

  @action plus = () => {
    this.num = ++this.num
  }
  @action minus = () => {
    this.num = --this.num
  }
}

const homeStore = new HomeStore()

export {homeStore}