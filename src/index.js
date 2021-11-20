import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './scss/main.scss'
import { Provider } from 'react-redux'
import {store} from "./js/redux/store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
