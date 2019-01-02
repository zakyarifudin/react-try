import store from '../../reducers/store'; 
import {getNoAuth} from '../../lib/helper';

//const {store} = configureStore();

const getUsers = () => {

    getNoAuth('user')
        .then((response) => {
            console.log(response)
            if(response.status == 'success'){
                store.dispatch({
                    type: 'GET_USERS',
                    data: response.result
                })
            }
        })
}


export {getUsers};