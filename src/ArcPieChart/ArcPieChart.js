import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Text, Cell, Legend } from 'recharts';
import styles from './ArcPieChart.styles.css';

const pieLabel = (options) => {
  if (options.payload.name === 'DontLabelMe') {
    return null;
  }

  return (
    <Text
      x={options.cx}
      y={options.cy - 20}
      fontSize={28}
      fill={'black'}
      style={{ fontWeight: 'bold' }}
      textAnchor={'middle'}
      alignmentBaseline="middle"
    >
      {`${options.payload.value}%`}
    </Text>
  );
};

const ArcPieChart = ({ dataSet, setName, labels, colors }) => (
  <div className={styles.container} >
    <div className={styles.yearsContainer}>
      <ul className={styles.years}>
        {
          labels.map((label) => {
            const active = label === setName ? styles.linkActive : '';
            return (
              <li className={styles.listItem} key={label}>
                <a className={`${styles.link} ${active}`}>{label}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
    <ResponsiveContainer width={'100%'} height={175}>
      <PieChart
        margin={{ top: 0, right: 5, bottom: 100, left: 5 }}
      >
        <Pie
          startAngle={180}
          endAngle={0}
          data={[...dataSet, { name: 'DontLabelMe', value: 100 - dataSet[0].value }]}
          cy={'100%'}
          labelLine={false}
          innerRadius={'105%'}
          outerRadius={'185%'}
          fill="#e3dde8"
          label={pieLabel}
        >
          {
            dataSet.map((entry, idx) =>
              <Cell key={entry.name} fill={colors[idx % colors.length]} />)
          }
        </Pie>
        <Legend
          iconType={'circle'}

          payload={[{
            color: colors[0],
            type: 'circle',
            value: dataSet[0].name,
          }]}
          wrapperStyle={{ bottom: '-35px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ArcPieChart;
