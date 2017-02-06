import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletMap } from '../components';

const displayName = LeafletMap.displayName || 'LeafletMap';
const title = 'sample usage';
const description = `
  This is some basic usage that will show a map that is centered on Portland, OR.`;

const demoCode = () => (
  <LeafletMap />
)

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs
  );
