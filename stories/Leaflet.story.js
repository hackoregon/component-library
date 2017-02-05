import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Leaflet } from '../components';

const displayName = Leaflet.displayName || 'Leaflet';
const title = 'OpenStreetMap overlaid with geoJSON data';
const description = `
  This is a Leaflet.js map with geoJSON data handled through React.`;

const demoCode = () => (
  <Leaflet />
);

const propDocs = { inline: true, propTables: [Leaflet] };


export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
