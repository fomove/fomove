import "babel-polyfill";
import React,{Component}  from  'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './containers/App.jsx';
import '../public/favicon.ico';

import { Provider } from 'react-redux'
import store from './redux/store.js';

ReactDom.render(
    <Provider store = {store}><App /></Provider>,
    document.getElementById('app')
);