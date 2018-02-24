import React, { Component } from 'react';
import AgePicker from './promptComponents/AgePicker';
import RacePicker from './promptComponents/RacePicker';

class PromptStage extends Component {
  constructor(props) {
    super(props);
    this.state={
      ages: [],
      genders: [],
      races: [],
      days: [],
      curr: 0
    }
  }

  render() {
    return (
      <div>
        ages: {this.state.ages} <br /><br />
      </div>
    );
  }
}


export default PromptStage;