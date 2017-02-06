import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import styles from './LeafletMap.styles.css';

const LeafletMap = () => {
  const position = [45.52, -122.67];
  const zoomLvl = 12;
    return (
      <div id="map">
        <Map center={position} zoom={zoomLvl}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </Map>
      </div>
    );
}

export default LeafletMap;
