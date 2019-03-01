import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Task from '../src/pages/TaskPage';
import LandingPage from "../src/pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
      </div>
    );
  }
}

export default App;
