import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Header } from '../src';
import Hero from '../src/Hero/Hero';
import Tag from '../src/Tag/Tag';

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
  <div><Header title="Civic" /><Hero /></div>
);

const collectionHero = () => (
  <div>
  <Header title="Civic" />
  <Hero>
  <Tag name="Featured"/>
  <h1>Title</h1>
  </Hero>
  </div>
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
  .add('collectionHero', collectionHero)
  .add(altTitle, altDemo);
