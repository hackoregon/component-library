import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './LeafletMap.styles.css';
import { Button } from '../../src';
import myGeoJsonData from '../../assets/Zip_Code_GeoJson.json';

const cx = classNames.bind(styles);
const classMap = cx({ mapSize: true });

function wrapMyComponent(WrappedComponent, GeoJsonWrapper) {
  return class extends Component {
    static displayName = `GeoJsonWrapper(<${WrappedComponent.displayName} />`;
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
        geoJsonData: GeoJsonWrapper,
        dataByYear: {},
        dataByZip: {},
      };
      this.goFetch = this.goFetch.bind(this);
      this.testMyValue = this.testMyValue.bind(this);
      this.byZip = this.byZip.bind(this);
      this.countZip = this.countZip.bind(this);
      this.handleHover = this.handleHover.bind(this);
      this.getColor = this.getColor.bind(this);
      this.style = this.style.bind(this);
    }

    componentDidMount() {
      this.goFetch();
    }

    // Get Data Functions
    goFetch = () => {
      fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
        .then(response => response.json())
        .then((transactions) => {
          const dataByYear = {};
          transactions.forEach((t) => {
            const year = t.tran_date.substring(0, 4);
            const yearToUpdate = dataByYear[year];
            if (yearToUpdate) {
              dataByYear[year].push(t);
            } else {
              dataByYear[year] = [t];
            }
          });
          return dataByYear;
        })
        .then(dataByYear => this.setState({ dataByYear }))
        .catch(ex => console.log('failed', ex));
    };

    byZip = () => {
      const myYear = this.state.dataByYear[2016];
      const dataByZip = {};
      myYear.forEach((t) => {
        const zip = t.zip;
        const zipToUpdate = dataByZip[zip];
        if (zipToUpdate) {
          dataByZip[zip].push(t);
        } else {
          dataByZip[zip] = [t];
        }
      });
      this.setState({ dataByZip });
    };

    countZip = () => {
      const geoData = this.state.geoJsonData;
      const findZip = this.state.dataByZip;
      geoData.features.map((t) => {
        const zip = t.properties.ZIPCODE;
        let count = 0;
        if (findZip[zip] !== undefined) {
          count = findZip[zip].length;
        }
        t.properties.COUNT = count;
        console.log(zip, count);
      });
      this.setState({ geoJsonData: geoData });
    }

    testMyValue = () => {
      console.log(this.state.geoJsonData);
    }

    // Build Map Functions

    getColor(d) {
      return d > 100 ? '#800026' :
            d > 50  ? '#BD0026' :
            d > 25  ? '#E31A1C' :
            d > 15  ? '#FC4E2A' :
            d > 10   ? '#FD8D3C' :
            d > 5   ? '#FEB24C' :
            d > 1   ? '#FED976' :
                     '#FFEDA0';
    }

    style(feature) {
      return {
        fillColor: this.getColor(feature.properties.COUNT),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
      };
    }

/*
    geojson_layer.eachLayer(function (layer) {
      if(layer.feature.properties.NAME == 'feature 1') {
        layer.setStyle({fillColor :'blue'})
      }
    });
*/
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
          data={this.state.geoJsonData}
          center={this.state.center}
          maxBounds={this.state.maxBounds}
          zoom={this.state.zoom}
          minZoom={this.state.minZoom}
          byZip={this.byZip}
          testMyValue={this.testMyValue}
          countZip={this.countZip}
          handleHover={this.handleHover}
          style={this.style}
        />
      );
    }
  };
}

const BareLeafletMap = (props) => {
  require('../../assets/leaflet.css');

  return (
    <div>
      <Button
        onClick={props.byZip}
        type="submit"
      >by Zip
      </Button>
      <Button
        onClick={props.countZip}
        type="submit"
      >Count Zip
      </Button>
      <Button
        onClick={props.testMyValue}
        type="submit"
      >Test my value
      </Button>
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
        <GeoJSON data={props.data} style={props.style} onEachFeature={props.handleHover} />
      </Map>
    </div>
  );
};
BareLeafletMap.displayName = 'BareLeafletMap';

BareLeafletMap.propTypes = {
  center: React.PropTypes.array,
  maxBounds: React.PropTypes.array,
  zoom: React.PropTypes.number,
  minZoom: React.PropTypes.number,
  data: React.PropTypes.object,
};

const PDXLeafletMap = wrapMyComponent(
  BareLeafletMap,
  myGeoJsonData,
);

export default PDXLeafletMap;
