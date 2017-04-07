import React from 'react';
import { take } from 'ramda';
import { storiesOf } from '@kadira/storybook';
import { Sankey } from '../src';

const displayName = Sankey.displayName || 'Sankey';
const title = 'Simple usage';
const description = `
  This is some basic usage with the Sankey component. Please refer to the btc-data.json file for formatting of data.
  In general, nodes and links are needed.`;

const data = require('./btc-data.json');

const transactionslinks = take(500, data.links.transactions);
const spendingLinks = take(500, data.links.spending);

const demoCode = () => (
  <div>
    <Sankey width={375} height={300} nodes={data.nodes} links={transactionslinks} />
    <Sankey width={375} height={300} nodes={data.nodes} links={spendingLinks} />
  </div>
);

const propDocs = { inline: true, propTables: [Sankey] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
