import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.style.css';
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
        zoom: props.zoom || options.zoom,
        attribute: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        color: 'red',
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

  //   byZip = () => {
  //      console.log(this.state.zipYear);
  //      const myYear = this.state.dataByYear[this.state.zipYear];
  //      const dataByZip = {};
  //      myYear.forEach((t) => {
  //        const zip = t.zip;
  //        const zipToUpdate = dataByZip[zip];
  //        if (zipToUpdate) {
  //          dataByZip[zip].push(t);
  //        } else {
  //          dataByZip[zip] = [t];
  //        }
  //      });
  //      this.setState({ dataByZip });
  //    };
  //
  //   zipCount = () => {
  //   //  console.log(this.state.zipYear);
  //    const geoData = this.state.geoJsonData;
  //    const findZip = this.state.dataByZip;
  //    geoData.features.forEach((t) => {
  //      const zip = t.properties.ZIPCODE;
  //      let count = 0;
  //      if (findZip[zip] !== undefined) {
  //        count = findZip[zip].length;
  //      }
  //      t.properties.COUNT = count;
  //    });
  //    this.setState({ geoJsonData: geoData });
  //  };

    // ATTEMPT AT ADDING MULTIPLE EVENTS
    // onEachFeature = (feature, layer) => {
    //   layer.on({
    //     mouseover: this.handleHover(feature, layer),
    //     click: this.handleClick,
    //   });
    // }
    // console.log(e.target);

    handleHover = (feature, layer) => {
      // let contributedAmount =  this.state.reducedDataObject[feature.properties.ZIPCODE];
      if (feature.properties && feature.properties.NAME && feature.properties.ZIPCODE) {
        layer.bindPopup(`${feature.properties.NAME}: ${feature.properties.ZIPCODE} contributed ${this.state.reducedDataObject[feature.properties.ZIPCODE]}`);
        layer.on('mouseover', (e) => {
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
        <GeoJSON data={props.data} onEachFeature={props.handleHover} color={props.color} />
      </Map>
    </div>
  );
};

const PDXLeafletMap = addGeoData(
  BareLeafletMap,
  zipCodeGeoJSON,
  { center: [45.57, -122.67], zoom: 11 },
);

export default PDXLeafletMap;
