import React, { Component } from 'react';
import Checkbox from './Checkbox.js';

const racegroups = [
'Chinese','Eurasian','Malay','Indian',
];

class RacePicker extends Component {
  constructor(props) {
    super(props);
    this.state={
      races: [false, false, false, false]
    };
    this.submitRaces = this.submitRaces.bind(this);
  }

  toggleCheckbox = idx => {
    const newRace = !this.state.races[idx];
    this.setState({
      races: this.state.races.slice(0, idx).concat([newRace]).concat(this.state.races.slice(idx+1))
    });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = (label, idx) => {
    return (
    <Checkbox
      label = {label}
      handleCheckboxChange = {() => this.toggleCheckbox(idx) }
      key = {label}
      checked = {this.state.races[idx]}
    />
  )}

  createCheckboxes = () => {
    return racegroups.map(this.createCheckbox);
  } 

  submitRaces() {
    console.log(this.state.races);
    this.props.submitRaces(this.state.races);
  }

  render() {
    const checkBoxes = this.createCheckboxes();
    return (
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-sm-12'>

            <form onSubmit = {this.handleFormSubmit}>
              {checkBoxes}
              <button onClick={this.submitRaces}>Next</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RacePicker;