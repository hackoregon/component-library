import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook'; // eslint-disable-line
import buttonStory from './Button.story';
import storycardStory from './StoryCard.story';
import storyLinkStory from './StoryLink.story';
import storyFooterStory from './StoryFooter.story';
import editableStory from './Editable.story';
import pieStory from './Pie.story';
import sliderStory from './Slider.story';
import areaChartStory from './AreaChart.story';
import scrollToTopStory from './ScrollToTop.story';
import barChartStory from './BarChart.story';
import footerStory from './Footer.story';
import sankeyStory from './Sankey.story';
import headerStory from './Header.story';
import leafletMap from './LeafletMap.story';
import Welcome from './Welcome';
import leafletPlusDataStory from './LeafletPlusData.story';
import dropdownStory from './Dropdown.story';
import rechartsPie from './RechartsPie.story';
import heroStory from './Hero.story';
import scatterplotStory from './Scatterplot.story';

import '../src/global.styles.css';
import '../assets/leaflet.css';

// stories can be added directly here
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

// or imported as functions from files then composed in the order you invoke them
editableStory();
headerStory();
buttonStory();
storyLinkStory();
storyFooterStory();
storycardStory();
sliderStory();
pieStory();
areaChartStory();
dropdownStory();
barChartStory();
footerStory();
sankeyStory();
sliderStory();
leafletPlusDataStory();
scrollToTopStory();
rechartsPie();
leafletMap();
heroStory();
scatterplotStory();
