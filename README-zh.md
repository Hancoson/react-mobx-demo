# React-Mobx Zhihu Daily
[![GitHub package version](https://img.shields.io/github/package-json/v/Hancoson/react-mobx-demo.svg)](https://github.com/Hancoson/react-mobx-demo)
[![GitHub license](https://img.shields.io/github/license/Hancoson/react-mobx-demo.svg)](https://github.com/Hancoson/react-mobx-demo/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/Hancoson/react-mobx-demo/master.svg)](https://travis-ci.org/Hancoson/react-mobx-demo)

### [DEMO](https://hancoson.github.io/react-mobx-demo/build/index.html)

### [Redux实现](https://github.com/Hancoson/react-redux-demo)
### [英文](https://github.com/Hancoson/react-mobx-demo/blob/master/README.md):uk:
> 一个React+Mobx版知乎日报 所有API均来自网络（若涉及侵权，请及时联系我删除）
> _你觉得好就给个 Star 或者 Watch 吧，不要 Fork.

## 技术栈
- [x] React v15
- [x] Mobx v2.5
- [x] Mobx-react
- [x] React-router v4
- [x] mobx-react-router v4
- [x] antd v2
- [x] react-scripts
- [x] [create-react-app](https://github.com/facebookincubator/create-react-app)
- ……
 
## 如何使用
- 安装 `npm install(yarn)`
- 启动 `npm start`
- 构建 `npm run build`
 
## 目录结构
```$xslt
├─config   //构建配置
├─src
│  ├─assets  //静态资源
│  │  ├─img
│  │  └─styles
│  ├─compontens //组建
│  ├─config //配置文件
│  ├─routes //路由
│  ├─store //store
│  └─utils //工具函数
└─build //发布目录
```

## API
本应用调用了开源的「知乎日报 API」，具体可参考官方文档，[传送门>>](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)


## 数据获取
- 采用Yahoo跨域访问代理
```$xslt
YAHOO:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22',
YAHOO_SUFFIX:'%22&format=json'
```

## 如何使用 Mobx（Decorators）

> 我使用了`create-react-app`脚手架创建应用。

你可以添加 `transform-decorators-legacy` 到你的 `node_modules/react-scripts/config/babel.dev.js` 和 `babel.prod.js`,代码如下:

- 添加下面的代码到 `presets`:

```
require.resolve('babel-preset-stage-1'),
require.resolve('babel-preset-es2015')
```
- 添加下面的代码到 `plugins` 的第一行:
```
require.resolve('babel-plugin-transform-decorators-legacy'),
```