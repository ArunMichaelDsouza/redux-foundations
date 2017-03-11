import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const users = [
	{
		id: 11,
		name: 'Arun'
	}, {
		id: 12,
		name: 'Karun'
	},
	{
		id: 13,
		name: 'Varun'
	},
	{
		id: 14,
		name: 'Tarun'
	}
];

store.dispatch({ type: 'INIT_STORE', payload: users })

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('app'));