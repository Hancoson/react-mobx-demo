/**
 * @Author: Guoxing.han
 * @Date: 2017-12-11 16:48:57
 * @version 0.0.1
 */
import {observable, action, computed} from 'mobx';

import Config from './../config/config'

class ItemsStore {
  @observable items;

  constructor() {
    this.items = []
  }

  @computed get total() {
    return this.items.length;
  }


  @action
  fetchData = (time) => {

    fetch(Config.YAHOO + Config.API + time + Config.YAHOO_SUFFIX).then(res => {
      return res.json()
    }).then(data => {
      this.items = data.query.results.json.stories;
      console.log(data)
    }).catch(e => {
      console.log(e.message)
    })
  }

  @action
  emptyData = () => {
    this.items = []
  }
}

const itemsStore = new ItemsStore()

export {itemsStore}