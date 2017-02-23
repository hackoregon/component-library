import React from 'react';
import { action } from '@kadira/storybook';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './ViewData.styles.css';
import { Button, Chart, ChartData, Pie } from '../../src';

export default class ViewData extends React.Component {
  static displayName = 'ViewData';
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      dataByYear: {},
      candidate: '5591',
      topFive2016: [],
      topFive2015: [],
    };
    this.goFetch = this.goFetch.bind(this);
    this.topContribs = this.topContribs.bind(this);
    this.setCandidate = this.setCandidate.bind(this);
  }

  componentDidMount() {
    this.goFetch();
  }

  setCandidate(e) {
    this.setState({ candidate: e.target.value });
  }

  topContribs() {
    const topFive2016 = [];
    const topFive2015 = [];
    const hold2016 = this.state.dataByYear[2016].slice(0, 5);
    const hold2015 = this.state.dataByYear[2015].slice(0, 5);
    hold2016.forEach(obj => topFive2016.push(obj.amount));
    hold2015.forEach(obj => topFive2015.push(obj.amount));
    this.setState({ topFive2016 });
    this.setState({ topFive2015 });
  }

  goFetch = () => {
    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/${this.state.candidate}/`)
      .then(response => response.json())
      .then((transactions) => {
        const dataByYear = {};
        transactions.forEach((t) => {
          const year = t.tran_date.substring(0, 4);
          const yearToUpdate = dataByYear[year];
          if (yearToUpdate) {
            dataByYear[year].push(t);
          } else {
            dataByYear[year] = [t];
          }
        });
        return dataByYear;
      })
      .then(dataByYear => this.setState({ dataByYear }))
      .catch(ex => console.log('failed', ex));
  };

  render() {
    const colors = [
      '#a6cee3',
      '#1f78b4',
      '#b2df8a',
      '#33a02c',
      '#fb9a99',
      '#e31a1c',
      '#fdbf6f',
      '#ff7f00',
      '#cab2d6',
      '#6a3d9a',
      '#ffff99',
      '#b15928',
      '#8dd3c7',
      '#fb8072',
      '#80b1d3',
      '#bebada',
      '#ffed6f',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
      '#ccebc5',
      '#ffffb3',
    ];
    const getColors = (datum, idx) => (arguments.length === 2 ? colors[idx] : colors[datum]);
    return (
      <div>
        <div onChange={this.setCandidate}>
          <input type="radio" value="5591" name="candidate" /> Ted
          <span>     </span>
          <input type="radio" value="5588" name="candidate" /> Faye
          <Button
            onClick={this.goFetch}
            type="submit"
          >Fetch
          </Button>
          <Button
            onClick={this.topContribs}
            type="submit"
          >Top Contribs
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10% auto' }} >
          <Chart width={600} height={250}>
            <ChartData data={this.state.topFive2016}>
              <Pie
                innerRadius={75} outerRadius={110}
                onClick={action((e, v, i) => console.log(`${labels[i]} clicked`))}
                style={(d, i) => ({ fill: getColors(i) })}
              >
                <text
                  className="donut-title" textAnchor="middle"
                  x={0} y={0} fontSize={24}
                >
                  {'2016'}
                </text>
                <text
                  className="donut-subtitle" textAnchor="middle"
                  x={0} y={18} fontSize={14}
                >
                  {'Top 5 Contribs'}
                </text>
              </Pie>
            </ChartData>
          </Chart>
          <Chart width={600} height={250}>
            <ChartData data={this.state.topFive2015}>
              <Pie
                innerRadius={75} outerRadius={110}
                onClick={action((e, v, i) => console.log(`${labels[i]} clicked`))}
                style={(d, i) => ({ fill: getColors(i) })}
              >
                <text
                  className="donut-title" textAnchor="middle"
                  x={0} y={0} fontSize={24}
                >
                  {'2015'}
                </text>
                <text
                  className="donut-subtitle" textAnchor="middle"
                  x={0} y={18} fontSize={14}
                >
                  {'Top 5 Contribs'}
                </text>
              </Pie>
            </ChartData>
          </Chart>
        </div>
      </div>
    );
  }
}
