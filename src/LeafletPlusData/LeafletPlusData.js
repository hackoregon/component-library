import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';
import neighborhoodGeoJSON from './neighborhoodGeoJson.json';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

export default class LeafletPlusData extends Component {

  static displayName = 'react-leaflet with info beneath';
  static propTypes = {
    zoom: React.PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      geoData: neighborhoodGeoJSON,
      contData: '',
      reducedDataObject: '',
      center: [45.52, -122.63],
      zoom: 12,
      attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      color: 'blue',
      neighborhoodFocus: '',
    };
  }

  handleClick = (feature, layer) => {
    layer.on('click', (e) => {
      this.setState({
        neighborhoodFocus: `${feature.properties.NAME}`,
      });
    });
  }

  render() {
    require('../../assets/leaflet.css');
    return (
      <div className={'mainMap'} >
        <Map
          className={className}
          zoom={this.state.zoom}
          center={this.state.center}
          zoomControl={false}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer url={this.state.url} attribution={this.state.attribute} />
          <GeoJSON data={this.state.geoData} onEachFeature={this.handleClick} color={this.state.color} />
        </Map>
        <h1>Neighborhood: {this.state.neighborhoodFocus}</h1>
      </div>
    );
  }
}
