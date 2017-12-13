/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-08 17:24:32 
 * @version 0.0.1 
  */
import React, { Component } from 'react'

export default class About extends Component {

  render() {

    return (
      <div className="about-warp">
        <section>
          <h1>React-Mobx Zhihu Daily</h1>
          <ul>
            <li>一个React+Mobx版知乎日报 所有API均来自网络（若涉及侵权，请及时联系我删除）</li>
            <li><a href="https://github.com/Hancoson/react-mobx-demo" target="_blank"> Github</a>[https://github.com/Hancoson/react-mobx-demo]</li>
          </ul>
        </section>
        <section>
          <h1>技术实现</h1>
          <ul>
            <li>采用creat-react-app构建生成脚手架</li>
            <li>采用React+mobx+React-router(v4)+antd等实现</li>
          </ul>
        </section>
        <section>
          <h1>运行</h1>
          <ul>
            <li>安装 <code>npm install(yarn)</code></li>
            <li>启动 <code>npm start</code></li>
            <li>构建 <code>npm build</code></li>
          </ul>
        </section>
        <section>
          <h1>目录结构</h1>
          <pre>
            ├─src<br />
            │  ├─assets  //静态资源<br />
            │  │  ├─img<br />
            │  │  └─scss<br />
            │  ├─compontens //组建<br />
            │  ├─config  <br />
            │  ├─routes //路由<br />
            │  ├─store //store<br />
            │  └─utils //工具函数<br />
            └─build //发布目录<br />
          </pre>
        </section>
      </div>
    )
  }
}