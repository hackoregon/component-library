import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RechartsPie } from '../src';
import { colors } from './shared';

const propDocs = { inline: true, propTables: [RechartsPie] };

const displayName = RechartsPie.displayName || 'RechartsPie';
const title = 'Simple usage';
const description = `
  This is a Recharts PieChart with a Recharts Legend component`;

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

// This base can be adjusted to scale up or down the chart and legend
const proportionBase = 200;

// These multipliers can be adjusted to modify the individual
const chartProportions = {
  chartWidth: proportionBase * 2,
  chartHeight: proportionBase * 1,
  iconSize: proportionBase * 0.075,
  pieInnerRadius: proportionBase * 0.2,
  pieOuterRadius: proportionBase * 0.4,
};

// Styles here based on src/Pie/Pie.css
const styles = {
  fontFamily: 'filson-soft',
  fontSize: proportionBase * 0.08,
  fontWeight: 300,
  color: '#706371',
  fill: '#706371',
};

const demoCode = () => (
  <RechartsPie
    data={data}
    chartProportions={chartProportions}
    colors={colors}
    styles={styles}
  />
);

export default () => storiesOf(displayName, module)
.addWithInfo(
  title,
  description,
  demoCode,
  propDocs,
);
