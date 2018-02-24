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
    this.submitAges = this.submitAges.bind(this);
  }

  submitAges(ages) {
    this.setState({
      ages,
      curr: this.state.curr + 1
    });
  }

  submitRaces(races) {
    this.setState({
      races,
      curr: this.state.curr + 1
    });
  }

  render() {
    let stuff;
    switch (this.state.curr) {
      case 0:
        stuff = (
          <div>
            <AgePicker submitAges={this.submitAges} />
          </div>
        );
        break;
      case 1:
        stuff = (
          <div>
            <RacePicker submitRaces={this.submitRaces} />
          </div>
        );
        break;
      default:
          stuff = (<div>BLANK</div>);
    }
    return (
      <div>
        ages: {this.state.ages} <br /><br />
        {stuff}
      </div>
    );
  }
}


export default PromptStage;