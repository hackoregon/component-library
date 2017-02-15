import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

const LeafletMap = ({ position, zoom, url, attribution, data, maxBounds }) => {
  require('./LeafletMap.css');
  require('../../assets/leaflet.css');

  return (
    <Map id="map" className="mapid" center={position} zoom={zoom} data={data} maxBounds={maxBounds}>
      <TileLayer
        url={url}
        attribution={attribution}
      />
      <GeoJSON
        data={data}
        color={'green'}
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
  data: React.PropTypes.object,
  maxBounds: React.PropTypes.array,
};

export default LeafletMap;
