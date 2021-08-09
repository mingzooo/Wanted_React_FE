import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContent extends Component {
  constructor() {
    super();

    this.state = {
      locationData: []
      // markerPosition: {
      //   lat: 0,
      //   lng: 0
      // }
    };
  }

  // componentDidMount() {
  //   const { location } = this.props.location;
  //   console.log(">>>>>>>>>>", location);
  //   this.setState(location => ({
  //     markerPosition: {
  //       ...location,
  //       lat: Number(location[0]),
  //       lng: Number(location[1])
  //     }
  //   }));
  // }

  renderMarkers = (map, maps) => {
    const { markerPosition } = this.state;
    let marker = new maps.Marker({
      position: markerPosition,
      map
    });
    return marker;
  };

  render() {
    const mapStyles = {
      width: "62%",
      height: "90%"
    };

    const markerPosition = {
      lat: Number(this.props.location ? this.props.location[0] : 0),
      lng: Number(this.props.location ? this.props.location[1] : 0)
    };

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={markerPosition}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        containerStyle={{ maxWidth: "1090px", height: "400px" }}
      >
        <Marker position={markerPosition} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyARVm_IFPx0fUSRsfdKAvKV9hBG5JWu6xw"
})(MapContent);
