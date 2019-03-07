import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// import Task from '../src/pages/TaskPage';
import LandingPage from "../src/pages/LandingPage";
import QuoteMachine from "../src/components/QuoteMachine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
