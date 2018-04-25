# React-Mobx Zhihu Daily
[![GitHub package version](https://img.shields.io/github/package-json/v/Hancoson/react-mobx-demo.svg)](https://github.com/Hancoson/react-mobx-demo)
[![GitHub license](https://img.shields.io/github/license/Hancoson/react-mobx-demo.svg)](https://github.com/Hancoson/react-mobx-demo/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/Hancoson/react-mobx-demo/master.svg)](https://travis-ci.org/Hancoson/react-mobx-demo)
[![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg)](https://github.com/Hancoson/react-mobx-demo)

### [DEMO](https://hancoson.github.io/react-mobx-demo/build/index.html)

### [Redux come true](https://github.com/Hancoson/react-redux-demo)
### [中文](https://github.com/Hancoson/react-mobx-demo/blob/master/README-zh.md):cn:

If something doesn’t work, please [file an issue](https://github.com/Hancoson/react-mobx-demo/issues).

## Tech used
- [x] React v15
- [x] Mobx v2.5
- [x] Mobx-react
- [x] React-router v4
- [x] mobx-react-router v4
- [x] antd v2
- [x] react-scripts
- [x] [create-react-app](https://github.com/facebookincubator/create-react-app)
- ……
 
## How to run
- Install: `npm install(yarn)`
- Run: `npm start` Then open [http://localhost:3000](http://localhost:3000/) to see the app.
- Build: `npm run build`
 
## Tree
```$xslt
├─config
├─src
│  ├─assets
│  │  ├─img
│  │  └─styles
│  ├─compontens
│  ├─config
│  ├─routes
│  ├─store
│  └─utils
└─build
```

## API
This app ues the [ZhiHu Daily API], [go to see the API](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90).

## Get data
- Use the Yahoo service cross-domain
```$xslt
YAHOO:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22',
YAHOO_SUFFIX:'%22&format=json'
```

## How to use Mobx（Decorators）

> I use the `creat-react-app` to creat my app.

You can add the `transform-decorators-legacy` yourself in `node_modules/react-scripts/config/babel.dev.js` and `babel.prod.js`,like this:

- add this code into `presets`:

```
require.resolve('babel-preset-stage-1'),
require.resolve('babel-preset-es2015')
```
- add this code into `plugins` first line:
```
require.resolve('babel-plugin-transform-decorators-legacy'),
```
