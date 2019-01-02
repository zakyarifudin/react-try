import React, { Component } from 'react';
import {postNoAuth} from '../../lib/helper';
import Swal from 'sweetalert2';
import RegisterForm from './RegisterForm'; 

export default class Register extends Component {
  
  async register(value) {
      await postNoAuth('user', value)
            .then((response) =>{
                console.log(response);
              if(response.status == 'success'){
                  this.props.history.push('/users');
              }
              else{
                let error='';
                {response.map((res,index) =>
                    error += res.message + "<br>"
                    )}
                Swal(
                    'OMG!',
                    error,
                    'warning'
                )
              }
          })
    }

  render() {

      return (
          <div className="register">
              <RegisterForm onSubmit={this.register.bind(this)} />
          </div>
      );
  }
  
}
