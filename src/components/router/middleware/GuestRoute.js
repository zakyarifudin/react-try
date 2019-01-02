import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import React from "react";

const userDetail = JSON.parse(localStorage.getItem('userDetail'));

function GuestRoute({ component: Component, ...rest }) {
    return (
      <Route 
        {...rest}
        render={props =>
          userDetail.role ==='guest' || userDetail.role ==='admin' ? (
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

export default GuestRoute;