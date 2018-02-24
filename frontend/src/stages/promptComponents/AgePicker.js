import React from 'react';

class AgePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ages: [1, 2, 3]
    };
    this.submitAges = this.submitAges.bind(this);
  }

  submitAges() {
    this.props.submitAges(this.state.ages);
  }

  render() {
    return (
      <div>
        Select the ages you would like to target<br />
        <button onClick={this.submitAges}>Submit</button>
      </div>
    );
  }
}

export default AgePicker;