import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

const { REACT_APP_BASE_URL } = process.env;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter basename={REACT_APP_BASE_URL}>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>

	// </React.StrictMode>
);
