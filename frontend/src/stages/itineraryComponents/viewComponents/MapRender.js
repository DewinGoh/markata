import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class MapRender extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        &nbsp;
        <Iframe
          width="45%"
          height="70%"
          frameborder="0" style="border:0"
          url={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBzxguAx8aUwvmusIHakt2rgKEJx98l4yY&q=${this.props.map},+Singapore`} 
        />
      </div>
    )
  }
}
