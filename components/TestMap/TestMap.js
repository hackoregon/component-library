import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import styles from './TestMap.styles.css';


const TestMap = ({ position, zoom, url, attribution }) => (
  <div id="mapid">
    <Map center={position} zoom={zoom}>
      <TileLayer
        url={url}
        attribution={attribution}
      />
    </Map>
  </div>
);

TestMap.displayName = 'TestMap';

TestMap.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
  url: React.PropTypes.string,
  attribution: React.PropTypes.string,
};

export default TestMap;
