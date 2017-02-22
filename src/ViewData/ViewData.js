import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';


export default class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: [],
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
      input: '',
      // The ViewData class component has an input property to hold
      // query terms by the user.
    };
  }


  // const campaigndata = fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
  //   .then((response) => {
  //     return response.json();
  //   }
  // );

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

  filterByYear() {
    const filtered = (this.state.data.filter((record) => {
      return record.tran_date.substring(0, 4).indexOf(this.state.input) !== -1;
    }));
    this.setState({ data: filtered });
  }

  render() {
    // const info = this.state.data;
    console.log(this.state.data, ' this.state.data?');

    const records = this.state.data.map((obj, idx) => {
      return (
        <div>
          <li key={idx}>{obj.tran_id}</li>
        </div>
      );
    });
    return (
      <div>
        {records}
      </div>
    );
  }
}