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

// const {store} = configureStore()

//User detail harusnya dari API tapi disini kita coba manual
localStorage.setItem('userDetail', JSON.stringify({role:'admin'}));

//const bearer = JSON.parse(localStorage.getItem('bearer'));
const userDetail = JSON.parse(localStorage.getItem('userDetail'));

const handleLogout = (props) => {
  localStorage.removeItem("bearer");
  store.dispatch({
    type: 'LOGIN_JWT',
    data: []
  })
  //this.props.history.push('/login');
}


function BasicRoute(props) {
  
  return (
    <Router>
      <div>
        <ul>
        {
          props.loginReducer.bearer!=='' ? 
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

        <Switch>
          <IsLoginRoute exact path="/" component={Home} />
          <IsLoginRoute path="/about" component={About} />
          <IsNotLoginRoute path="/login" component={Login} />
          <IsNotLoginRoute path="/register" component={Register} />
          <IsLoginRoute path="/users" component={Users} />
          <IsLoginRoute path="/topics" component={Topics} />
          <Route path="*" component={PageNotFound} />
        </Switch>   
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    loginReducer: state.loginReducer,
  }
}


export default connect(mapStateToProps)(BasicRoute);