import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMapboxMap = ({ width, height, children, ...mapProps }) => (
  <Map {...mapProps} style={{ width, height }}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    />
    {children}
  </Map>
);

LeafletMapboxMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  scrollWheelZoom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LeafletMapboxMap.defaultProps = {
  center: [0, 0],
  zoom: 0,
  width: '100%',
  height: 600,
  scrollWheelZoom: false,
};

export default LeafletMapboxMap;
