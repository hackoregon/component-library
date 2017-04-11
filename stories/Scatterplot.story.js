import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Scatterplot } from '../src';

const displayName = Scatterplot.displayName || 'Scatterplot';
const title = 'Simple usage';
const description = `
  Scatterplot build with Recharts.`;

const demoCode = () => (
  <Scatterplot />
);

const propDocs = { inline: true, propTables: [Scatterplot] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
