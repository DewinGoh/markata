import React from 'react';
import MapRender from './viewComponents/MapRender';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        <h1>Map View</h1>

        <MapRender />
      </div>
    );
  }
}

export default ItineraryView;