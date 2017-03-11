import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import users from './initUsers';

const initialState = { users: { all: [], selected: null } };

const store = createStore(
	allReducers,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'INIT_STORE', payload: users })

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('app'));