import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import style from '../src/index.css'

ReactDOM.render(
    (
    <BrowserRouter>
    <div>
        <App/>
    </div>
</BrowserRouter>
    ), document.getElementById('root'))
serviceWorker.register();
