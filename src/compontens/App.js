/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:24:43
 * @version 0.0.1
 */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import DevTools from 'mobx-react-devtools';

import Main from './../routers';

import Header from './common/header'
import Footer from './common/footer'

@withRouter @inject('store') @observer
class App extends Component {

  render() {
    console.log(this)
    return (
      <div className="main">
        <Header {...this.props.location}/>

        <Main/>

        <Footer/>
        <DevTools/>
      </div>
    )
  }
}

export default App