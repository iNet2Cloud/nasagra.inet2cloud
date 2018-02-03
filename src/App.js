import React, { Component } from 'react';
import logo from './iNet2Cloud.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Nasagra - Yoga for Education and Success!</h2>
        </div>
        <p className="App-intro">
          Building Education Market Place only for Competitive Exams...
        </p>
      </div>
    );
  }
}

export default App;
