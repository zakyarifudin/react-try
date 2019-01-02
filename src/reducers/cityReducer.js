const cityReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_CITIES' :
			return state = action.data;

		default:
			return state;
	}
}

export default cityReducer;