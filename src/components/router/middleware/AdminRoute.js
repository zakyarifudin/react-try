import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import React from "react";

const userDetail = JSON.parse(localStorage.getItem('userDetail'));

// Middleware AdminRoute
function AdminRoute({ component: Component, ...rest }) {
    
    //console.log(userDetail);
    return (
      <Route
        {...rest}
        
        render={props =>
            
          userDetail.role ==='admin' ? (
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

export default AdminRoute;