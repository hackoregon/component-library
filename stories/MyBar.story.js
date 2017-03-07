import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { MyBar } from '../src';

const displayName = MyBar.displayName || 'MyBar';
const title = 'Simple usage';
const description = `
  This is some basic usage provides a bar chart`;

const demoCode = () => (
  <MyBar
    data={[
      { Year: '2016', Contributions: 750, Scale: 1 },
      { Year: '2015', Contributions: 600, Scale: 1 },
      { Year: '2014', Contributions: 450, Scale: 1 },
      { Year: '2013', Contributions: 350, Scale: 1 },
    ]}
  />
);

const propDocs = { inline: true, propTables: [MyBar] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
