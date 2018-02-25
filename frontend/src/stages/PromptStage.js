import React, { Component } from 'react';
import AgePicker from './promptComponents/AgePicker';
import GenderPicker from './promptComponents/GenderPicker';
import RacePicker from './promptComponents/RacePicker';
import DayPicker from './promptComponents/DayPicker';

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

  submitDays = (days) => {
    this.setState({
      days,
      curr: this.state.curr + 1
    }, () => {
      this.props.query(this.state);
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
      case 3:
        stuff = (
          <div>
            <DayPicker submitDays={this.submitDays} />
          </div>
        );
        break;
      default:
          console.log(this.state);
          stuff = (<div onClick={this.props.query} >Hold on, we're loading your results!</div>);
    }
    return (
      <div>
        {/* data: {JSON.stringify(this.state)} <br /><br /> */}
        {stuff}
      </div>
    );
  }
}

export default PromptStage;