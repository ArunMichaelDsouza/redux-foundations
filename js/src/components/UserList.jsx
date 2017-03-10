import React, { Component } from 'react';

class UserList extends Component {
	render() {
		const { props } = this;

		return (
			<ul>
				{
					props.users.map((user) => {
						return (
							<li onClick={props.selectUser.bind(null, user)} key={user.id}>{user.id}</li>
						);
					})
				}
			</ul>
		);
	}
}

export default UserList;