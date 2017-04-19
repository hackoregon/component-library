import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Header } from '../src';
import Hero from '../src/Hero/Hero';
import Tag from '../src/Tag/Tag';
import ShareCollection from '../src/Share/ShareCollection';

const displayName = Header.displayName || 'Header';
const title = 'Simple usage';
const description = `
  a basic nav with logo & nav controls`;

const demoCode = () => (
  <Header title="Civic" />
);

const altTitle = 'with Platform Hero';

const altDemo = () => (
  <div><Header title="Civic" /><Hero><h1 className="MediumColor">Some other slogan</h1></Hero></div>
);

const defaultHeroTitle = 'with default hero';

const defaultHero = () => (
  <div><Header title="Civic" /><Hero /></div>
);

const collectionHero = () => (
  <div>
    <Header title="Civic" />
    <Hero>
      <Tag name="Featured" />
      <h1>Title</h1>
      <ShareCollection collectionId="housing" />
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
