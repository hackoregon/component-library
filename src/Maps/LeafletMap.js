import React, { PropTypes } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.styles.css';
// import . from '../../assets/leaflet.css';

// const data = {
//   position: [45.51, -122.68],
//   zoom: 13,
//   // url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
//   // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
// };

const cx = classNames.bind(styles);
const className = cx({ base: true });

const LeafletMap = (props) => {
  require('../../assets/leaflet.css');
  return (
    <Map id="map" center={props.center} zoom={props.zoom}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={props.center} >
        <Popup>
          <span>A pretty CSS3 popup. <br />Currently set to the center coordinates.</span>
        </Popup>
      </Marker>
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
  // url: React.PropTypes.string,
  // attribution: React.PropTypes.string,
};

export default LeafletMap;