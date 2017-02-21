import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataTable.css';
import { Button } from '../../src';

export default class DataTable extends React.Component {
  static displayName = 'DataTable';
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      search_data: {},
      search_input: '',
      input: '5591',
    };

    this.fetchData = this.fetchData.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.updateSearchDate = this.updateSearchDate.bind(this);
  }

  componentDidMount() {
    // get all the data
    this.fetchData();
  }

  componentWillReceiveProps() {
    //

  }

  fetchData = () => {
    this.setState({ data: {} });

    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/${this.state.input}/`)
      .then(response =>  response.json())
      .then(data => this.setState({ data: data }))
      .catch(ex => console.log('failed', ex));
  };

  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  updateSearchInput(e) {
    this.setState({ search_input: e.target.value });
  }

  updateSearchDate(){
    let filtered_data = this.state.data.filter(
      (item) => {
       return item["tran_date"].indexOf(this.state.search_input) !== -1;
      }
    );
    this.setState({ search_data: filtered_data });
  }

  render() {
    const data = this.state.search_data.length > 0 ? this.state.search_data :  this.state.data;
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

    return (
      <div>
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
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearchInput}
        />
        <br />
        <Button onClick={this.updateSearchDate} type="submit">Sort Data</Button>
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
    );
  }
}