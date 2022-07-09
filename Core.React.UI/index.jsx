import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app/reducers/appReducer';
import { appSaga } from './app/sagas/appSaga';
import { AppContainer } from './app/appContainer';

function main() {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(appSaga.bind(this, store.dispatch));

	ReactDom.render(
		<Provider store={store}>
			<AppContainer />
		</Provider>,
		document.getElementById('app')
	);
}

main();