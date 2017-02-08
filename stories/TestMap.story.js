import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { TestMap } from '../components';

const displayName = TestMap.displayName || 'Test Map';
const title = 'Simple usage';
const description = `
  This map can show you anywhere on Earth, anywhere.`;

const demoCode = () => {
  class DemoTestMap extends React.Component {
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
        <TestMap
          position={this.state.position}
          zoom={this.state.zoom}
          url={this.state.url}
          attribution={this.state.attribution}
        />
      );
    }
  }
  return (<DemoTestMap />);
};

const propDocs = { inline: true, propTables: [TestMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
