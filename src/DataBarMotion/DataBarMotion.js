import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataBarMotion.css';
import { Button, Chart, ChartData, Pie } from '../../src';
import { SimpleSelect } from 'react-selectize';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
} from 'recharts';
import { TransitionMotion, Motion, spring } from 'react-motion';

const willLeaveStyle = ({ style }) => ({
  ...style,
  // put your changed property here
  // startAngle: style.endAngle,
});

export default class DataBarMotion extends React.Component {
  static displayName = 'Data Bar Motion';

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      barsMap: [],
      annualContributions: {},
      input: '5591',
      hasData: false,
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateDataByYear = this.updateDataByYear.bind(this);
    this.updateYearBasedState = this.updateYearBasedState.bind(this);
    this.createDataForBars = this.createDataForBars.bind(this);
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

    const barsMap = this.createDataForBars(annualContributions);

    this.setState({ data: dataByYear, searchInput: Object.keys(dataByYear)[0], annualContributions: annualContributions, barsMap: barsMap, hasData: true})
  }

  createDataForBars(annualContributions) {
    let barsMap = [];

    if (Object.keys(annualContributions).length > 0) {
      for (let [year, amount] of Object.entries(annualContributions)) {
        barsMap.push({year, amount});
      }
    }

    return barsMap
  }

  render() {
    let bars = [];
    let barsMap = this.state.barsMap
    for (var bar of barsMap) {
      bars.push(<div willLeave={willLeaveStyle} className='bar' style={{height: bar.amount/1000}} key={bar.amount}>{bar.year}</div>);
    }

    return (
      <div>
        { this.state.hasData == true ?
          <div>
            <div className='chart'>
              {bars}
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
          </div>
        : <h2> Data Loading </h2> }
      </div>
    );
  }
}