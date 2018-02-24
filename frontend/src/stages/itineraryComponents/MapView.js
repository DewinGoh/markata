import React from 'react';
import MapRender from './viewComponents/MapRender';

class ItineraryView extends React.Component {
  render() {
    return (
      <div className="main_view">
        <div className="iti-headers">
        <h1>Map</h1>
        </div>

        <MapRender map={this.props.map} />
      </div>
    );
  }
}

export default ItineraryView;