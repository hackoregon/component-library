import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './Leaflet.css';
// data from http://gis-pdx.opendata.arcgis.com/datasets/neighborhoods-regions/data
// import neighborhoodGeoJson from './neighborhoodGeoJson.json';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

export function addGeoData(WrappedComponent, gd, options) {
  return class extends Component {
    static displayName = `WithGeoData(<${WrappedComponent.displayName} />`;
    static propTypes = {
      zoom: React.PropTypes.number.isRequired,
      center: React.PropTypes.array,
    }
    constructor(props) {
      super(props);
      this.state = {
        geoData: gd,
        center: props.center || options.center,
        zoom: props.zoom || options.zoom,
        attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      };
    }

    handleHover = (feature, layer) => {
      if (feature.properties && feature.properties.NAME) {
        layer.bindPopup(feature.properties.NAME);
        layer.on('mouseover', (e) => {
                    // console.log(e);
          e.target.openPopup();
        });
      }
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
        />);
    }
    };
}

const BareLeafletMap = (props) => {
  require('./leaflet.orig.css');
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
        <GeoJSON data={props.data} onEachFeature={props.handleHover} />
      </Map>
    </div>
  );
};

BareLeafletMap.propTypes = {
  center: React.PropTypes.array,
  zoom: React.PropTypes.number,
  data: React.PropTypes.object,
  attribute: React.PropTypes.string,
  url: React.PropTypes.string,
  handleHover: React.PropTypes.func,
};
BareLeafletMap.displayName = 'BareLeafletMap';


export default BareLeafletMap;
// export default PDXLeafletMap;