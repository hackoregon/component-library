import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { Map, TileLayer, GeoJSON, LayersControl, Popup, Marker, MapControl } from 'react-leaflet';
import classNames from 'classnames/bind';
import CenterControl from './CustomControl';
import styles from './LeafletMap.style.css';

const { BaseLayer, Overlay } = LayersControl;

// data from http://gis-pdx.opendata.arcgis.com/datasets/neighborhoods-regions/data
import zipCodeGeoJSON from './zipCodeBoundaries.json';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

// Hardcoding data format
// Instead, will want to add an attribute to the GeoJSON object
function mungeData() { return { 97140: 506070, 97132: 20 }; }
const contributed = { 97140: 506070, 97132: 20 };

function addGeoData(WrappedComponent, gd, options) {
  return class extends Component {
    static displayName = `WithGeoData(<${WrappedComponent.displayName} />`;
    static propTypes = {
      zoom: React.PropTypes.number.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        geoData: gd,
        contData: '',
        reducedDataObject: '',
        center: options.center,
        zoom: options.zoom || props.zoom,
        attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        color: 'blue',
        neighborhoodFocus: '',
      };

      this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount = () => {
      this.fetchData();
    }

    fetchData = () => {
      require('es6-promise').polyfill();
      require('isomorphic-fetch');

      fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then((response) => {
        // Handle fetch response
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        // Add fetch response to state
        this.setState({ contData: data });
      })
      .then(() => {
        const mungedData = mungeData(this.state.constData);
        this.setState({
          reducedDataObject: mungedData,
        });
      });
    };

    handleClick = (feature, layer) => {
      layer.on('click', (e) => {
        if (feature.properties && feature.properties.NAME && feature.properties.ZIPCODE) {
          layer.bindTooltip(`${feature.properties.NAME}: ${feature.properties.ZIPCODE} contributed ${this.state.reducedDataObject[feature.properties.ZIPCODE]}`);
          e.target.openTooltip();
          this.setState({
            neighborhoodFocus: feature.properties.NAME,
          });
        }
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
          neighborhood={this.state.neighborhoodFocus}
        />);
    }
    };
}

const BareLeafletMap = (props) => {
  require('../../assets/leaflet.css');
  return (
    <div className={'mainMap'} >
      <Map
        className={className}
        zoom={props.zoom}
        center={props.center}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <CenterControl
          neighborhood={props.neighborhood}
          style={{
            width: '100vw',
            height: '100px',
            border: '2px solid red',
            backgroundColor: 'white',
          }}
        />
        <TileLayer url={props.url} attribution={props.attribute} />
        <GeoJSON data={props.data} onEachFeature={props.handleClick} color={props.color} />
      </Map>
    </div>
  );
};

const LeafletCustomControl = addGeoData(
  BareLeafletMap,
  zipCodeGeoJSON,
  { center: [45.52, -122.63], zoom: 12 },
);

export default LeafletCustomControl;
