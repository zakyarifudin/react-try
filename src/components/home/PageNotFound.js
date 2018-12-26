import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'

function PageNotFound(){
    return (
        <div>
            <h2>
                Kosong Lur 404 Ra ana ....
            </h2>
            <br />
            <button>
                <Link to="/">Balik Home Boy</Link>
            </button>
        </div>
      )
}

export default PageNotFound;

