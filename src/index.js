import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import './index.css';
import Router from './Router';
const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));

