import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BubbleChart } from '../src';
import { colors } from './shared';

const displayName = BubbleChart.displayName || 'BubbleChart';
const title = 'Simple usage';
const description = `
  This is some basic usage with the BubbleChart.`;

const data = [
  { bureau_title: 'Bureau of Environmental Services',
    id: 1,
    total_amount: 7468965,
    group: 'low',
    color: colors[2],
    year: 2010 },
  { bureau_title: 'City Budget Office',
    id: 2,
    total_amount: 115497,
    group: 'medium',
    color: colors[2],
    year: 2011 },
  { bureau_title: 'Office of Management & Finance',
    id: 3,
    total_amount: 8398624,
    group: 'low',
    color: colors[4],
    year: 2012 },
  { bureau_title: 'Office of the Mayor',
    id: 4,
    total_amount: 592962,
    group: 'medium',
    color: colors[4],
    year: 2010 },
  { bureau_title: 'Portland Bureau of Transportation',
    id: 5,
    total_amount: 57546789,
    group: 'high',
    color: colors[6],
    year: 2012 },
  { bureau_title: 'Portland Housing Bureau',
    id: 6,
    total_amount: 11639339,
    group: 'low',
    color: colors[6],
    year: 2011 },
  { bureau_title: 'Portland Parks & Recreation',
    id: 7,
    total_amount: 21829002,
    group: 'medium',
    color: colors[6],
    year: 2012 },
  { bureau_title: 'Portland Police Bureau',
    id: 8,
    total_amount: 2954388,
    group: 'high',
    color: colors[8],
    year: 2010 },
  { bureau_title: 'Portland Water Bureau',
    id: 9,
    total_amount: 1585195,
    group: 'low',
    color: colors[8],
    year: 2011 },
];

const demoCode = () => (
  <BubbleChart
    data={data}
    colors={colors}
  />
);

const propDocs = { inline: true, propTables: [BubbleChart] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
