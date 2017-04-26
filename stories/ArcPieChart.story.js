import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ArcPieChart } from '../src';

const displayName = ArcPieChart.displayName || 'ArcPieChart';
const title = 'Simple usage';
const description = 'Arc pie chart';

const demoCode = () => (
  <ArcPieChart />
);

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
  );
