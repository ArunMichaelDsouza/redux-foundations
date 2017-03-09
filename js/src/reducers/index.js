import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import moviesReducer from './moviesReducer';

const allReducers = combineReducers({
	users: usersReducer,
	movies: moviesReducer
});

export default allReducers;