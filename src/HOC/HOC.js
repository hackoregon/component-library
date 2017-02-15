import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';
// data from http://gis-pdx.opendata.arcgis.com/datasets/neighborhoods-regions/data
import neighborhoodGeoJson from './neighborhoodGeoJson.json';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

function addGeoData(WrappedComponent, gd, options) {
  return class extends Component {
    static displayName = `WithGeoData(<${WrappedComponent.displayName} />`;

    constructor(props) {
      super(props);
      this.state = {
        geoData: gd,
        center: options.center,
        zoom: props.zoom || options.zoom,
        attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        color: 'red',
      };
    }

    // onEachFeature = (feature, layer) => {
    //   layer.on({
    //     mouseover: this.handleHover(feature, layer),
    //     click: this.handleClick,
    //   });
    // }

  // Could add a handle click, which
    handleHover = (feature, layer) => {
      if (feature.properties && feature.properties.NAME) {
        layer.bindPopup(feature.properties.NAME);
        layer.on('mouseover', (e) => {
                    // console.log(e.target);
          e.target.openPopup();
        });
      }
    }

    handleClick = (feature, layer) => {
      layer.on('click', (e) => {
        e.target.setStyle({
          weight: 5,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7,
        });
      });
    }

    render() {
      return (
        <WrappedComponent
          attribution={this.state.attribution}
          url={this.state.url}
          data={this.state.geoData}
          center={this.state.center}
          zoom={this.state.zoom}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          color={this.state.color}
        />);
    }
    };
}

const BareLeafletMap = (props) => {
  require('../../assets/leaflet.css');
  return (
    <div className={'mainMap'}>
      <Map
        className={className}
        zoom={props.zoom}
        center={props.center}
        zoomControl
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url={props.url} attribution={props.attribute} />
        <GeoJSON data={props.data} onEachFeature={props.handleClick} color={props.color} />
      </Map>
    </div>
  );
};

const PDXLeafletMap = addGeoData(
  BareLeafletMap,
  neighborhoodGeoJson,
  { center: [45.57, -122.67], zoom: 11 },
);

export default PDXLeafletMap;
