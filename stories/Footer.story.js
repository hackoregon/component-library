import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Footer } from '../src';

const displayName = Footer.displayName || 'Footer';
const description = 'A basic footer';
const title = 'Simple Usage';

const demoCode = () => (
  <Footer />
);

const propDocs = { inline: true, propTables: [Footer] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
