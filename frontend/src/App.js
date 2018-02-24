import React, { Component } from 'react';
import request from 'request';

// import logo from './logo.svg';
import logo from './package.png';
import './App.css';

import PromptStage from './stages/PromptStage';
import ItineraryStage from './stages/ItineraryStage';

const serverpath = 'http://www.google.com';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false
    };
    this.queryServer = this.queryServer.bind(this);
    this.fakeQueryServer = this.fakeQueryServer.bind(this);
  }

  queryServer(data) {
    request.post({
      url: serverpath,
      formData: data
    }, (err, res, body) => {
      if (err) console.log('error: ' + err);
      console.log(body);
      this.setState({
        map: true
      });
    })
  }

  fakeQueryServer() {
    this.setState({
      map: true
    });
  }

  render() {
    const mainContent = this.state.map ? (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Appbar">Your Markata Itinerary</h1>
        <ItineraryStage />
      </div>
    ) : (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Markata: Make Flyers Great Again</h1>
        <div className="content">
        <PromptStage query={this.fakeQueryServer} />
        </div>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          {mainContent}
        </header>
      </div>
    );
  }
}

export default App;
