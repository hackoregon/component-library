import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';
import neighborhoodGeoJSON from './neighborhoodGeoJson.json';
import RechartsPie from '../RechartsPie/RechartsPie';

const cx = classNames.bind(styles);
const className = cx({ mapStyles: true });

// *********************
// Mock data
const mockDemographicData = [
  { name: 'White', value: 400 }, { name: 'Black', value: 300 },
  { name: 'Asian', value: 300 }, { name: 'Hispanic', value: 200 },
  { name: 'Native American', value: 200 },
];

const mockDemographicData2 = [
  { name: 'White', value: 400 }, { name: 'Black', value: 400 },
  { name: 'Asian', value: 400 }, { name: 'Hispanic', value: 400 },
  { name: 'Native American', value: 400 },
];

const mockDemographicData3 = [
  { name: 'White', value: 200 }, { name: 'Black', value: 500 },
  { name: 'Asian', value: 400 }, { name: 'Hispanic', value: 100 },
  { name: 'Native American', value: 100 },
];
// *********************

// Add mock data (or API fetched data) to imported GeoJSON with neighborhood data
const addDemographicData = (neighborhoodGeoJSON, mockDemographicData2, mockDemographicData3) => {
  const geoData = neighborhoodGeoJSON;
  geoData.features.forEach((t) => {
    const geoRecord = t;
    geoRecord.properties.OBJECTID % 2 === 0 ?
    geoRecord.properties.DEMOGRAPHICDATA = mockDemographicData2 :
    geoRecord.properties.DEMOGRAPHICDATA = mockDemographicData3;
  });
  return geoData;
};

const geoJSONDemographics = addDemographicData(neighborhoodGeoJSON, mockDemographicData2, mockDemographicData3);


export default class LeafletPlusData extends Component {

  static displayName = 'react-leaflet with info beneath';
  static propTypes = {
    zoom: React.PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      geoData: geoJSONDemographics,
      center: this.props.position,
      zoom: this.props.zoom,
      attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      color: 'blue',
      neighborhoodFocus: '(click ☝🏽)',
      neighborhoodDemographicData: mockDemographicData,
    };
  }

  handleClick = (feature, layer) => {
    layer.on('click', () => {
      this.setState({
        neighborhoodFocus: `${feature.properties.NAME}`,
        neighborhoodDemographicData: feature.properties.DEMOGRAPHICDATA,
      });
    });
  }

  render() {
    require('../../assets/leaflet.css');
    const dataDivStyle = { width: '32%', display: 'flex', flexDirection: 'column', padding: '0 40px' };

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
        <h2 style={{ backgroundColor: 'rgb(245,245,245)', margin: '-10px 0', paddingLeft: '37px' }} >{this.state.neighborhoodFocus} Neighborhood Stats</h2>
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(245,245,245)' }}>
          <div style={dataDivStyle}>
            <h3>Race/Ethnicity</h3>
            <RechartsPie
              data={this.state.neighborhoodDemographicData}
              chartProportions={this.props.chartProportions}
              colors={this.props.colors}
              legendStyles={this.props.legendStyles}
            />
          </div>
          <div style={dataDivStyle}>
            <h3>Household totals</h3>
            <h3>{this.state.neighborhoodDemographicData[0].name}: {this.state.neighborhoodDemographicData[0].value}</h3>
            <h3>{this.state.neighborhoodDemographicData[1].name}: {this.state.neighborhoodDemographicData[1].value}</h3>
            <h3>{this.state.neighborhoodDemographicData[2].name}: {this.state.neighborhoodDemographicData[2].value}</h3>
          </div>
          <div style={dataDivStyle}>
            <h3>Vulnerable populations</h3>
            <h3>{this.state.neighborhoodDemographicData[0].name}: {this.state.neighborhoodDemographicData[0].value}</h3>
            <h3>{this.state.neighborhoodDemographicData[1].name}: {this.state.neighborhoodDemographicData[1].value}</h3>
            <h3>{this.state.neighborhoodDemographicData[2].name}: {this.state.neighborhoodDemographicData[2].value}</h3>
          </div>
        </div>
      </div>
    );
  }
}
