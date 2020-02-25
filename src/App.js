import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/nav-bar/nav-bar";
import LuckyModule from "./components/lucky/lucky";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title=" Find Lucky Number" />
        <LuckyModule />
      </div>
    );
  }
};

export default App;
