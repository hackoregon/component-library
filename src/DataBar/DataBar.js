import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataTable.css';
import { Button, Chart, ChartData, Pie } from '../../src';
import { SimpleSelect } from 'react-selectize';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
} from 'recharts';

export default class DataBar extends React.Component {
  static displayName = 'DataTable';

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      barsMap: [],
      searchData: [],
      largestContributors: [],
      annualContributions: {},
      searchInput: '',
      input: '5591',
      hasData: false,
      titleText: 'Top 5',
      subtitleText: 'Contributors',
      yearOptions: []
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateDataByYear = this.updateDataByYear.bind(this);
    this.updateYearBasedState = this.updateYearBasedState.bind(this);
  }

  componentDidMount() {
    // get all the data from the api
    this.fetchData();
  }

  fetchData = () => {
    // reset the state data to an array w an empty object
    this.setState({ data: [{}] });

    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/${this.state.input}/`)
      .then(response =>  response.json())
      .then(data => this.updateYearBasedState(this.updateDataByYear(data)))
      .catch(ex => console.log('failed', ex));
  };

  updateInput(option) {
    this.setState({ input: option });
  }

  updateSearchInput(option) {
    const yearData = this.state.data[option.value];
    this.setState({ searchInput: option, searchData: yearData, largestContributors: yearData.slice(0, 5) });
  }

  updateDataByYear(records){
    // group the records by year in an object, and calculate annualContributions
    const dataByYear = {};
    const annualContributions = {};
    records.forEach((record) => {
      const year = record.tran_date.slice(0, 4)
      const yearToUpdate = dataByYear[year];
      if (yearToUpdate) {
        dataByYear[year].push(record);
        annualContributions[year] += record.amount;
      } else {
        dataByYear[year] = [record];
        annualContributions[year] = record.amount;
      }
    });

    return { dataByYear: dataByYear, annualContributions: annualContributions};
  };

  updateYearBasedState(data) {

    let dataByYear = data.dataByYear;
    let annualContributions = data.annualContributions;

    const firstYear = dataByYear[Object.keys(dataByYear)[0]];

    const yearOptions = Object.keys(dataByYear).map(function(key) {
      let yearOption = {};
      yearOption['value'] = key;
      yearOption['label'] = key;
      return yearOption
    });

    this.setState({ data: dataByYear, searchData: firstYear, largestContributors: firstYear.slice(0, 5), searchInput: Object.keys(dataByYear)[0], yearOptions: yearOptions, annualContributions: annualContributions, hasData: true})
  }

  onHoverPieChart=(label, value)=> {
    this.setState({titleText: label, subtitleText: value});
  }

  render() {
    // if (this.state.hasData == true ) {
      // pie chart vars
      const labels = this.state.largestContributors.map(function(obj) {
        return obj.contributor_payee;
      });
      const numberOfData = 5;
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
        '#ffffb3'
      ];
      const getRandomValuesArray = (numsOf, func) => [...new Array(numsOf)].map(func);
      const randomizer = () => Math.random() * 100;
      const getColors = (datum, idx) => (arguments.length === 2 ? colors[idx] : colors[datum]);

      const getRandomColors = colors.slice(0, numberOfData);
      const values = this.state.largestContributors.map(function(obj) {
        return obj.amount;
      });

      //styling for drop down
      require('react-selectize/dist/index.css');

      const chartStyle = {
        width: 600,
        height: 350,
      };

      const titleFontSize = 24;
      const subtitleFontSize = 14;
      const innerRadius = 65;
      const outerRadius = 130;

      let barsMap = [];
      if (Object.keys(this.state.annualContributions).length > 0) {
        let annualContributions = this.state.annualContributions;
        // debugger
        for (let [year, amount] of Object.entries(annualContributions)) {
          barsMap.push({year, amount});
        }
        // this.state.barsMap = barsMap;
      }

      // debugger

      // data table vars
      const data = this.state.searchData.length > 0 ? this.state.searchData :  this.state.data;
      let header = [];
      let rows = [];
      //  if not empty, grabs a record to pull header tags
      if (Object.keys(data).length !== 0 && data.constructor !== Object) {
        const forHeader = data[0];
        header = Object.keys(forHeader).map(key =>
          <th key={key}>{key}</th>,
        );
      }
      // wraps each item in a <td> tag
      for (let i = 0; i < data.length; i += 1) {
        const pullInfo = Object.keys(data[i]).map(key =>
          <td key={key}>{data[i] !== null ? data[i][key] : 'Blank'}</td>,
        );
        // builds rows list from each mapped record
        rows.push(pullInfo);
      }
      // wraps each row with a <tr> tag
      rows = rows.map((row, i) =>
        <tr key={i}>{row}</tr>,
      );
    // }

    return (
      <div>
        { this.state.hasData == true ?
          <div>
            <div>
              <BarChart layout="horizontal" width={730} height={500} data={barsMap}>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar type="monotone" dataKey="amount" fill="#8884d8" />
              </BarChart>;
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10% auto' }} >
              <Chart width={chartStyle.width} height={chartStyle.height}>
              <ChartData data={values}>
                <Pie
                  innerRadius={innerRadius} outerRadius={outerRadius}
                  style={(d, i) => ({ fill: getColors(i)})}
                  onClick={(e, d, i) => { console.log(labels[i]) }}
                  onMouseOver={(e, d, i) => { this.onHoverPieChart(labels[i], values[i]) }}
                >
                  <text
                    className="donut-title" textAnchor="middle"
                    x={0} y={0} fontSize={titleFontSize}
                  >
                    {this.state.titleText}
                  </text>
                  <text
                    className="donut-subtitle" textAnchor="middle"
                    x={0} y={18} fontSize={subtitleFontSize}
                  >
                    {this.state.subtitleText}
                  </text>
                </Pie>
              </ChartData>
              </Chart>
            </div>

            <label>Enter Candidate Transactions</label>
            <br />
            <input
              type="text"
              value={this.state.input}
              onChange={this.updateInput}
            />
            <br />
            <Button onClick={this.fetchData} type="submit">Fetch Data</Button>
            <br />
            <label>Search by Year</label>
            <br />
            <SimpleSelect
              placeholder = "Select a Year"
              options={this.state.yearOptions}
              theme="default"
              transitionEnter
              transitionLeave
              hideResetButton={true}
              defaultValue={this.state.searchInput}
              onValueChange={this.updateSearchInput}
            />
            <br />

            <table>
              <thead>
                <tr>
                  {header}
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        : <h2> Data Loading </h2> }
      </div>
    );
  }
}