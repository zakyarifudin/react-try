import React, { Component } from 'react';
import Header from './components/layouts/Header';
import BasicRoute from './components/router/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicRoute />
      </div>
    );
  }
}

export default App;
