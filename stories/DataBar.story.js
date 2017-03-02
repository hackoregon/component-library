import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DataBar } from '../src';

const displayName = DataBar.displayName || 'DataBar';
const title = 'Data Bar';
const description = `
  This is a DataTable. Enter a record id into the input field, and you can filter by year afterwards.
  Clicking Fetch will grab th data from the api and create a table based on this data` ;
const targertId = 931;

const demoCode = () => (
  <DataBar />
);

const propDocs = { inline: true, propTables: [DataBar] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  .add(altTitle, altDemo);