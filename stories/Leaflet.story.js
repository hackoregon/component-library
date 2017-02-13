import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { LeafletMap } from '../src';

const displayName = 'LeafletMap';
const title = 'LeafletMap';
const description = 'LeafletMap goes here!';

const position = [45.57, -122.67];
const zoom = 10;
const maxzoom = 10;

const demoCode = () => (
  <LeafletMap position={position} zoom={zoom} maxzoom={maxzoom} />
);

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );