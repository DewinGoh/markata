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
        <Iframe
          width="100%"
          height="100%"
          frameborder="0" style="border:0"
          url="https://www.google.com/maps/embed/v1/q=kml">
        </Iframe>
      </div>
    )
  }
}
