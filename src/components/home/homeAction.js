import store from '../../reducers/store'; 
import axios from 'axios';


const getProvinces = () => {

    axios.get('http://posapi.staging.co.id/api/province', {
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            }
        })
        .then((response) => {
            console.log(response)
            
            store.dispatch({
                type: 'GET_PROVINCES',
                data: response.data
            })
            
        })
}

const getCities = (selectedProvince) => {
    console.log(selectedProvince);
    axios.get('http://posapi.staging.co.id/api/province/'+selectedProvince.value, {
        headers : {
            'Content-Type'  : 'application/json',
            'Accept'        : 'application/json',
        }
    })
    .then((response) => {
        console.log(response)
        store.dispatch({
            type: 'GET_CITIES',
            data: response.data
        })
        
    })
}


export {getProvinces, getCities};