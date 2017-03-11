import React from 'react';

const UserList = props => {
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
};

export default UserList;