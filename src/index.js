import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes'  
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'mobx-react';

import * as stores from './store';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...stores}>
  <BrowserRouter history={history} routes={routes}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
