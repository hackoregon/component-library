import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const TestMap = ({ position, zoom, url, attribution }) => {
  require('./TestMap.styles.css');
  require('../../assets/leaflet.css');

  return (
    <Map className="mapid" center={position} zoom={zoom}>
      <TileLayer
        url={url}
        attribution={attribution}
      />
    </Map>
  );
};
TestMap.displayName = 'TestMap';

TestMap.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
  url: React.PropTypes.string,
  attribution: React.PropTypes.string,
};

export default TestMap;
