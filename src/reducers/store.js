import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import rootReducer from './kumpulanReducers';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	blacklist: ['form', 'placeReducer', 'loginReducer'],
// 	stateReconciler : hardSet
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
// 	let store = createStore(persistedReducer)
// 	let persistor = persistStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 	return { store, persistor }
//   }

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
