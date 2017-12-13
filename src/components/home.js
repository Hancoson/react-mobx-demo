/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:25:00
 * @version 0.0.1
 */
import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

@inject("store") @observer
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.store = props.store.homeStore
    this.plus = this.store.plus
    this.minus = this.store.minus
  }

  render() {
    const {text,num} = this.store
    return (
      <div>
        <div className='index-warp'><span>{text}</span></div>
        <div style={{textAlign: 'center'}}>
          <span style={{background: '#666', color: '#fff', padding: '5px'}} onClick={this.minusHandle.bind(this)}>-</span>
          <span>{num}</span>
          <span style={{background: '#666', color: '#fff', padding: '5px'}} onClick={this.plusHandle.bind(this)}>+</span>
        </div>
      </div>
    )
  }

  plusHandle() {
    this.plus()
  }
  minusHandle() {
    this.minus()
  }

}
