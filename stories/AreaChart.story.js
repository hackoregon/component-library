import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AreaChart } from '../src';

const displayName = AreaChart.displayName || 'AreaChart';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoCode = () => (
  <AreaChart
    data={[
        { name: 'Year 1', aa: 6000, bb: 4000, cc: 2000 },
        { name: 'Year 2', aa: 3000, bb: 2000, cc: 1500 },
        { name: 'Year 3', aa: 4000, bb: 3000, cc: 2250 },
        { name: 'Year 4', aa: 4500, bb: 3500, cc: 2500 },
        { name: 'Year 5', aa: 3500, bb: 3000, cc: 2000 },
    ]}
  />
);

const propDocs = { inline: true, propTables: [AreaChart] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
