import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BarChart } from '../src';
import { colors } from './shared';

const displayName = BarChart.displayName || 'BarChart';
const title = 'Simple usage';
const description = `
This is some basic usage with the BarChart.
A legend includes bar titles.
A tooltip includes each bar value at each X-axis point.`;

const data = [
{ name: 'Year 1', Bar1: 6000, Bar2: 4000 },
{ name: 'Year 2', Bar1: 3000, Bar2: 2000 },
{ name: 'Year 3', Bar1: 4000, Bar2: 3000 },
{ name: 'Year 4', Bar1: 4500, Bar2: 3500 },
{ name: 'Year 5', Bar1: 3500, Bar2: 3000 },
];

const demoCode = () => (
  <BarChart
    data={data}
    colors={colors}
  />
);

const propDocs = { inline: true, propTables: [BarChart] };

export default () => storiesOf(displayName, module)
.addWithInfo(
title,
description,
demoCode,
propDocs,
);
