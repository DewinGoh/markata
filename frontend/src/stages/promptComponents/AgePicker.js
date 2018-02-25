import React, { Component } from 'react';
import Checkbox from './Checkbox.js';

const agegroups = [
  '15-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65 & over',
];

class AgePicker extends Component {
  constructor(props) {
    super(props);
    this.state={
      ages: [false, false, false, false, false, false]
    };
    this.submitAges = this.submitAges.bind(this);
  }

  toggleCheckbox = idx => {
    const newAge = !this.state.ages[idx];
    this.setState({
      ages: this.state.ages.slice(0, idx).concat([newAge]).concat(this.state.ages.slice(idx+1))
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
      checked = {this.state.ages[idx]}
    />
  )}

  createCheckboxes = () => {
    return agegroups.map(this.createCheckbox);
  } 

  submitAges() {
    this.props.submitAges(this.state.ages);
  }

  render() {
    const checkBoxes = this.createCheckboxes();
    return (
      <div className = 'container'>
        <div className = 'picker-header'>
          <h2>Please select the age group(s):</h2>
        </div>
        <div className = 'row'>
          <div className = 'col-sm-12'>
            <form onSubmit = {this.handleFormSubmit}>
              <div className="checkbox-area">
              {checkBoxes}
              </div>
              <button onClick={this.submitAges}>Next</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AgePicker;