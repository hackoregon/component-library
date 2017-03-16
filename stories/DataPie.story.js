import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { DataPie } from '../src';

const displayName = DataPie.displayName || 'DataPie';
const title = 'Data Pie';
const description = `
  This is a DataPie. Enter a record id into the input field, and you can filter by year afterwards.
  Clicking fetch will grab the data from the api and create a Pie Chart based on this data` ;

const demoCode = () => (
  <DataPie />
);

const propDocs = { inline: true, propPies: [DataPie] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )