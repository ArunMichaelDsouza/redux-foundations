const selectUser = user => {
	return {
		type: 'SELECT_USER',
		payload: user
	}
};

export { selectUser };