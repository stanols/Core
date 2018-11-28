import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import CreateSagaMiddleware from 'redux-saga';
import appReducer from './app/reducers/appReducer';
import { appSaga } from './app/sagas/appSaga';
import App from './app/app';


const sagaMiddleware = CreateSagaMiddleware();
var reducer = appReducer(); 
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(appSaga);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
