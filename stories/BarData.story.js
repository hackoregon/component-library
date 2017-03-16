import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BarData } from '../src';

const displayName = BarData.displayName || 'BarData';
const title = 'Simple usage';
const description = `
  Display data using React Motion`;

const demoCode = () => (
  <BarData />
);

const propDocs = { inline: true, propTables: [BarData] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
