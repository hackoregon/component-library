import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AreaChart } from '../src';
import { colors } from './shared';

const displayName = AreaChart.displayName || 'AreaChart';
const title = 'Simple usage';
const description = `
  This is some basic usage with the AreaChart.
  A legend includes line titles.
  A tooltip includes each line value at each X-axis point.`;

const data = [
  { name: 'Year 1', Line1: 6000, Line2: 4000, Line3: 2000 },
  { name: 'Year 2', Line1: 3000, Line2: 2000, Line3: 1500 },
  { name: 'Year 3', Line1: 4000, Line2: 3000, Line3: 2250 },
  { name: 'Year 4', Line1: 4500, Line2: 3500, Line3: 2500 },
  { name: 'Year 5', Line1: 3500, Line2: 3000, Line3: 2000 },
];

const demoCode = () => (
  <AreaChart
    data={data}
    colors={colors}
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
