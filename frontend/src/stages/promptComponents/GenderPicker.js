import React, { Component } from 'react';
import Checkbox from './Checkbox.js';

const gendergroups = [
  'Male',
  'Female',
  'Any',
];

class GenderPicker extends Component {
  constructor(props) {
    super(props);
    this.state={
      genders: [false, false, false]
    };
    this.submitGenders = this.submitGenders.bind(this);
  }

  toggleCheckbox = idx => {
    const newGender = !this.state.genders[idx];
    this.setState({
      genders: this.state.genders.slice(0, idx).concat([newGender]).concat(this.state.genders.slice(idx+1))
    });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();    }

  createCheckbox = (label, idx) => {
    return (
    <Checkbox
      label = {label}
      handleCheckboxChange = {() => this.toggleCheckbox(idx) }
      key = {label}
      checked = {this.state.genders[idx]}
    />
  )}

  createCheckboxes = () => {
    return gendergroups.map(this.createCheckbox);
  } 

  submitGenders() {
    this.props.submitGenders(this.state.genders);
  }

  render() {
    const checkBoxes = this.createCheckboxes();
    return (
      <div className = 'container'>
      <div className = 'picker-header'>
        <h2>Please select the gender:</h2>
      </div>
        <div className = 'row'>
          <div className = 'col-sm-12'>

            <form onSubmit = {this.handleFormSubmit}>
              {checkBoxes}
              <button onClick={this.submitGenders}>Next</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GenderPicker;