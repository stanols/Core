import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app/reducers/appReducer';
import { appSaga } from './app/sagas/appSaga';
import { AppContainer } from './app/appContainer';

function main() {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer: appReducer,
		middleware: () => [ sagaMiddleware ]
	});

	sagaMiddleware.run(appSaga.bind(this, store.dispatch));

	const container = document.getElementById('app');
	const root = createRoot(container);

	root.render(
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}

main();