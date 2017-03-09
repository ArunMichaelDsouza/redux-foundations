import React, { Component } from 'react';

class UserList extends Component {
	render() {
		const { props } = this;

		return (
			<ul>
				{
					props.users.map((user) => {
						return (
							<li key={user.id}>{user.id}</li>
						);
					})
				}
			</ul>
		);
	}
}

export default UserList;