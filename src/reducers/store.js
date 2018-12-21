import { createStore, combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'

// login
import userReducer from './userReducer';

let kumpulanReducer = combineReducers({
	userReducer : userReducer,

});

let store = createStore(kumpulanReducer);

export default store;
