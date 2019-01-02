import React, { Component } from 'react';
import {loginJWT} from '../../lib/helper';
import Swal from 'sweetalert2';
import LoginForm from './LoginForm';
import store from '../../reducers/store'; 
import history from '../router/history';


//  const {store} = configureStore();

export default class Login extends Component {
  
  async login(value) {
      await loginJWT(value)
            .then((response) =>{
                
              if(response.type == 'bearer'){
                    let data = {bearer : "Bearer "+response.token};
                    //localStorage.setItem('bearer', JSON.stringify(data));
                    store.dispatch({
                        type: 'LOGIN_JWT',
                        data: data
                    })
                    console.log(response);
                    this.props.history.push('/');
                   //history.push('/about');
              }
              else{
                Swal(
                    'OMG!',
                    'Email atau password yang anda masukkan salah',
                    'warning'
                )
              }
          })
    }

  render() {

      return (
          <div className="login">
              <LoginForm onSubmit={this.login.bind(this)} />
          </div>
      );
  }
  
}