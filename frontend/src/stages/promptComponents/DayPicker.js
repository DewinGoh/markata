import React from 'react';
import Calendar from 'react-calendar';

class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      second: null,
      third: null
    };
  }

  changeFirst = (date) => {
    this.setState({
      first: date
    });
  }
  
  changeSecond = (date) => {
    this.setState({
      second: date
    });
  }
  
  changeThird = (date) => {
    this.setState({
      third: date
    });
  }

  submitDays = () => {
    this.props.submitDays(this.state);
  }
  
  render() {
    return (
      <div className="outer">
        <div className = 'picker-header'>
          <h2>Please select the day(s):</h2>
        </div>
        <div className="inner">
          <div className="cal_container">
            <Calendar onChange={this.changeFirst} value={this.state.first}/>
            <Calendar onChange={this.changeSecond} value={this.state.second}/>
            <Calendar onChange={this.changeThird} value={this.state.third}/>
          </div>
          <button onClick={this.submitDays}>Submit!</button>
        </div>
      </div>
    );
  }
}

export default DayPicker;