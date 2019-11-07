import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ArcPieChart } from '../src';

const displayName = ArcPieChart.displayName || 'ArcPieChart';
const title = 'Simple usage';
const description = 'Arc pie chart';

const dataSets = [
  {
    name: 'Monsters',
    data: [
      { name: 'Boggarts', value: 86 },
      { name: 'Acromantula', value: 14 },
    ],
  },
  {
    name: 'People',
    data: [
      { name: 'Muggles', value: 50 },
      { name: 'Witches', value: 25 },
      { name: 'Wizards', value: 25 },
    ],
  },
  {
    name: 'Other',
    data: [
      { name: 'Giants', value: 20 },
      { name: 'House Elves', value: 15 },
      { name: 'Goblins', value: 65 },
    ],
  },
];

const demoCode = () => (
  <ArcPieChart dataSets={dataSets} />
);

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
  );
