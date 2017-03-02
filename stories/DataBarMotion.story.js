import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DataBarMotion } from '../src';

const displayName = DataBarMotion.displayName || 'DataBarMotion';
const title = 'Data Bar Motion';
const description = `
  This is a DataBarMotion. Enter a record id into the input field, and you can filter by year afterwards.
  Clicking Fetch will grab th data from the api and create a bar chart based on this data` ;
const targertId = 931;

const demoCode = () => (
  <DataBarMotion />
);

const propDocs = { inline: true, propTables: [DataBarMotion] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )