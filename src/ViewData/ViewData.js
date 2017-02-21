import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';


export default class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: {},
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
    };
  }


  // require('es6-promise').polyfill();
  // require('isomorphic-fetch');

  // const campaigndata = fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
  //   .then((response) => {
  //     return response.json();
  //   }
  // );

  componentDidMount() {
    console.log('fired?');
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then(response => response.json())
      .then(datas => this.setState({ data: datas }))
      .then(console.log(this.state.data));
  }

  render() {
    return (
      <div>{this.state.data}</div>
    );
  }
}