import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { MapView } from '../components';

const displayName = 'MapView';
const title = 'Simple usage';
const description = `
  Basic Map display.`;

const demoCode = () => (
  <MapView>Hello MapView</MapView>
);

const propDocs = { inline: true, propTables: [MapView] };

// const altDemo = () => (
//   <MapView onClick={action('clicked')}>😀 😎 👍 💯</MapView>
// );
//
// const altTitle = 'with some emoji';

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  // .add(altTitle, altDemo);
