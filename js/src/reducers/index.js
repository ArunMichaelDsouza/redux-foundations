import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import moviesReducer from './moviesReducer';

const allReducers = combineReducers({
	user: usersReducer,
	movies: moviesReducer
});

export default allReducers;