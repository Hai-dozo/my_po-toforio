import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SinglePage from './SinglePage';
import Client from './Client';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<SinglePage />, document.getElementById('single-page'))
ReactDOM.render(<Client />, document.getElementById('client'))
// ReactDOM.render(<MenuNew />, document.getElementById('menu-new'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
