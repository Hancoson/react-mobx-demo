/**
 * @Author: Guoxing.han
 * @Date: 2017-12-07 15:46:16
 * @version 0.0.1
  */
import {extendObservable} from 'mobx';

class HomeStore {

  construtor() {
    extendObservable(this,{
      text: 'Hello Word'
    })
  }
}
const homeStore = new HomeStore()

export {homeStore}