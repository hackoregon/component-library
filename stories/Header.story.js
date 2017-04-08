import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Header } from '../src';
import Hero from '../src/Hero/Hero';

const displayName = Header.displayName || 'Header';
const title = 'Simple usage';
const description = `
  a basic nav with logo & nav controls`;

const demoCode = () => (
  <Header title="Civic" />
);

const altTitle = 'with Platform Hero';

const altDemo = () => (
  <div><Hero><h1 className="MediumColor">Some other slogan</h1></Hero> <Header title="Civic" /></div>
);

const defaultHeroTitle = 'with default hero';

const defaultHero = () => (
  <div><Hero /> <Header title="Civic" /></div>
);

const propDocs = { inline: true, propTables: [Header] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  )
  .add(defaultHeroTitle, defaultHero)
  .add(altTitle, altDemo);
