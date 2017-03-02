import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';
import { Chart, ChartData, Pie } from '../';

function filterByYear(data, input) {
  const filtered = (data.filter((record) => {
    return record.tran_date.substring(0, 4).indexOf(input) !== -1;
  }));
  console.log(typeof filtered, ' check type of filtered');   // object
  return filtered;
  // filtered is the jsondata object containing only the transactions of
  // a queried year
}

function makeDataByYear(data) {
  // converts jsondata into a hashmap with years as keys
  const dataByYear = {};
  data.forEach((t) => {
    const year = t.tran_date.substring(0, 4);
    // assigns the year part of the tran_date string to 'year'
    const yearToUpdate = dataByYear[year];
    if (yearToUpdate) {
      dataByYear[year].push(t);
    } else {
      dataByYear[year] = [t];
    }
  });
  return dataByYear;
}

function topFiveContrib(yearData) {
  return yearData.slice(0, 5).map(item => item.amount);
}

export default class ViewData extends Component {
  static displayName = 'ViewData';
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: null,
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
      dataByYear: '',
      input: '',
      // The ViewData class component has an input property to hold
      // query terms by the user.
      topFiveContributors: {},
      // State for the object holding the top 5 contributors for a
      // given year.
    };
    // this.updateInput = this.updateInput.bind(this);
    // this.filterByYear = this.filterByYear.bind(this);
    // this.makeDataByYear = this.makeDataByYear.bind(this);
    // this.topFiveContrib = this.topFiveContrib.bind(this);
  }

  componentDidMount = () => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    // console.log('fired?');
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then(response => response.json())
      .then((jsondata) => {
        // console.log(jsondata);
        // console.log(this, " this");
        const dataByYear = makeDataByYear(jsondata);
        this.setState({ data: jsondata, dataByYear });
        console.log(this.state.data, dataByYear);
      });
      // .then(console.log(this.state.data));
  }

  updateInput(event) {
    const year = event.target.value;
    // ^so we can easily reference the input year
    const matchedYear = console.log(this.state.dataByYear[year]); // eslint-disable-line
    // ^array of transaction objects of the input year
    console.log(matchedYear);

    if (matchedYear && matchedYear.length > 0) {
      const topFiveContributors = topFiveContrib(matchedYear);
      this.setState({ topFiveContributors });
    }
    this.setState({ input: event.target.value });
  }

  render() {
    // const info = this.state.data;
    // console.log(this.state.data, ' this.state.data?');
    console.log(this.state.data, ' this.state.data in render function'); // eslint-disable-line
    // debugger

    const records = data => data.map((obj, idx) => {
      // produces JSX
      return (
        <li key={idx}>Filer: {obj.filer} Contributor Payee: {obj.contributor_payee} Amount: ${obj.amount}</li>
      );
    });

    const filtered = this.state.data && filterByYear(this.state.data, this.state.input)

    const localColors = [
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

    const getColors = (data, idx) => {
      arguments.length === 2 ? localColors[idx] : localColors[data]
    };

    return (
      <div>
        <div>
          <input type="text" value={this.state.input} onChange={this.updateInput} />
          <h1>raw data | filtered</h1>
          {this.state.data && filtered ? records(filtered) : (this.state.data && records(this.state.data))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10% auto' }} >
              <Chart width={600} height={250}>
                <ChartData data={this.state.top5}>
                  <Pie
                    innerRadius={100} outerRadius={125}
                    onClick={(e, v, i) => {alert(`${labels[i]}`)}}
                    style={(d, i) => ({ fill: getColors(i) })}
                  >
                    <text
                      className="donut-title" textAnchor="middle"
                      x={0} y={0} fontSize={20}
                    >
                      {'Top 5 Contributions for the Year'}
                    </text>
                    <text
                      className="donut-subtitle" textAnchor="middle"
                      x={0} y={18} fontSize={16}
                    >
                      {'(Filler Text)'}
                    </text>
                  </Pie>
                </ChartData>
              </Chart>
        </div>

      </div>

    );
  }
}
