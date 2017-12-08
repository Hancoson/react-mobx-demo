/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-08 17:24:11 
 * @version 0.0.1 
  */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Router from './../../routers'

import {Menu} from 'antd';

export default class NavBar extends Component {
  constructor(porps) {
    super(porps);

    console.log(this.props)
    this.state = {
      current: this.props.pathname == '/'
        ? '/index'
        : this.props.pathname
    }
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key});
  }

  render() {
    return (
      <Menu
        onClick={this
        .handleClick
        .bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="/index">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/items">
          <Link to="/items">文章</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}