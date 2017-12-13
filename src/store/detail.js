/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/12/13
 */
import {observable, action} from 'mobx'
import Config from './../config/config'

class DetailStore {
  @observable detail

  constructor() {
    this.detail = {}
  }

  @action emptyData=()=>{
    this.detail = {}
  }

  @action fetchDetailData = (id) => {
    fetch(Config.YAHOO + Config.NEWS + id + Config.YAHOO_SUFFIX).then(
      action('fetchRes', res => {
        return res.json()
      })).then(
      action('fetchSuccess', data => {
        this.detail = data.query.results.json;
      })).catch(
      action('fetchError', e => {
        console.log(e.message)
      }))
  }

}

const detailStore = new DetailStore()
export {detailStore}
