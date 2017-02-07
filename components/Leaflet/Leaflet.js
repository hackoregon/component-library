import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './Leaflet.styles.css';

const cx = classNames.bind(styles);
const className = cx({ mapSize: true });

const Leaflet = ({ zoom, position }) => {
  require('../../assets/leaflet.css');
  return (
    <Map className={className} center={position} zoom={zoom} >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

Leaflet.displayName = 'Leaflet';

Leaflet.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
};

export default Leaflet;
