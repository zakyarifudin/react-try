const loginReducer = (state = {bearer : ''} , action) => {
	switch (action.type) {
		case 'LOGIN_JWT' :
			return state = action.data;

		default:
			return state;
	}
}

export default loginReducer;