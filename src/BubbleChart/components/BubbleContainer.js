import React, { PropTypes } from 'react';

const BubbleContainer = ({ width, height, children }) =>
  <svg className="bubbleChart" width={width} height={height}>
    {
      children
    }
  </svg>;

BubbleContainer.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default BubbleContainer;
