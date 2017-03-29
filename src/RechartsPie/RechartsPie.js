import React, { PropTypes } from 'react';
import {
 PieChart, Pie, Cell, Legend,
} from 'recharts';

const RechartsPie = ({ data, chartProportions, colors, legendStyles }) =>
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
    <PieChart width={chartProportions.chartWidth} height={chartProportions.chartHeight} data={data} >
      <Legend layout="vertical" iconSize={chartProportions.iconSize} wrapperStyle={legendStyles} iconType="square" />
      <Pie data={data} cx="25%" cy="50%" innerRadius={chartProportions.pieInnerRadius} outerRadius={chartProportions.pieOuterRadius} >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
        }
      </Pie>
    </PieChart>
  </div>;

RechartsPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  chartProportions: PropTypes.object.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  legendStyles: PropTypes.object,
};

export default RechartsPie;
