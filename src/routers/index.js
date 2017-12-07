/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-07 15:11:35 
 * @version 0.0.1 
  */
import React from 'react' // 引入react
import {Route} from 'react-router' // 引入react路由

import App from './../compontens/app'
import Index from './../compontens/home'
import About from './../compontens/about'
import Items from './../containers/items'
import Detail from './../containers/detail'

export default(
  <Route path="/" component={App}>
    <Route path="/" component={Index}/>
    <Route path="about" component={About}/>
    <Route path="items" component={Items}/>
    <Route path="news/:id" component={Detail}/>
  </Route>
)