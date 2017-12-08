import React from 'react';
import ReactDOM from 'react-dom';
import {useStrict} from 'mobx';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'mobx-react';
import * as stores from './store';

import App from './components/App'

import './assist/styles/main.css';
import registerServiceWorker from './registerServiceWorker';

useStrict(true)
console.log(stores)
ReactDOM.render(
  <Provider store={stores}>
  <Router basename="/">
    <App/>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
