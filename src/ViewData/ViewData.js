import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.styles.css';

const cx = classNames.bind(styles);
const className = cx({ base: true });

const campaigndata = 'http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/';

class ViewData extends Component {
  constructor(props) {
    super(props);
    // some local state to manage passing
    // data
    this.state = {
      records: [],
      // Before the component renders, it hasn't reached out to
      // the API yet, so we write a placeholder for the data first,
      // and later update it with a life cycle method.
    };
  }

  componentDidMount() {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    fetch(campaigndata).then(function(response) {
      // this.setState({
      //   id:
      //   records:
      // })
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    });
  }

  render() {
    return (

    );
  }
};

export default ViewData;