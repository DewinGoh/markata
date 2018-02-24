import React from 'react';
import MapRender from './viewComponents/MapRender';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        Map View

        <MapRender />
      </div>
    );
  }
}

export default ItineraryView;