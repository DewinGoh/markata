import React, { Component } from 'react';
import ItineraryView from './itineraryComponents/ItineraryView';
import MapView from './itineraryComponents/MapView';

const testProp = {
  '26 Feb 2018': {
    morning: {
      subzone: 'KENT RIDGE',
      pop: 2716
    },
    lunch: {
      subzone: 'SERANGOON CENTRAL',
      pop: 1945
    },
    evening: {
      subzone: 'ORCHARD',
      pop: 2355
    }
  },
  '27 Feb 2018': {
    morning: {
      subzone: 'CORONATION ROAD',
      pop: 2334
    },
    lunch: {
      subzone: 'SOMERSET',
      pop: 2144
    },
    evening: {
      subzone: 'ANG MO KIO TOWN CENTRE',
      pop: 3371
    }
  },
  '28 Feb 2018': {
    morning: {
      subzone: 'KENT RIDGE',
      pop: 2212
    },
    lunch: {
      subzone: 'NEWTON CIRCUS',
      pop: 3441
    },
    evening: {
      subzone: 'HOLLAND VILLAGE',
      pop: 2234
    }
  },
}

class PromptStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: 'smu+labs'
    };
  }

  setMap = (newMap) => {
    console.log(newMap);
    this.setState({
      map: newMap.toLowerCase().split(' ').join('+')
    })
  }

  render() {
    return (
      <div className='iti_container'>
        <ItineraryView data={testProp} setMap={this.setMap} />
        <MapView map={this.state.map} />
      </div>
    );
  }
}


export default PromptStage;