import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';
import {getUsers} from './userAction';
import {connect} from 'react-redux';
import {postNoAuth, putNoAuth, destroyNoAuth, getNoAuth} from '../../lib/helper'; 

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser : {},
            editUser : {},
        };
        this.handleSubmit      = this.handleSubmit.bind(this);
        this.handleInputNew    = this.handleInputNew.bind(this);
        this.handleInputEdit   = this.handleInputEdit.bind(this);
    }
    
    updateUser(id, e){
        e.preventDefault();

        console.log(id);

        putNoAuth('user/'+id, this.state.editUser)
            .then((response) =>{
                if(response.status == 'success'){
                    getUsers();
                    this.setState({
                        editUser:{
                            id:'',
                            email:'',
                            username:''
                        }
                    })
                    $('#exampleModal').modal('toggle')
                    //console.log(this.state.editUser)
                    Swal(
                        'Yeah!',
                        'User has been updated.',
                        'success'
                      )
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

    componentDidMount(){
        getUsers();
    }

    handleSubmit(e){
        e.preventDefault();

        postNoAuth('user', this.state.newUser)
            .then((response) =>{
                if(response.status == 'success'){
                    getUsers();
                    this.setState({
                        newUser:{
                            email:'',
                            username:'',
                            password:''   
                        }
                    })

                    Swal(
                        'Yeah',
                        'User has been added.',
                        'success'
                      )
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

    handleInputNew(e){
       const name   = e.target.name;
       const value  = e.target.value;

       this.setState({
           newUser :{
               ...this.state.newUser,
               [name] : value
           }
       })
    }

    handleInputEdit(e){
        const name   = e.target.name;
        const value  = e.target.value;
 
        this.setState({
            editUser :{
                ...this.state.editUser,
                [name] : value
            }
        })
     }

    handleEditButton(id){
        
        getNoAuth('user/'+ id)
            .then((response) =>{
                console.log(response);
                this.setState({editUser : response.result})
                //console.log(this.state.editUser)
            })
            .catch((e) => {
                console.log(e)
            });

        $('#exampleModal').modal('toggle')

    }
    

    handleDeleteButton(id){
        this.id = id;
        
        Swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                destroyNoAuth('user/'+this.id)
                    .then((response) =>{
                       // console.log(response)
                        if(response.status == 'success'){
                           // console.log('iso');
                            getUsers();
                        }
                        Swal(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                          )
                    })
                    .catch((e) => {
                        console.log(e)
                    });
            }
        })
    }



    render (){

        return (
            <div className="up">
                <div className="newUser">
                    <form onSubmit={this.handleSubmit} className="form-control">
                        <label>
                            Email :
                            <input type="email" name="email" value={this.state.newUser.email} onChange={this.handleInputNew} required /> 
                        </label>
                        <br />
                        <label>
                            Username :
                            <input type="text" name="username" value={this.state.newUser.username} onChange={this.handleInputNew} required /> 
                        </label>
                        <br />
                        <label>
                            Password :
                            <input type="password" name="password" value={this.state.newUser.password} onChange={this.handleInputNew} required /> 
                        </label>
                        <br />
                        <input type="submit" className="btn btn-primary" value="Add" />
                    </form>
                </div>

                <div className="inputan" style={{ marginTop:'100px' }}>
                    <br />
                        Email : {this.state.newUser.email} <br />
                        Username : {this.state.newUser.username} <br />
                    <br />
                </div>

                <div className="table"> 
                    <table align="center">
                        <thead>
                            <th>No</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {this.props.users.map((user,index) =>
                                <tr key={user.id}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={this.handleEditButton.bind(this, user.id)}> Edit </button>
                                        <button type="button" className="btn btn-danger" onClick={this.handleDeleteButton.bind(this, user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.updateUser.bind(this, this.state.editUser.id)}>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Email:</label>
                                        <input type="email" name="email" value={this.state.editUser.email} onChange={this.handleInputEdit} required />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Username:</label>
                                        <input type="text" name="username" value={this.state.editUser.username} onChange={this.handleInputEdit} required />
                                    </div>
                                
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <input type="submit" className="btn btn-primary" value="Save Change"  />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }  
}

const mapStateToProps = state => {
    // console.log(state);
    return {users: state.userReducer}
}

export default connect(mapStateToProps)(Users);