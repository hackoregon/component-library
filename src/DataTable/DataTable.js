import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataTable.css';
import { Button } from '../../src';
import { SimpleSelect } from 'react-selectize';

export default class DataTable extends React.Component {
  static displayName = 'DataTable';

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchData: [],
      searchInput: '',
      candidateId: 5591,
      candidateName: 'Ted Wheeler',
      candidateOptions: [ {value: 5591, label: 'Ted Wheeler'} , {value: 5580, label: 'Yes For Schools'}],
      yearOptions: [],
      hasData: false
    };

    this.updateCandidateInput = this.updateCandidateInput.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateDataByYear = this.updateDataByYear.bind(this);
    this.updateYearBasedState = this.updateYearBasedState.bind(this);
  }

  componentDidMount() {
    // get all the data from the api
    this.fetchData();
  }

  fetchData() {
    // reset the state data to an array w an empty object

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
    // group the records by year in an object
    const dataByYear = {};
    records.forEach((record) => {
      const year = record.tran_date.slice(0, 4)
      const yearToUpdate = dataByYear[year];
      if (yearToUpdate) {
        dataByYear[year].push(record);
      } else {
        dataByYear[year] = [record];
      }
    });

    return dataByYear;
  };

  updateYearBasedState(data) {
    const dataKeys = Object.keys(data)
    const lastYear = dataKeys[dataKeys.length - 1]

    const yearOptions = dataKeys.map(function(key) {
      let yearOption = {};
      yearOption['value'] = key;
      yearOption['label'] = key;
      return yearOption
    }).reverse();

    this.setState({ data: data, searchData: data[lastYear], largestContributors: lastYear.slice(0, 5), searchInput: lastYear, yearOptions: yearOptions, hasData: true})
  }

  render() {
    //styling for drop down
    require('react-selectize/dist/index.css');

    // data table vars
    const data = this.state.searchData

    let header = [];
    let rows = [];

    //  creates the header row based off first record keys
    if (Object.keys(data).length !== 0 && data.constructor !== Object) {
      header = Object.keys(data[0]).map(key =>
        <th key={key}>{key}</th>,
      );
    }

    // wraps each record attr item in a <td> tag
    for (let i = 0; i < data.length; i += 1) {
      const dataPoint = Object.keys(data[i]).map(key =>
        <td key={key}>{data[i] !== null ? data[i][key] : 'Blank'}</td>,
      );
      // builds rows list from each mapped record
      rows.push(dataPoint);
    }

    // wraps each row with a <tr> tag
    rows = rows.map((row, i) =>
      <tr key={i}>{row}</tr>,
    );

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