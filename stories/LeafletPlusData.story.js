import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletPlusData } from '../src';

const displayName = 'LeafletPlusData';
const title = 'Leaflet with data on and below map';
const description = 'react-leaflet map of Portland with GeoJSON neighborhood data on map and desrived data beneath map on click';

const position = [45.57, -122.67];
const zoom = 9;
const maxzoom = 10;

const demoCode = () => (
  <LeafletPlusData
    position={position}
    zoom={zoom}
    maxzoom={maxzoom}
    zoomControl={false}
    dragging={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
  />
);

const propDocs = { inline: true, propTables: [LeafletPlusData] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
