import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';


export default class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: '',
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
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
  // the given trans_id.
  // filterByKey() {
  //   jsondata.filter((record) => {
  //   return Object.keys(jsondata) === record;
  //   }
  // }

  render() {
    // const info = this.state.data;
    // const records = info.map((obj, idx) => {
    // //   return <
    // });

    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}