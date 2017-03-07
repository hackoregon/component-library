import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { MyBar } from '../../src';


export default class ViewData extends Component {
  static displayName = 'ViewData'
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      dataByYear: {},
      annualContribs: [],
      gotData: false,
    };
  }

  componentDidMount() {
    this.goFetch();
  }

  // Get Data Functions
  goFetch = () => {
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then(response => response.json())
      .then((transactions) => {
        const dataByYear = {};
        transactions.forEach((t) => {
          const year = t.tran_date.substring(0, 4);
          const yearToUpdate = dataByYear[year];
          if (yearToUpdate) {
            dataByYear[year].push(t);
          } else {
            dataByYear[year] = [t];
          }
        });
        return dataByYear;
      })
      .then((dataByYear) => {
        const annualContribs = this.totalAnnualContribs(dataByYear);
        this.setState({ dataByYear, annualContribs, gotData: true });
      })
      .catch(ex => console.log('failed', ex)) // eslint-disable-line
  };

  totalAnnualContribs = (dataByYear) => {
    const contributions = Object.keys(dataByYear).map((key) => {
      const contribs = dataByYear[key];
      const year = key;
      const annualContribs = contribs.reduce((sum, item) => sum + item.amount, 0);
      return { Year: year, Contributions: annualContribs, Scale: 1000 };
    });
    contributions.reverse();
    return contributions;
  }

  render() {
    return (
      <div>
        {this.state.gotData === true ?
          <MyBar data={this.state.annualContribs} />
        : <h2>Loading . . .</h2>}
      </div>
    );
  }
}
