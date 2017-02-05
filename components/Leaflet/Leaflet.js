import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './Leaflet.styles.css';

const cx = classNames.bind(styles);

const className = cx({ base: true });
//TODO: The map isn't rendering, determine why via testing
const Leaflet = geoJson => (
  <Map center={45.5236111, -122.675} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />
    <Marker position={45.5236111, -122.675}>
      <Popup>
        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

Leaflet.propTypes = {
  geoJson: React.PropTypes.object,
};

export default Leaflet;
