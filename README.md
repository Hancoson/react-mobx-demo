# React-Mobx Zhihu Daily

### [DEMO](https://hancoson.github.io/react-mobx-demo/build/index.html)
### [中文](https://github.com/Hancoson/react-mobx-demo/blob/master/README-zh.md)

If something doesn’t work, please [file an issue](https://github.com/Hancoson/react-mobx-demo/issues).

## Tech used
- [x] React v16
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
 
## 目录结构
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