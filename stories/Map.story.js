import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Map } from '../components';

const displayName = Map.displayName || 'Map';
const title = 'Leaflet Map';
const description = 'Map goes here!';

const demoCode = () => (
  <Map />
);

const propDocs = { inline: true, propTables: [Map] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
