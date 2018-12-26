import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import Home from "../home/Home";
import About from "../home/About";
import Users from "../home/Users";
import Topics from "../home/Topics";
import PageNotFound from "../home/PageNotFound";
import Register from "../home/Register";

//Style
import '../../index.css';

const userRole = {
  role: 'admin',
};


// Middleware AdminRoute
function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        userRole.role ==='admin' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {userRole.role == 'admin' &&
            <Fragment>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </Fragment>   
          } 
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <AdminRoute path="/register" component={Register} />
          <AdminRoute path="/users" component={Users} />
          <Route path="/topics" component={Topics} />
          <Route path="*" component={PageNotFound} />
        </Switch>   
      </div>
    </Router>
  );
}


export default BasicExample;