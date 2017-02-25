import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { divIcon } from 'leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.styles.css';
// neighborhoodGeoJson  Zip_Code_GeoJson
import neighborhoodGeoJson from '../../assets/Zip_Code_GeoJson.json';

const cx = classNames.bind(styles);
const classMap = cx({ mapSize: true });

const icon = divIcon({
  className: 'my-div-icon',
  iconSize: [30, 30],
});

function wrapMyComponent(WrappedComponent, GeoWrapper) {
  return class extends Component {
    static displayName = `GeoWrapper(<${WrappedComponent.displayName} />`;
    static propTypes = {
      data: React.PropTypes.object,
    };

    constructor(props) {
      super(props);
      this.state = {
        center: props.data.map.position,
        maxBounds: props.data.map.maxBounds,
        zoom: props.data.map.zoom,
        minZoom: props.data.map.minZoom,
        geoData: GeoWrapper,
        markers: props.data.markers,
      };
      this.clickHere = this.clickHere.bind(this);
      this.handleHover = this.handleHover.bind(this);
    }

    clickHere = (e) => {
      e.target._icon.click();
    };

    handleHover = (feature, layer) => {
      if (feature.properties && feature.properties.ZIPCODE) {
        layer.bindPopup(feature.properties.ZIPCODE.toString());
        layer.on('mouseover', (e) => {
          e.target.openPopup();
        });
      }
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.geoData}
          center={this.state.center}
          maxBounds={this.state.maxBounds}
          markers={this.state.markers}
          zoom={this.state.zoom}
          minZoom={this.state.minZoom}
          clickHere={this.clickHere}
          handleHover={this.handleHover}
        />
      );
    }
  };
}

const BareLeafletMap = (props) => {
  // const map = props.data.map;
  // const markers = props.data.markers;
  require('../../assets/leaflet.css');
  const markers = props.markers;
  const neighborhoods = markers.map(marker => (
    <Marker
      key={marker.neighborhood}
      position={marker.position}
      icon={icon}
      onmouseover={props.clickHere}
    >
      <Popup>
        <span>
          {marker.neighborhood} <br />
          {marker.popText}
        </span>
      </Popup>
    </Marker>
    ),
  );
  return (
    <Map
      className={classMap}
      center={props.center}
      maxBounds={props.maxBounds}
      zoom={props.zoom}
      minZoom={props.minZoom}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={props.data} onEachFeature={props.handleHover} />
      {neighborhoods}
    </Map>
  );
};
BareLeafletMap.displayName = 'BareLeafletMap';

BareLeafletMap.propTypes = {
  center: React.PropTypes.array,
  maxBounds: React.PropTypes.array,
  zoom: React.PropTypes.number,
  minZoom: React.PropTypes.number,
  markers: React.PropTypes.array,
  data: React.PropTypes.object,
};

const PDXLeafletMap = wrapMyComponent(
  BareLeafletMap,
  neighborhoodGeoJson,
);

export default PDXLeafletMap;
