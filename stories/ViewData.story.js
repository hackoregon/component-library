import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BarChartFromScratch } from '../src';

const displayName = BarChartFromScratch.displayName || 'View Data Default';
const title = 'Data Visualization Homework';
const description = 'React-motion bar chart';

const demoCode = () => (
  <BarChartFromScratch />
);

const propDocs = { inline: true, propTables: [BarChartFromScratch] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
