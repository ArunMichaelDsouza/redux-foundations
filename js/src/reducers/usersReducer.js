const userReducer = (state={}, action) => {
	switch(action.type) {
		case 'INIT_STORE':			
			return { ...state, 'all': action.payload };
		case 'SELECT_USER':
			return { ...state, 'selected': action.payload };
		default:
			return state;
	}
};

export default userReducer;