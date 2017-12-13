import React from 'react';
import ReactDOM from 'react-dom';
import {useStrict} from 'mobx';
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'mobx-react';
import * as stores from './store';

import App from './components/App'

import './assist/styles/main.css';
import registerServiceWorker from './registerServiceWorker';

useStrict(true) // 不允许在动作之外进行状态修改

ReactDOM.render(
  <Provider store={stores}>
  <Router>
    <App/>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
