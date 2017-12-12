/**
 * @Author: Guoxing.han
 * @Date: 2017-12-11 16:48:57
 * @version 0.0.1
 */
import {observable, action} from 'mobx';

import Config from './../config/config'

class ItemsStore {
  @observable items;

  constructor(){
    this.items = []
  }


  @action
  getList() {

    fetch(Config.LAST).then(res => {
      return res.json()
    }).then(data => {
      data = data.query.results.json;
      this.items = data;
      console.log(data)
    }).catch(e => {
      console.log(e.message)
    })
  }

  @action
  emptyData() {
    this.items = []
  }
}

const itemsStore = new ItemsStore()

export {itemsStore}