import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import CreateSagaMiddleware from 'redux-saga';
import appReducer from './app/reducers/appReducer';
import { appSaga } from './app/sagas/appSaga';
import { HashRouter } from 'react-router-dom';
import App from './app/app';

const sagaMiddleware = CreateSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
const { dispatch } = store;

sagaMiddleware.run(appSaga.bind(this, dispatch));

ReactDom.render(
	<Provider store={store}>
		<HashRouter>
			<App dispatch={dispatch} />
		</HashRouter>
	</Provider>,
	document.getElementById('app')
);
