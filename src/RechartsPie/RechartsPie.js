import React, { PropTypes } from 'react';
import {
 PieChart, Pie, Cell, Legend,
} from 'recharts';

// *
// Not sure why the IconType property of the Legend component is not rendering as expected
// Also these Legend properties are not first rendering as expected w/o refresh: verticalAlign="middle" align="right"
// http://recharts.org/#/en-US/api/Legend
// *

const RechartsPie = ({ data, colors, styles }) =>
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
    <PieChart width={200} height={200} data={data} >
      <Legend layout="vertical" iconSize="5" wrapperStyle={styles} iconType="square" verticalAlign="middle" align="right" />
      <Pie data={data} cx="50%" cy="50%" innerRadius={20} outerRadius={30}>
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
        }
      </Pie>
    </PieChart>
  </div>;

RechartsPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object,
};

export default RechartsPie;
