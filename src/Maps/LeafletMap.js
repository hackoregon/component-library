import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import map from './LeafletMap.styles.css';
// import . from '../../assets/leaflet.css';

const data = {
  position: [45.51, -122.68],
  zoom: 13,
  // url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
  // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

const LeafletMap = () => {
  require('../../assets/leaflet.css');
  return (
    <Map id="map" center={data.position} zoom={data.zoom}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

// const LeafletMap = ({ data }) => (
//   <Map id='map' center={[45.51, -122.68]} zoom={13}>
//     <TileLayer
    // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     />
//   </Map>
// );

LeafletMap.displayName = 'LeafletMap';

LeafletMap.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  url: React.PropTypes.string,
  attribution: React.PropTypes.string,
};

export default LeafletMap;