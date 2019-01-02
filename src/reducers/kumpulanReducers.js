import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form'
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import provinceReducer from './provinceReducer';
import cityReducer from './cityReducer';


let rootReducer = combineReducers({
    loginReducer,
    userReducer,
    provinceReducer,
    cityReducer,
    form
})

//let rootReducer = createStore(kumpulanReducers);

export default rootReducer
   
