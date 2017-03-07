import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ViewData } from '../src';

const displayName = ViewData.displayName || 'ViewData';
const title = 'Simple usage';
const description = `
  This is some basic usage provides a bar chart`;

const demoCode = () => (
  <ViewData />
);

const propDocs = { inline: true, propTables: [ViewData] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
