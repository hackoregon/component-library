import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';


class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      data: [],
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
    };
  }

  componentWillMount() {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');

    // const campaigndata = fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
    //   .then((response) => {
    //     return response.json();
    //   }
    // );


    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/').then((response) => {
      // this.setState({
      //   id:
      //   records:
      // })
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((data) => {
      this.state.data = data;
      this.setState(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default ViewData;