import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">column number one</div>
          <div className="col-6">
            <span className="i fas fa-home" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
