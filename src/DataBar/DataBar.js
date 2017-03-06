import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataBar.css';
import { Button, Chart, ChartData, Pie } from '../../src';
import { SimpleSelect } from 'react-selectize';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
} from 'recharts';

export default class DataBar extends React.Component {
  static displayName = 'DataBar';

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      barsMap: [],
      searchData: [],
      largestContributors: [],
      annualContributions: {},
      searchInput: '',
      candidateId: 5591,
      candidateName: 'Ted Wheeler',
      candidateOptions: [ {value: 5591, label: 'Ted Wheeler'} , {value: 5580, label: 'Yes For Schools'}],
      hasData: false
    };

    this.updateCandidateInput = this.updateCandidateInput.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateDataByYear = this.updateDataByYear.bind(this);
    this.updateYearBasedState = this.updateYearBasedState.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    // get all the data from the api
    this.fetchData();
  };

  fetchData() {
    // reset the state data to an array w an empty object
    this.setState({ data: [{}] });

    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/${this.state.candidateId}/`)
      .then(response =>  response.json())
      .then(data => this.updateYearBasedState(this.updateDataByYear(data)))
      .catch(ex => console.log('failed', ex));
  };

  updateCandidateInput(option) {
    this.setState({ data: [], searchData: [], hasData: false, candidateId: option.value, candidateName: option.label });
    this.fetchData();
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

    this.setState({ data: dataByYear, searchData: firstYear, largestContributors: firstYear.slice(0, 5), searchInput: Object.keys(dataByYear)[0], annualContributions: annualContributions, hasData: true})
  }

  onHoverPieChart=(label, value)=> {
    this.setState({titleText: label, subtitleText: value});
  }

  render() {
    //styling for drop down
    require('react-selectize/dist/index.css');

    const values = this.state.largestContributors.map(function(obj) {
      return obj.amount;
    });

    let barsMap = [];
    if (Object.keys(this.state.annualContributions).length > 0) {
      let annualContributions = this.state.annualContributions;
      for (let [year, amount] of Object.entries(annualContributions)) {
        barsMap.push({year, amount});
      }
    }

    return (
      <div>
        { this.state.hasData == true ?
          <div>
            <label>Select a Campaign</label>
            <br />
            <SimpleSelect
              placeholder = "Select a Campaign"
              options={this.state.candidateOptions}
              theme="default"
              transitionEnter
              transitionLeave
              hideResetButton={true}
              defaultValue={this.state.candidateName}
              onValueChange={this.updateCandidateInput}
            />
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



          </div>
        : <h2> Data Loading </h2> }
      </div>
    );
  }
}