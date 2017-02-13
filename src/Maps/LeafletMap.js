import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';
import neighborhoodGeoJson from './neighborhoodGeoJson.json';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

const attribute = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

console.log(neighborhoodGeoJson)

const LeafletMap = ({ zoom, position, maxzoom }) => {
  require('../../assets/leaflet.css');

  return (
    <div className={'mainMap'}>
      <Map className={className} center={position} zoom={zoom} zoomControl={false} dragging={false} scrollWheelZoom={false} doubleClickZoom={false}>
        <TileLayer
          url={url}
          attribution={attribute}
        />
        <GeoJSON
          data={neighborhoodGeoJson}
        />
      </Map>
    </div>
  );
};

LeafletMap.displayName = 'LeafletMap';

LeafletMap.propTypes = {
  position: React.PropTypes.array,
  zoom: React.PropTypes.number,
};

export default LeafletMap;