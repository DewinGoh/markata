import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PromptStage from './stages/PromptStage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Markata</h1>
        </header>
        <PromptStage />
      </div>
    );
  }
}

export default App;
