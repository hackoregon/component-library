import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { ScrollToTop } from '../src';

const displayName = ScrollToTop.displayName || 'ScrollToTop';
const title = 'Simple usage';
const description = `
  This is some basic usage with the ScrollToTop component. Provide text to show in the scroll to link tag.`;

const demoCode = () => (
  <ScrollToTop>Back To Top</ScrollToTop>
);

const propDocs = { inline: true, propTables: [ScrollToTop] };

const altDemo = () => (
  <ScrollToTop>👟 🐋</ScrollToTop>
);

const altTitle = 'with some emoji';

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  .add(altTitle, altDemo);
