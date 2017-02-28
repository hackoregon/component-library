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
        zipYear: 2016,
      };
      this.byZip = this.byZip.bind(this);
      this.zipCount = this.zipCount.bind(this);
      this.getColor = this.getColor.bind(this);
      this.style = this.style.bind(this);
      this.handleYearChange = this.handleYearChange.bind(this);

      this.highlightFeature = this.highlightFeature.bind(this);
      this.resetHighlight = this.resetHighlight.bind(this);
      this.onEachFeature = this.onEachFeature.bind(this);
      this.showMe = this.showMe.bind(this);
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
        .then((dataByYear) => {
          const dataByZip = this.byZip(dataByYear);
          const geoJsonData = this.zipCount(dataByZip);
          this.setState({ dataByYear, dataByZip, geoJsonData });
        })
        .catch(ex => console.log('failed', ex))// eslint-disable-line

        // .then(this.byZip)
        // .then(() => this.zipCount());
    };

    byZip = (dataByYear) => {
      const yearData = this.state.dataByYear || dataByYear;
      const myYear = yearData[this.state.zipYear];
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
      return dataByZip;
    };

    zipCount = (dataByZip) => {
      const geoData = this.state.geoJsonData;
      const findZip = this.state.dataByZip;
      geoData.features.forEach((t) => {
        const zip = t.properties.ZIPCODE;
        let count = 0;
        if (findZip[zip] !== undefined) {
          count = findZip[zip].length;
        }
        t.properties.COUNT = count;
      });
      return geoJsonData;
    };

    showMe = () => {
      console.log(this.state);
    }

    upDateYear = () => {
      const dataByZip = this.byZip(this.state.dataByYear);
      const geoJsonData = this.zipCount();
      this.setState({ dataByZip, geoJsonData });
    }

    handleYearChange = (e) => {
      const zipYear = Number(e.target.value);
      this.setState({ zipYear });
    }

    // Build Map Functions
    getColor(d) {
      return d > 50 ? '#084594' :
            d > 40  ? '#2171b5' :
            d > 20  ? '#4292c6' :
            d > 10  ? '#6baed6' :
            d > 5   ? '#9ecae1' :
            d > 1   ? '#c6dbef' :
                     '#eff3ff';
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

  // Hover and Interactive Functions
    highlightFeature(e) {
      const layer = e.target;
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
      });
      layer.openPopup();
    }

    resetHighlight(e) {
      const layer = e.target;
      layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
      });
      layer.closePopup();
    }

    onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.ZIPCODE) {
        const zip = feature.properties.ZIPCODE.toString();
        layer.bindPopup(` ZIP: ${zip}`);
        layer.on({
          mouseover: this.highlightFeature,
          mouseout: this.resetHighlight,
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
          zipYear={this.state.zipYear}
          choices={this.state.dataByYear}

          handleYearChange={this.handleYearChange}
          byZip={this.byZip}
          zipCount={this.zipCount}
          showMe={this.showMe}
          style={this.style}
          onEachFeature={this.onEachFeature}

        />
      );
    }
  };
}

const BareLeafletMap = (props) => {
  require('../../assets/leaflet.css');
  let options = [];
  if (props.choices !== undefined) {
    options = Object.keys(props.choices).map((key) => {
      return (
        <option key={key} value={key} >{key}</option>
      );
    });
  }

  return (
    <div>
      <select
        value={props.zipYear}
        onChange={props.handleYearChange}
      >
        {options}
      </select>
      <Button
        onClick={props.byZip}
        type="submit"
      >By Zip
      </Button>
      <Button
        onClick={props.zipCount}
        type="submit"
      >Zip Count
      </Button>
      <Button
        onClick={props.showMe}
        type="submit"
      >Show me State
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
        <GeoJSON
          data={props.data}
          style={props.style}
          onEachFeature={props.onEachFeature}
        />
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
  zipYear: React.PropTypes.number,
  data: React.PropTypes.object,
  choices: React.PropTypes.object,
  style: React.PropTypes.func,
  zipCount: React.PropTypes.func,
  byZip: React.PropTypes.func,
  showMe: React.PropTypes.func,
  handleYearChange: React.PropTypes.func,
  onEachFeature: React.PropTypes.func,
};

const PDXLeafletMap = wrapMyComponent(
  BareLeafletMap,
  myGeoJsonData,
);

export default PDXLeafletMap;
