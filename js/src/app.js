import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('app'));