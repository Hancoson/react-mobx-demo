/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, { Component } from 'react'

import NavBar from './common/navBar'
import Footer from './common/footer'

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <NavBar pathname={this.props.location.pathname} />
        <section className="main">
          {this.props.children}
        </section>
        <Footer />
      </div>
    )
  }
}