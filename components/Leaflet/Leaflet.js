import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './Leaflet.styles.css';

const cx = classNames.bind(styles);
const className = cx({ mapSize: true });
const data = { z: 14, x: 45.5234500, y: -122.6762100 };

const Leaflet = () => (
  <Map className={className} center={[data.x, data.y]} zoom={data.z}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </Map>
);

Leaflet.displayName = 'Leaflet';

Leaflet.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
};

export default Leaflet;
