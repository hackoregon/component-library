import React, { Component } from 'react';

export default class ViewData extends Component {
  static displayName = 'View Data'

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      responseData: '',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  // componentDidMount() {
  clickHandler(input) {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');

    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
    .then(function handleAJAX(response) {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(function callBack(data) {
      document.getElementsByClassName('Data')[0].innerHTML = `
        <h3>This contributor: ${data[input].contributor_payee}</h3>
        <h3>Contributed this amount: $${data[input].amount}</h3>`
      // Attempt at matching zip code
      // function filterCondition(dataInstance) {
      //   dataInstance.zip === parseInt(input, 10)
      // }
      // const filteredArray = data.filter(filterCondition)
      // console.log(filteredArray);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onValueChange}
          placeholder="Enter a number"
        />
        <button onClick={() => this.clickHandler(this.state.value)}>Fetch Data</button>
        <div className={'Data'} />
      </div>
    );
  }
}
