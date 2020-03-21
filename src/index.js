import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Menu from './Menu';
import Menu_copy from './Menu_copy';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Menu_copy />, document.getElementById('menu-copy'));

// ReactDOM.render(<MenuNew />, document.getElementById('menu-new'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
