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
    this.store = props.store
  }

  disabledDate(current) {
    // can not select days before today and today
    return current && current.valueOf() > Date.now();
  }

  handleClick(value, dateString) {
    const {fetchData, emptyData} = this.props.store.itemsStore;
    emptyData()
    fetchData(timeClear(dateString));
  }

  componentWillMount() {
    const {emptyData} = this.props.store.itemsStore;

    //清空原有的数据
    emptyData()
  }

  render() {
    const {items, emptyData, total} = this.props.store.itemsStore
    const list = items

    console.log(list)
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
                    <sub>{subString(list.date)}</sub>
                  </Link>
                </Col>)}
              </Row>
              : <div className="loading">
                <Spin size="large"/>
              </div>
            }

          </div>
          {/*<ItemsList list={items}/>*/}
        </div>
      </div>

    )
  }

  componentDidMount() {
    const {fetchData} = this.props.store.itemsStore;
    //默认调取数据
    fetchData(getDate())
  }
}