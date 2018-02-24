import React from 'react';
import DayItem from './viewComponents/DayItem';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        <h1>Itinerary View</h1>
        <DayItem />
        <DayItem />
        <DayItem />
      </div>
    );
  }
}

export default ItineraryView;