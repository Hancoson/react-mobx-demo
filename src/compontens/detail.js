/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-08 17:24:52 
 * @version 0.0.1 
  */
import React, { Component } from 'react'
import { Spin } from 'antd';
import { isEmptyObject } from './../utils/objectEmpty'
import {inject, observer} from "mobx-react";

@inject("store") @observer
export default class Detail extends Component {
  constructor(props){
    super(props)
    this._id = props.match.params.id
    this.store = props.store.detailStore
  }
  componentWillMount() {
    const { fetchDetailData, emptyData } = this.store;
    //调取数据
    fetchDetailData(this._id)
    //清空原有的数据
    emptyData()
  }

  createMarkup() {
    var _fonts = this.store.detail.body;
    return { __html: _fonts };
  }

  render() {
    const _o = this.store.detail;

    return (
      <div>
        {
          isEmptyObject(_o) ?
            <div className="loading">
              <Spin size="large" />
            </div> :
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        }
      </div>

    )
  }
}