import React, { Component } from 'react';
import AgePicker from './promptComponents/AgePicker';
import GenderPicker from './promptComponents/GenderPicker';
import RacePicker from './promptComponents/RacePicker';

class PromptStage extends Component {
  constructor(props) {
    super(props);
    this.state={
      ages: [],
      genders: [],
      races: [],
      days: [],
      curr: 1
    }
    this.submitAges = this.submitAges.bind(this);
    this.submitGenders = this.submitGenders.bind(this);
    this.submitRaces = this.submitRaces.bind(this);
  }

  submitAges(ages) {
    this.setState({
      ages,
      curr: this.state.curr + 1
    });
  }

  submitGenders(genders) {
    this.setState({
      genders,
      curr: this.state.curr + 1
    });
  }

  submitRaces(races) {
    this.setState({
      races,
      curr: this.state.curr + 1
    });
  }

  submitDays(days) {
    this.setState({
      days
    }, () => {
      this.props.query();
    })
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
            <GenderPicker submitGenders={this.submitGenders} />
          </div>
        );
        break;
      case 2:
        stuff = (
          <div>
            <RacePicker submitRaces={this.submitRaces} />
          </div>
        );
        break;
      default:
          stuff = (<div onClick={this.props.query} >BLANK ERROR</div>);
    }
    return (
      <div>
        ages: {JSON.stringify(this.state)} <br /><br />
        {stuff}
      </div>
    );
  }
}

export default PromptStage;