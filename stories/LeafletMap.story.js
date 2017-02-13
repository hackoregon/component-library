import React from 'react';
// import L from 'leaflet';
import { storiesOf } from '@kadira/storybook';
import { LeafletMap } from '../src';

const displayName = LeafletMap.displayName || 'Leaflet Map';
const title = 'Simple usage';
const description = `
  This map can show you anywhere on Earth, anywhere.`;

const demoCode = () => {
  class DemoLeafletMap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        position: [45.521, -122.664],
        zoom: 13,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // I don't imagine state is the best place for this geojsonFeature data
        geojsonFeature: {
          type: 'Feature',
          properties: {
            name: 'Coors Field',
            amenity: 'Baseball Stadium',
            popupContent: 'This is where the Rockies play!',
          },
          geometry: {
            type: 'Point',
            coordinates: [45.521, -122.664],
          },
        },
      };
    }
    render() {
      return (
        <LeafletMap
          id="map"
          position={this.state.position}
          zoom={this.state.zoom}
          url={this.state.url}
          attribution={this.state.attribution}
          data={this.state.geojsonFeature}
        />
      );
    }
  }
  return (<DemoLeafletMap />);
};

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
