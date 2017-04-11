import React, { PropTypes } from 'react';
import {
BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
} from 'recharts';

const HorizontalBarChart = ({ data, colors }) => {
  const bars = [];

  const myKeys = Object.keys(data[0]);
  myKeys.forEach((key, index) => {
    if (key !== 'name') {
      bars.push(<Bar
        key={`${myKeys[index]}`}
        dataKey={`${myKeys[index]}`}
        fill={colors[index]}
      />);
    }
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
      <BarChart layout="horizontal" width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {bars}
      </BarChart>
    </div>
  );
};

HorizontalBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HorizontalBarChart;
