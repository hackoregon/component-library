import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Leaflet } from '../components';

const displayName = Leaflet.displayName || 'Leaflet';
const title = 'Simple usage';
const description = `
  Basic usage of leaflet should produce a map for a given set of coordinates.`;

const demoCode = () => (
  <Leaflet zoom={14} position={[45.5234500, -122.6762100]} />
);

const propDocs = { inline: true, propTables: [Leaflet] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
