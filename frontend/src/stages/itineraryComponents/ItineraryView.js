import React from 'react';
import DayItem from './viewComponents/DayItem';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        Itinerary View
        <DayItem />
        <DayItem />
        <DayItem />
      </div>
    );
  }
}

export default ItineraryView;