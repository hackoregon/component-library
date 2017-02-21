import React, { Component } from 'react';

export default class ViewData extends Component {
  static displayName = 'View Data'

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      responseData: '',
      divContent: '',
      searchYear: '2015',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  // console.log all the LifeCycle Methods
  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount = () => {
    console.log('Component did mount');
    require('es6-promise').polyfill();
    require('isomorphic-fetch');

    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
    .then(function handleAJAX(response) {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(function addAJAX(data) {
      this.setState({ responseData: data });
    }.bind(this))
    .then(function addInitialYear() {
      const currentYear = this.state.searchYear;
      const firstYear = this.filterByYear();
      const divMarkup = firstYear.map((item, idx) => {
        return `<li key=${idx}>${item.contributor_payee} contributed $${item.amount}</li>`
      });
      this.setState({
        divContent: `
        <h2>${currentYear}</h2>
        <ul>${divMarkup}</ul>
        `,
      });
      document.getElementsByClassName('Data')[0].innerHTML = this.state.divContent;
    }.bind(this))
  };

  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  filterByYear() {
    return (this.state.responseData.filter((value) => {
      return value.tran_date.substring(0, 4) === this.state.searchYear;
    }));
  }

  clickHandler(input, data) {
    document.getElementsByClassName('Data')[0].innerHTML = `
      <h3>This contributor: ${data[input].contributor_payee}</h3>
      <h3>Contributed this amount: $${data[input].amount}</h3>`
  }
    // Attempt at matching zip code
    // function filterCondition(dataInstance) {
    //   dataInstance.zip === parseInt(input, 10)
    // }
    // const filteredArray = data.filter(filterCondition)
    // console.log(filteredArray);

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onValueChange}
          placeholder="Enter a number"
        />
        <button onClick={() => this.clickHandler(this.state.value, this.state.responseData)}>
          Fetch Data
        </button>
        <div className={'Data'} />
      </div>
    );
  }
}
