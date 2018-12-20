import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            newUser : {},
            editUser : {},
        };
        this.handleSubmit      = this.handleSubmit.bind(this);
        this.handleInputNew    = this.handleInputNew.bind(this);
        this.getUsers          = this.getUsers.bind(this);
        //this.handleToggle      = this.handleToggle.bind(this);
    }
    
    getUsers(){
        axios
            .get('http://127.0.0.1:3333/api/user')
            .then((response) =>{
                this.setState({users : response.data.result})
                console.log(this.state.users)
            })
            .catch((e) => {
                console.log(e)
            });
    }

    componentDidMount(){
        this.getUsers();
    }

    handleSubmit(e){
        e.preventDefault();

        axios
            .post('http://127.0.0.1:3333/api/user', this.state.newUser)
            .then((response) =>{
                if(response.data.status == 'success'){
                    this.getUsers();
                    this.setState({
                        newUser:{
                            email:'',
                            username:'',
                            password:''   
                        }
                    })
                    console.log(this.state.newUser)
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
            newUser :{
                ...this.state.editUser,
                [name] : value
            }
        })
     }

    handleEditButton(id){
        this.id = id;

        $('#exampleModal').modal('toggle')

        axios
            .get('http://127.0.0.1:3333/api/user/'+ this.id)
            .then((response) =>{
                this.setState({editUser : response.data.result})
                console.log(this.state.user)
            })
            .catch((e) => {
                console.log(e)
            });

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
                axios
                    .delete('http://127.0.0.1:3333/api/user/'+this.id)
                    .then((response) =>{
                       // console.log(response)
                        if(response.data.status == 'success'){
                           // console.log('iso');
                            this.getUsers();
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
        const users = this.state.users;

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

                <div className="inputan">
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
                            {users.map((user,index) =>
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
                                <form>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Email:</label>
                                        <input type="username" name="username" value={this.state.editUser.email} onChange={this.handleInputEdit} required />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Username:</label>
                                        <input type="username" name="username" value={this.state.editUser.username} onChange={this.handleInputEdit} required />
                                    </div>
                                
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save Change</button>
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

export default Users;