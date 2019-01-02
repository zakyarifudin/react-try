import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';



// Middleware AdminRoute
function IsLoginRoute({ component: Component, ...rest}) {
    return (
      <Route
        {...rest}
        render={props=>
          props.loginReducer === undefined ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
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

export default connect(mapStateToProps)(IsLoginRoute);