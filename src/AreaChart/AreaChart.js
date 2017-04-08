import React, { PropTypes } from 'react';
import {
  AreaChart, XAxis, YAxis, CartesianGrid, Area,
} from 'recharts';

const StackedAreaChart = ({ data }) =>
  <AreaChart layout="horizontal" width={730} height={250} data={data}>
    <defs>
      <linearGradient id="colorAa" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorBb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorCc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#1f78b4" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#1f78b4" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Area type="monotone" dataKey="aa" stroke="#8884d8" fillOpacity={1} fill="url(#colorAa)" />
    <Area type="monotone" dataKey="bb" stroke="#82ca9d" fillOpacity={1} fill="url(#colorBb)" />
    <Area type="monotone" dataKey="cc" stroke="#1f78b4" fillOpacity={1} fill="url(#colorCc)" />
  </AreaChart>

StackedAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default StackedAreaChart;
