import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Radio } from '../src';

const displayName = Radio.displayName || 'Radio';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoCode = () => (
  <Radio onClick={action('clicked')}>Hello Radio</Radio>
);

const propDocs = { inline: true, propTables: [Radio] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
