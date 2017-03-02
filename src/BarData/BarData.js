import React, { PropTypes } from 'react';
import { TransitionMotion, Motion, spring } from 'react-motion';
import d3 from 'd3';

// Creating an animated bar chart–bars "grow":

// Each bar will be a year

// Each bar's height will be a sum of all the amounts of
// each transaction for a particular year.
// (dataByYear[year].amount)
