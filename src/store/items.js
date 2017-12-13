/**
 * @Author: Guoxing.han
 * @Date: 2017-12-11 16:48:57
 * @version 0.0.1
 */
import {observable, action, computed} from 'mobx';

import Config from './../config/config'

class ItemsStore {
  @observable items;
  @observable dataTime;

  constructor() {
    this.items = []
    this.dataTime = ''
  }

  @computed get total() {
    return this.items.length;
  }


  @action
  fetchData = (time) => {
    fetch(Config.YAHOO + Config.API + time + Config.YAHOO_SUFFIX).then(

      action('fetchRes', res => {
        return res.json()
      })).then(

      action('fetchSuccess', data => {
        this.items = data.query.results.json.stories;
        this.dataTime = data.query.results.json.date;

      })).catch(

      action('fetchError', e => {
        console.log(e.message)
      }))
  }

  @action
  emptyData = () => {
    this.items = []
  }
}

const itemsStore = new ItemsStore()

export {itemsStore}