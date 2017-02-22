import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './ViewData.styles.css';
import { Button } from '../../src';

export default class ViewData extends React.Component {
  static displayName = 'ViewData';
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      initialData: {},
      filteredData: {},
      input: '2016',
      candidate: '931',
    };
    this.goFetch = this.goFetch.bind(this);
    this.filterData = this.filterData.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.setCandidate = this.setCandidate.bind(this);
  }

  componentDidMount() {
    this.goFetch();
  }

  setCandidate(e) {
    this.setState({ candidate: e.target.value });
  }

  filterData() {
    const myFilter = this.state.initialData.filter(item => item.tran_date.substring(0, 4).indexOf(this.state.input) !== -1);
    this.setState({ filteredData: myFilter });
  }

  goFetch = () => {
    console.log(this.state.candidate);
    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_out/${this.state.candidate}/`)
      .then(response => response.json())
      .then(stories => this.setState({ initialData: stories }))
      .catch(ex => console.log('failed', ex));
  };

  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const getInfo = this.state.filteredData;
    let header = [];
    let rows = [];
    //  if not empty, grabs a record to pull header tags
    if (Object.keys(getInfo).length !== 0 && getInfo.constructor !== Object) {
      const forHeader = getInfo[0];
      header = Object.keys(forHeader).map(key =>
        <th key={key}>{key}</th>,
      );
    }
    // wraps each item in a <td> tag
    for (let i = 0; i < getInfo.length; i += 1) {
      const pullInfo = Object.keys(getInfo[i]).map(key =>
        <td key={key}>{getInfo[i] !== null ? getInfo[i][key] : 'null'}</td>,
      );
      // builds rows list from each mapped record
      rows.push(pullInfo);
    }
    // wraps each row with a <tr> tag
    rows = rows.map((row, i) =>
      <tr key={i}>{row}</tr>,
    );

    return (
      <div>
        <div onChange={this.setCandidate}>
          <input type="radio" value="5591" name="candidate" /> Ted
          <span>     </span>
          <input type="radio" value="931" name="candidate" /> Kate
        <Button
          onClick={this.goFetch}
          type="submit"
        >Fetch
        </Button>
        </div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateInput}
        />
        <Button
          onClick={this.filterData}
          type="submit"
        >Filter
        </Button>
        <table>
          <thead>
            <tr>
              {header}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
