import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { divIcon } from 'leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.styles.css';

const cx = classNames.bind(styles);
const classMap = cx({ mapSize: true });

const icon = divIcon({
  className: 'my-div-icon',
  iconSize: [30, 30],
});

const Leaflet = ({ map, markers }) => {
  require('../../assets/leaflet.css');
  const neighborhoods = markers.map(marker => (
    <Marker
      key={marker.neighborhood}
      position={marker.position}
      icon={icon}
    >
      <Popup>
        <span>
          {marker.neighborhood} <br />
          {marker.popText}
        </span>
      </Popup>
    </Marker>
    ),
  );
  return (
    <Map
      className={classMap}
      center={map.position}
      maxBounds={map.maxBounds}
      zoom={map.zoom}
      minZoom={map.minZoom}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {neighborhoods}
    </Map>
  );
};

Leaflet.displayName = 'Leaflet';

Leaflet.propTypes = {
  map: React.PropTypes.object,
  markers: React.PropTypes.array,
};

export default Leaflet;
