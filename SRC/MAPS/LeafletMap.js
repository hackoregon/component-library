import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const LeafletMap = ({ position, zoom, url, attribution }) => {
  require('./LeafletMap.css');
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
LeafletMap.displayName = 'LeafletMap';

LeafletMap.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
  url: React.PropTypes.string,
  attribution: React.PropTypes.string,
};

export default LeafletMap;
