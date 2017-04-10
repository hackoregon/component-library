import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Header } from '../src';
import Hero from '../src/Hero/Hero';
import CollectionHero from '../src/Hero/CollectionHero';

const displayName = Hero.displayName || 'Hero';

const defaultHeroTitle = 'with default hero';
const description = 'this is the basic main page hero';

const defaultHero = () => (
  <div><Header title="Civic" /><Hero /></div>
);

const collectionHero = () => (
  <div>
    <Header title="Civic" />
    <CollectionHero
      collectionId="housing"
      title="Housing Collection"
      featuredTag="housing"
    />
  </div>
);

const propDocs = { inline: true, propTables: [Header] };

export default () => storiesOf(displayName, module)
  .add(
    defaultHeroTitle,
    defaultHero,
  )
  .add('collectionHero', collectionHero);
