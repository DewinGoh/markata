import React, { Component } from 'react';
import ItineraryView from './itineraryComponents/ItineraryView';
import MapView from './itineraryComponents/MapView';

class PromptStage extends Component {
  constructor(props) {
    super(props);
    this.state={
      ages: [],
      genders: [],
      races: [],
      days: [],
      curr: 0
    }
  }

  render() {
    return (
      <div className='iti_container'>
        <ItineraryView />
        <MapView />
      </div>
    );
  }
}


export default PromptStage;