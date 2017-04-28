import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ArcPieChart } from '../src';

const displayName = ArcPieChart.displayName || 'ArcPieChart';
const title = 'Simple usage';
const description = 'Arc pie chart';

const dataSet = [
  { name: 'Homeless on arrival', value: 31.7 },
  { name: 'Smorg', value: 27 },
];

const labels = ['2011', '2013', '2015'];
const setName = '2011';

const colors = ['#75568D', '#AAA4AB'];

const demoCode = () => (
  <ArcPieChart dataSet={dataSet} labels={labels} setName={setName} colors={colors} />
);

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
  );
