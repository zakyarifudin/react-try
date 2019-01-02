import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import {connect} from 'react-redux';
import store from '../../reducers/store';
import history from './history';

//Component
import Home from "../home/Home";
import About from "../home/About";
import Users from "../home/Users";
import Topics from "../home/Topics";
import PageNotFound from "../home/PageNotFound";
import Register from "../home/Register";
import Login from "../home/Login";

//Style
import '../../index.css';

//Middleware Route
import AdminRoute from './middleware/AdminRoute';
import GuestRoute from './middleware/GuestRoute';
import IsNotLoginRoute from './middleware/IsNotLogin';
import IsLoginRoute from './middleware/IsLogin';


//User detail harusnya dari API tapi disini kita coba manual
localStorage.setItem('userDetail', JSON.stringify({role:'admin'}));

const bearer = JSON.parse(localStorage.getItem('bearer'));
const userDetail = JSON.parse(localStorage.getItem('userDetail'));

const handleLogout = (props) => {
  localStorage.removeItem("bearer");
  store.dispatch({
    type: 'LOGIN_JWT',
    data: []
  })
  //this.props.history.push('/login');
}


import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>{
          props.loginReducer!==undefined ? 
          <Fragment>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {userDetail.role == 'admin' &&
              <Fragment>
                
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </Fragment>   
            }
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <button className="btn"onClick={handleLogout.bind(this)}>Logout</button>
            </li>
          </Fragment> 
          :
          <Fragment>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </Fragment>
          
        } 
          
        </ul>

        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginReducer: state.loginReducer,
    bearer : state.bearer
  }
}


export default connect(mapStateToProps)(BasicRoute);