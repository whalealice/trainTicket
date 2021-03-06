import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'normalize.css/normalize.css'
import './index.css';

import * as serviceWorker from './serviceWorker';
import Store from './store'
import Router from './router'


// 添加响应拦截
axios.interceptors.response.use(
  response => {
    // 直接返回response.data
    return response.data;
  },
)

function App() {
  return (
    <Provider store={Store}>
      <Router/>
   </Provider>
    
  );
}
export default ReactDOM.render(<App />,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
