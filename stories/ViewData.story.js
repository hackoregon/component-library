import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ViewData } from '../src';

const displayName = ViewData.displayName || 'ViewData';
const title = 'Simple usage';
const description = `
  This is some basic usage with ViewData. Enter an interger in the input field and select a value (in/out).
  Clicking Fetch should return a table of data from the API.`;
const targertId = 931;

const demoCode = () => (
  <ViewData />
);

const propDocs = { inline: true, propTables: [ViewData] };

const altDemo = () => (
  <ViewData data={targertId} />
);

const altTitle = 'alt title';

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  .add(altTitle, altDemo);
