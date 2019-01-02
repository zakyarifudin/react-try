const userReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_USERS' :
			return state = action.data;

		default:
			return state;
	}
}

export default userReducer;