import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ViewData } from '../src';

const displayName = ViewData.displayName || 'View Data Default';
const title = 'Data Visualization Homework';
const description = `
Write a class component, utilizing lifecycle methods, that has an input field and a fetch button. When the fetch button is clicked it fetches some data from the given api endpoint and displays that data.`;

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
