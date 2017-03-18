import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RechartPie } from '../src';
import { colors } from './shared';

const propDocs = { inline: true, propTables: [RechartPie] };

const displayName = RechartPie.displayName || 'RechartPie';
const title = 'Simple usage';
const description = `
  This is a Rechart PieChart with a Rechart Legend component`;

// Styles here based on src/Pie/Pie.css
// Absolute positioning top and left offsets based on cx and cy percentage in Pie component
const styles = {
  fontFamily: 'filson-soft',
  fontWeight: 300,
  color: '#706371',
  fill: '#706371',
  top: '33.5%',
  left: '68%',
};

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

const demoCode = () => (
  <RechartPie
    data={data}
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
