import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

const position = [45.52, -122.67];
const zoom = 11;

const attribute = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

const LeafletMap = (props) => {
  require('../../assets/leaflet.css');
  return (
    <div>
      <Map className={className, 'mainMap'} center={position} zoom={zoom}>
        <TileLayer
          url={url}
          attribution={attribute}
        />
      </Map>
    </div>
  );
};

LeafletMap.displayName = 'LeafletMap';

LeafletMap.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
};

export default LeafletMap;