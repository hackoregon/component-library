import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { LeafletMap } from '../components';

const displayName = 'LeafletMap';
const title = 'LeafletMap';
const description = 'LeafletMap goes here!';

const demoCode = () => (
  <LeafletMap />
);

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );