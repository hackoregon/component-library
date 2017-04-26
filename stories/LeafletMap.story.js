import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletMap } from '../src';

const displayName = LeafletMap.displayName || 'Leaflet';
const title = 'Simple usage';
const description = `
   Basic usage of leaflet should produce a map for a given set of coordinates.`;

const markers = [
   { neighborhood: 'Downtown', position: [45.5234500, -122.6762100], popText: 'Marker One.' },
   { neighborhood: 'Ladds Addition', position: [45.5104500, -122.6462100], popText: 'Marker Two.' },
   { neighborhood: 'Pearl', position: [45.5320000, -122.6800000], popText: 'Marker Three.' },
   { neighborhood: 'Laurelhurst', position: [45.5300000, -122.6260000], popText: 'Marker Four.' },
];
const map = {
  zoom: 11,
  minZoom: 10,
  position: [45.5234500, -122.6762100],
  maxBounds: [[45.8000000, -122.8000000], [45.4000000, -122.5000000]],
};
const data = { map, markers };

const demoCode = () => (
  <LeafletMap data={data} />
 );

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
   .addWithInfo(
     title,
     description,
     demoCode,
     propDocs,
   );
