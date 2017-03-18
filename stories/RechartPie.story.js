import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { RechartPie } from '../src';
// import { colors, getRandomValuesArray, randomizer } from './shared';

const propDocs = { inline: true, propTables: [RechartPie] };


export default () => storiesOf('Rechart Pie').addDecorator(withKnobs)
.addWithInfo(
  'simple usage',
  'These are Rechart PieChart and Legend components',
  () => (
    <RechartPie
      data={[{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
             { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }]}
    />
    ),
    propDocs,
  );
