import React, { PropTypes } from 'react';

const CategoryTitles = ({ categoryCenters }) =>
  <g className="categoryTitles">
    {
      Object.keys(categoryCenters).map(category =>
        <text
          key={category}
          x={categoryCenters[category].x}
          y={50}
          fontSize="35"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {
            category
          }
        </text>)
    }
  </g>;

CategoryTitles.propTypes = {
  categoryCenters: PropTypes.objectOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default CategoryTitles;
