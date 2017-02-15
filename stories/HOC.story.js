import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { HOC } from '../src';

const displayName = 'HOC';
const title = 'HOC';
const description = 'HOC goes here!';

const position = [45.57, -122.67];
const zoom = 10;
const maxzoom = 10;

const demoCode = () => (
  <HOC
    position={position}
    zoom={zoom}
    maxzoom={maxzoom}
    zoomControl={false}
    dragging={false}
    scrollWheelZoom={false}
    doubleClickZoom={false}
  />
);

const propDocs = { inline: true, propTables: [HOC] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
