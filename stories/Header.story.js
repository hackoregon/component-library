import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Header } from '../src';
<<<<<<< HEAD:stories/Core.story.js
=======
import Hero from '../src/Hero/Hero';
>>>>>>> 94ebfd457be20f581cd938ec4376741ee8add9f7:stories/Header.story.js

const displayName = Header.displayName || 'Header';
const title = 'Simple usage';
const description = `
  a basic nav with logo & nav controls`;

const demoCode = () => (
  <Header title="Civic" />
);

const altTitle = 'with Hero section';

const altDemo = () => (
  <div><Hero /><Header title="Civic" /></div>
);

const propDocs = { inline: true, propTables: [Header] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  .add(altTitle, altDemo);