import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],

        }
    }
    
    componentDidMount(){
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




    render (){
        const users = this.state.users;

        return (
            <div> 
                <table align="center">
                    <thead>
                        <th>No</th>
                        <th>Email</th>
                        <th>Username</th>
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
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }  
}

export default Users;