import React from 'react';
import DayItem from './viewComponents/DayItem';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        <div className="iti-headers">
        <h1>Itinerary</h1>
        </div>
        <DayItem />
        <DayItem />
        <DayItem />
      </div>
    );
  }
}

export default ItineraryView;