import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Text, Cell, Legend } from 'recharts';
import styles from './ArcPieChart.styles.css';

const ArcPieChart = ({ dataSet, setNames, selectedSet, selectedData, colors }) => {
  const pieLabel = (options) => {
    const { cx, cy, payload } = options;
    if (payload.name !== selectedData) {
      return null;
    }
    return (
      <Text
        x={cx}
        y={cy - 20}
        fontSize={28}
        fill={'black'}
        style={{ fontWeight: 'bold' }}
        textAnchor={'middle'}
      >
        {`${payload.value}%`}
      </Text>
    );
  };

  const selectColor = name => name === selectedData ? colors[0] : colors[1];

  return (
    <div className={styles.container} >
      <div className={styles.yearsContainer}>
        <ul className={styles.years}>
          {
          setNames.map((name) => {
            const active = name === selectedSet ? styles.linkActive : '';
            return (
              <li className={styles.listItem} key={name}>
                <a className={`${styles.link} ${active}`}>{name}</a>
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
            data={[...dataSet]}
            cy={'100%'}
            labelLine={false}
            innerRadius={'105%'}
            outerRadius={'185%'}
            fill="#e3dde8"
            label={pieLabel}
          >
            {
            dataSet.map(data =>
              <Cell key={data.name} fill={selectColor(data.name)} />)
          }
          </Pie>
          <Legend
            iconType={'circle'}
            payload={dataSet.map(data => ({
              color: selectColor(data.name),
              type: 'circle',
              value: data.name,
            }))}
            wrapperStyle={{ bottom: '-35px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ArcPieChart;
