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
      ages: [1, 2, 3]
    };
    this.submitAges = this.submitAges.bind(this);
  }

    componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)){
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
    label = {label}
    handleCheckboxChange = {this.toggleCheckbox}
    key = {label}
    />
  )

  createCheckboxes = () => {
    console.log(agegroups)
    return agegroups.map(this.createCheckbox)
  }
  

  submitAges() {
    this.props.submitAges(this.state.ages);
  }

  render() {
    return (
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-sm-12'>

            <form onSubmit = {this.handleFormSubmit}>
              {this.createCheckboxes()}

        
              <button onClick={this.submitAges}>Next</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AgePicker;