import React, { PropTypes } from 'react';
import {
 PieChart, Pie, Cell, Legend,
} from 'recharts';

const colors = [
  '#35427f',
  '#1F99EA',
  '#1383CD',
  '#DAEEFC',
];

// ReCharts legends have absolute positioning,
// so the left offset in this styles object is set to match
// the cx position in the Pie component within DonutPie
const syles = {
  fontFamily: 'filson-soft',
  fontWeight: 300,
  color: '#706371',
  fill: '#706371',
  textTransform: 'uppercase',
  left: '65%',
};

// Not sure why this property of the Legend is unresponsive
const iconType = 'square';

const RechartPie = ({ data }) =>
  <PieChart width={730} height={250} data={data}>
    <Legend layout="vertical" verticalAlign="middle" align="right" iconType={iconType} iconSize="20" wrapperStyle={syles} />
    <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#8884d8">
      {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))
    }
    </Pie>
  </PieChart>;

RechartPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default RechartPie;
