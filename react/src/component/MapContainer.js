import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '85%',
  height: '100%',
};

export class MapContainer extends Component {
  displayMarkers = () => {
    return this.props.plug.map(i => {
      return <Marker position={{
       lat: i.lat,
       lng: i.lng
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{lat: 65.01236, lng: 25.46816}}>
        {this.props.plug.map(i =><Marker key={i.id} position={{
                                                              lat: i.lat,
                                                              lng: i.lng
                                                              }}
         onClick={() => console.log("You clicked me!")} />)}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58'
})(MapContainer);
