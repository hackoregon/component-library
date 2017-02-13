import React from 'react';
import { Map, TileLayer, GeoJSON, Popup, Marker } from 'react-leaflet';

const LeafletMap = ({ position, zoom, url, attribution, data }) => {
  require('./LeafletMap.css');
  require('../../assets/leaflet.css');

  return (
    <Map id="map" className="mapid" center={position} zoom={zoom} data={data}>
      <TileLayer
        url={url}
        attribution={attribution}
      />
      <GeoJSON data={data} />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup.</span>
        </Popup>
      </Marker>
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
};

export default LeafletMap;
