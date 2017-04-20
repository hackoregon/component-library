import React, { PropTypes } from 'react';

const SpendingTitles = ({ spendingCenters }) =>
  <g className="spendingTitles">
    {
      Object.keys(spendingCenters).map(spending =>
        <text
          key={spending}
          x={spendingCenters[spending].x}
          y={50}
          fontSize="35"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {
            spending
          }
        </text>)
    }
  </g>;


SpendingTitles.propTypes = {
  spendingCenters: PropTypes.objectOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default SpendingTitles;
