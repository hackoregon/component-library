import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ViewData } from '../src';

const displayName = ViewData.displayName || 'ViewData';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;
const targertId = 931;

const demoCode = () => (
  <ViewData data={targertId} />
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
