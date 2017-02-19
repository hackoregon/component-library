import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ViewData } from '../src';

const displayName = ViewData.displayName || 'ViewData';
const title = 'Simple usage';
const description = `
  Fetch of ORSTAR campaign finance data.`;

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