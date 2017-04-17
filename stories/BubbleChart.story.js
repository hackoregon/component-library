import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { BubbleChart } from '../src';

const displayName = BubbleChart.displayName || 'BubbleChart';
const title = 'Simple usage';
const description = `
  This is some basic usage with the BubbleChart.`;

const data = [
  { grant_title: 'New Mexico Business Roundtable',
    id: 1,
    organization: 'New Mexico Business Roundtable for Educational Excellence',
    total_amount: 5000,
    group: 'low',
    start_date: '2/4/2010',
    start_month: 2,
    start_day: 4,
    start_year: 2010 },
  { grant_title: 'LA NSC Match',
    id: 2,
    organization: 'Trustees of Dartmouth College',
    total_amount: 27727,
    group: 'low',
    start_date: '8/3/2009',
    start_month: 8,
    start_day: 3,
    start_year: 2009 },
  { grant_title: 'Mathematics Assessment for Learning Phase One RFP',
    id: 3,
    organization: 'Denver School of Science and Technology Inc.',
    total_amount: 36018,
    group: 'low',
    start_date: '11/12/2009',
    start_month: 11,
    start_day: 12,
    start_year: 2009 },
  { grant_title: 'Convening of Stakeholder Planning Committee for the Institute for Local Innovation in Teaching and Learning',
    id: 4,
    organization: 'The NEA Foundation for the Improvement of Education',
    total_amount: 38420,
    group: 'low',
    start_date: '3/11/2010',
    start_month: 3,
    start_day: 11,
    start_year: 2010 },
  { grant_title: 'Conference Support',
    id: 5,
    organization: 'New Schools for New Orleans',
    total_amount: 50000,
    group: 'low',
    start_date: '10/12/2009',
    start_month: 10,
    start_day: 12,
    start_year: 2009 },
];

const demoCode = () => (
  <BubbleChart data={data} />
);

const propDocs = { inline: true, propTables: [BubbleChart] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
