/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:26:17
 * @version 0.0.1
  */
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Index from './../components/home'
import About from './../components/about'
import Items from './../components/itemsList'
import Detail from './../components/detail'

export default(
  <Switch>
    <Route path="/" component={Index}/>
    <Route path="about" component={About}/>
    <Route path="items" component={Items}/>
    <Route path="news/:id" component={Detail}/>
    <Route render={() => <h1 className={styles.noMatch}>找不到此页面</h1>}/>
  </Switch>
)