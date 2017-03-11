import React, { Component } from 'react';
import UserList from '../containers/userListContainer';
import UserDetails from '../components/UserDetails.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<h1>User List</h1>
				<UserList />
				<UserDetails />
			</div>
		);
	}
};

export default App;