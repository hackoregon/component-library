import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [45.5231, -122.6765];
const zoomLevel = 12;

const regularAttribute = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const regularUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';


const LeafletMap = () => (
  <div>
    <Map center={mapCenter} zoom={zoomLevel}>
      <TileLayer attribution={regularAttribute} url={regularUrl} />
    </Map>
  </div>
);

//LeafletMap.displayName = 'LeafletMap';

export default LeafletMap;
