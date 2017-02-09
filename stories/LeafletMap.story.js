import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletMap } from '../SRC';

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
      };
    }
    render() {
      return (
        <LeafletMap
          position={this.state.position}
          zoom={this.state.zoom}
          url={this.state.url}
          attribution={this.state.attribution}
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
