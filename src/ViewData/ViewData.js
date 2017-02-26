import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';
import { Chart, ChartData, Pie } from '../';


export default class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: null,
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
      input: '',
      // The ViewData class component has an input property to hold
      // query terms by the user.
    };
    this.updateInput = this.updateInput.bind(this);
    this.filterByYear = this.filterByYear.bind(this);
  }

  componentDidMount = () => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    console.log('fired?');
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then(response => response.json())
      .then((jsondata) => {
        // console.log(jsondata);
        // console.log(this, " this");
        this.setState({ data: jsondata });
      });
      // .then(console.log(this.state.data));
  }

  // Filter jsondata from AJAX request to render only the objects with
  // the given query.
  // filterByYear() {
  //   jsondata.filter((record) => {
  //   return Object.keys(jsondata) === record;
  //   }
  // }

  updateInput(event) {
    this.setState({ input: event.target.value });
  }

  filterByYear() {
    const filtered = (this.state.data.filter((record) => {
      return record.tran_date.substring(0, 4).indexOf(this.state.input) !== -1;
    }));
    return filtered;
    // this.setState({ filtered: filtered });
  }

  render() {
    // const info = this.state.data;
    // console.log(this.state.data, ' this.state.data?');

    const records = (data) => data.map((obj, idx) => {
      return (
        <li key={idx}>Filer: {obj.filer} Contributor Payee: {obj.contributor_payee} Amount: ${obj.amount}</li>
      );
    });
    const filtered = this.state.data && this.filterByYear(this.state.data)

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

    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.updateInput} />
        <h1>raw data | filtered</h1>
        {this.state.data && filtered ? records(filtered) : (this.state.data && records(this.state.data))}
      </div>

    );
  }
}
