/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:25:21
 * @version 0.0.1
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {inject, observer} from "mobx-react";

import {Row, Col, Spin, Button, DatePicker} from 'antd';
import {getDate, subString, timeClear} from './../utils/getDate'

@inject("store") @observer
export default class Items extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.store = props.store.itemsStore
  }

  disabledDate(current) {
    return current && current.valueOf() > Date.now();
  }

  handleClick(value, dateString) {
    const {fetchData, emptyData} = this.store;
    emptyData()
    fetchData(timeClear(dateString));
  }

  componentWillMount() {
    const {emptyData} = this.store;

    //清空原有的数据
    emptyData()
  }

  render() {
    const {items, dataTime, emptyData, total} = this.store
    const list = items

    return (
      <div className='items-warp'>
        <div className='bar clearfix'>
          <DatePicker
            disabledDate={this.disabledDate}
            onChange={this
              .handleClick
              .bind(this)}/>
          <Button className='fr' onClick={() => emptyData()}>清除数据</Button>
        </div>
        <div className="main">
          <div className="gutter-example">
            {total > 0
              ? <Row gutter={16}>
                {list.map((e, index) => <Col className="gutter-row" span={6} key={index}>
                  <Link className="item" to={'news/' + e.id}>
                    <img src={e.images} role="presentation"/>
                    <p>{e.title}</p>
                    <sub>{subString(dataTime)}</sub>
                  </Link>
                </Col>)}
              </Row>
              : <div className="loading">
                <Spin size="large"/>
              </div>
            }

          </div>
        </div>
      </div>

    )
  }
}