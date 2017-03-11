import React, { Component } from 'react';
import UserList from '../containers/userListContainer';

class App extends Component {
	render() {
		return (
			<div>
				<h1>User List</h1>
				<UserList />
			</div>
		);
	}
};

export default App;