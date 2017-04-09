import React, { PropTypes } from 'react';
import { Map, TileLayer, geoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StamenMap = ({ width, height, children, ...mapProps }) => (
  <Map {...mapProps} style={{ width, height }}>
    <TileLayer
      url="http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
      attribution="Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a  href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>."
    />
    {children}
  </Map>
);

StamenMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  scrollWheelZoom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

StamenMap.defaultProps = {
  center: [0, 0],
  zoom: 0,
  width: '100%',
  height: 600,
  scrollWheelZoom: false,
};

export default StamenMap;

//attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
