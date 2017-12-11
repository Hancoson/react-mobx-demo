/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:25:00
 * @version 0.0.1
  */
import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

@inject("store")@observer
export default class Index extends Component {
  constructor(props) {
    super(props);

    
    console.log(this.props)
  }
  render() {
    const {text} = this.props.store.homeStore
    return (
      <div className='index-warp'>{text}</div>
    )
  }
}
