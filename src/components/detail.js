/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-08 17:24:52 
 * @version 0.0.1 
  */
import React, { Component } from 'react'
import { Spin } from 'antd';
import { isEmptyObject } from './../utils/objectEmpty'

export default class Detail extends Component {
  componentWillMount() {
    const { fetchDetailData, emptyData } = this.props;
    //调取数据
    fetchDetailData(this.props.params.id)
    //清空原有的数据
    emptyData()
  }

  createMarkup() {
    var _fonts = this.props.detail.body;
    return { __html: _fonts };
  }

  render() {
    const _o = this.props.detail;

    console.log(isEmptyObject({}))
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