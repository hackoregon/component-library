import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { LeafletMap } from '../components';

const displayName = LeafletMap.displayName || 'LeafletMap';
const title = 'Simple usage';
const description = `
  A Leaflet tile map using react-leaflet that centers on given coordinates and a zoom level.`;

const demoCode = () => (
  <LeafletMap center={[45.51, -122.68]} zoom={13} />
);

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );