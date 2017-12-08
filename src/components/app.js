/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:24:43
 * @version 0.0.1
  */
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import DevTools from 'mobx-react-devtools';


import NavBar from './common/navBar'
import Footer from './common/footer'

class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    console.log(this)
    return (
      <div className="main">
        <NavBar/>
        <section className="main">
          1213{this.props.children}
        </section>
        <Footer/>
        <DevTools/>
      </div>
    )
  }
}

export default inject("store")(observer(App))