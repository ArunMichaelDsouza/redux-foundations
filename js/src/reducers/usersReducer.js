const userReducer = (state=[], action) => {
	switch(action.type) {
		case 'INIT_STORE':
			return state = action.payload;
		default:
			return state;
	}
};

export default userReducer;