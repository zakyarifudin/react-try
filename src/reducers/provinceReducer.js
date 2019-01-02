const placeReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_PROVINCES' :
			return state = action.data;

		default:
			return state;
	}
}

export default placeReducer;