import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletCustomControl } from '../src';

const displayName = 'LeafletCustomControl';
const title = 'LeafletCustomControl';
const description = 'LeafletCustomControl goes here!';

const position = [45.57, -122.67];
const zoom = 9;
const maxzoom = 10;

const demoCode = () => (
  <LeafletCustomControl
    position={position}
    zoom={zoom}
    maxzoom={maxzoom}
    zoomControl={false}
    dragging={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
  />
);

const propDocs = { inline: true, propTables: [LeafletCustomControl] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
