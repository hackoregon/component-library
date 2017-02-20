import React, { Component } from 'react';

export default class ViewData extends Component {
  static displayName = 'View Data'

  componentDidMount() {
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
      document.getElementsByClassName('Data')[0].innerHTML = `<h3>${data[0].filer}</h3>`;
    });
  }

  render() {
    return (
      <div>
        <input />
        <button>Get Data</button>
        <div className={'Data'} />
      </div>
    );
  }
}
