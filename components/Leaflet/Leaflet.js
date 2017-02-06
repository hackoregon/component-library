import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './Leaflet.styles.css';

const cx = classNames.bind(styles);
const className = cx({ base: true });

class Leaflet extends React.Component {
  constructor() {
    super();
    this.state = {
      geoJson:{},
      lat: 45.5236111,
      lng: -122.675,
      zoom: 11,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

Leaflet.propTypes = {
  geoJson: React.PropTypes.object,
};

Leaflet.displayName = 'Leaflet';

export default Leaflet;
