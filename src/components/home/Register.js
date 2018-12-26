import React, { Component } from 'react';
import {postNoAuth} from '../../lib/helper';
import Swal from 'sweetalert2';
import RegisterForm from './RegisterForm'; 

export default class Register extends Component {
  
  async register(value) {
      await postNoAuth('user', value)
            .then((response) =>{
              if(response.status == 'success'){
                  this.props.history.push('/users');
              }
              else{
                  Swal(
                      'OMG!',
                      'Something Wrong!',
                      'warning'
                    )
              }
          })
          .catch((e) => {
              console.log(e)
          });
        }

  render() {

      return (
          <div className="register">
              <RegisterForm onSubmit={this.register.bind(this)} />
          </div>
      );
  }
  
}
