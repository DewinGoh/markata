import React from 'react';

class RacePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ages: ['Chinese', 'Malay']
    };
    this.submitRaces = this.submitRaces.bind(this);
  }

  submitRaces() {
    this.props.submitRaces(this.state.races);
  }

  render() {
    return (
      <div>
        Select the races you would like to target<br />
        <button onClick={this.submitRaces}>Submit</button>
      </div>
    );
  }
}

export default RacePicker;