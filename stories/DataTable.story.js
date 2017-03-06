import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DataTable } from '../src';

const displayName = DataTable.displayName || 'DataTable';
const title = 'Data Table';
const description = `
  This is a DataTable. Enter a record id into the input field, and you can filter by year afterwards.
  Clicking Fetch will grab th data from the api and create a table based on this data` ;

const demoCode = () => (
  <DataTable />
);

const propDocs = { inline: true, propTables: [DataTable] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )