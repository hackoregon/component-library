import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BareLeafletMap, addGeoData } from '../src';
import neighborhood from './neighborhood.json';

const displayName = BareLeafletMap.displayName || 'PDXLeafletMap';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const PDXLeafletMap = addGeoData(
  BareLeafletMap,
  neighborhood,
  { center: [45.57, -122.67], zoom: 11 },
);
const demoCode = () => (
  <PDXLeafletMap zoom={7} />
);

const propDocs = { inline: true, propTables: [BareLeafletMap] };
export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );