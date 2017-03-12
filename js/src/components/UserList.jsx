import React from 'react';

const UserList = props => {
	return (
		<div>
			<h2>Users List</h2>
			<ul>
				{
					props.users.map((user) => {
						return (
							<li onClick={props.selectUser.bind(null, user)} key={user.id}>{user.id}</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default UserList;