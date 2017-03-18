import React, { PropTypes } from 'react';
import {
 PieChart, Pie, Cell, Legend,
} from 'recharts';

// *
// Not sure why the IconType property of the Legend component is not rendering as expected
// Also these Legend properties are not first rendering as expected w/o refresh: verticalAlign="middle" align="right"
// http://recharts.org/#/en-US/api/Legend
// *

const RechartPie = ({ data, colors, styles }) =>
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
    <PieChart width={600} height={250} data={data}>
      <Legend layout="vertical" iconSize="20" wrapperStyle={styles} iconType="square" />
      <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8">
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
        }
      </Pie>
    </PieChart>;
  </div>;

RechartPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object,
};

export default RechartPie;
