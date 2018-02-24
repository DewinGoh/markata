import React from 'react';
import DayItem from './viewComponents/DayItem';

class ItineraryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dayItems = Object.keys(this.props.data).map(key => {
      return (<DayItem day={key} key={key} data={this.props.data[key]} setMap={this.props.setMap} />);
    })
    return (
      <div className="main_view">
        <div className="iti-headers">
        <h1>Itinerary</h1>
        </div>
        {dayItems}
      </div>
    );
  }
}

export default ItineraryView;