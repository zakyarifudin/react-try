import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';

//const bearer = JSON.parse(localStorage.getItem('bearer'));

// Middleware AdminRoute
function IsNotLoginRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>      
          props.loginReducer === undefined ? (
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

const mapStateToProps = state => {
    return {
      loginReducer: state.loginReducer,
    }
  }

export default connect(mapStateToProps)(IsNotLoginRoute);