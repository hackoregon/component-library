import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'; //eslint-disable-line
// import { whereBy } from 'ramda';

// function makeYearData(data) {
//   const yearData = [];
//   data.forEach((month) => {
//     for (let i = 0; i < month.length; i++) {
//       yearData.push(month[i]);
//     }
//   });
//   return yearData;
// }

const splitForYear = date => date.split('-')[0];

const filterByYear  = (transactions) => {
  const dataByYear = {};
  transactions.forEach((t) => {
    const year = splitForYear(t.tran_date);
    const yearToUpdate = dataByYear[year];
    if (yearToUpdate) {
      dataByYear[year].push(t);
    } else {
      dataByYear[year] = [t];
    }
  });
  return dataByYear;
};


function reduceData(year, data) {
  return data[year] && data[year].reduce((acc, item) =>  acc + item.amount, 0);
}

export default class ViewData extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      display: null,
    };
  }

  componentDidMount() {
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response;
      })
      .then(json => filterByYear(json))
      .then(data => this.setState({ data }));
  }

  renderData = data => (
    <div>
      <h5>{data.filer}</h5>
      <p>
        <span>{data.tran_date}</span> | <span>{data.contributor_payee}</span> | <span>{data.amount}</span>
      </p>
    </div>
)

  renderYear = year => this.setState({ display: this.state.data[year] });
  getYears = () => Object.keys(this.state.data);

  render() {
    let mappedData;
    if (this.state.data) {
      mappedData = this.getYears().map(year => reduceData(year, this.state.data));
      // console.log(mappedData);
    }

    return (
      <div>
        <select onChange={this.renderYear} name="years" id="years">
          {this.state.data && this.getYears().map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <h4 style={{ textAlign: 'center' }}>Totals</h4>
        <ul style={{ listType: 'none' }}>
          {mappedData && mappedData.map((total, idx) => <li key={idx}>{total}</li>)}
        </ul>
        {this.state.display && (this.renderData(this.state.display) || 'Loading...')}
      </div>
    );
  }

}
