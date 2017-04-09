import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import isClient from '../utils/isClient';

const LeafletMap = ({ width, height, children, ...mapProps }) => {
  if (isClient) require('../../assets/leaflet.css');
  return (
    <div>
      {isClient &&
        <Map {...mapProps} style={{ width, height }}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          {children}
        </Map>
      }
    </div>
  );
};

LeafletMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  scrollWheelZoom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LeafletMap.defaultProps = {
  center: [0, 0],
  zoom: 0,
  width: '100%',
  height: 600,
  scrollWheelZoom: false,
};

export default LeafletMap;
