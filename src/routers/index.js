/**
 * @Author: Guoxing.han
 * @Date: 2017-12-08 17:26:17
 * @version 0.0.1
  */
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Index from './../compontens/home'
import About from './../compontens/about'
import Items from './../compontens/itemsList'
import Detail from './../compontens/detail'

const Main = () => (
  <Switch>
    <Route exact path="/" render={(props) => (<Index {...props}/>)}/>
    <Route path="/about" component={About}/>
    <Route path="/items" render={(props) => (<Items {...props}/>)}/>
    <Route exact path="/news/:id" render={(props) => (<Detail {...props}/>)}/>
    <Route render={() => <h1>找不到此页面</h1>}/>
  </Switch>
)

export default Main;