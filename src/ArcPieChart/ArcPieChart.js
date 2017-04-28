import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Text, Cell, Curve, Legend } from 'recharts';
import styles from './ArcPieChart.styles.css';


const propsData = [
  { name: 'Homeless on arrival', value: 31.7 },
];

const propsYears = [2011, 2013, 2015];
const propsActive = 2011;

const COLORS = ['#75568D', '#AAA4AB'];


const pieLabel = (options) => {
  if (options.payload.name === 'DontLabelMe') {
    return null;
  }

  return (
    <Text
      {...options}
      x={options.cx}
      y={options.cy}
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

const labelLine = options => (
  <Curve {...options} stroke={'black'} type="linear" />
);

const ArcPieChart = props => (
  <div className={styles.container} >
    <div className={styles.arcPieChart}>
      <ul className={styles.years}>
        {
          propsYears.map((item) => {
            const active = item === propsActive ? styles.linkActive : '';
            return (
              <li className={styles.listItem} key={item}>
                <a className={`${styles.link} ${active}`}>{item}</a>
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
          data={[...propsData, { name: 'DontLabelMe', value: 100 - propsData[0].value }]}
          cy={'100%'}
          labelLine={false}
          innerRadius={'105%'}
          outerRadius={'185%'}
          fill="#e3dde8"
          label={pieLabel}
        >
          {
            propsData.map((entry, idx) =>
              <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />)
          }
        </Pie>
        <Legend
          iconType={'circle'}

          payload={[{
            color: COLORS[0],
            type: 'circle',
            value: propsData[0].name,
          }]}
          wrapperStyle={{ bottom: '-35px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ArcPieChart;
