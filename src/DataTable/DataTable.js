import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './DataTable.css';
import { Button } from '../../src';

export default class DataTable extends React.Component {
  static displayName = 'DataTable';
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      target: {},
      input: '',
      direction: '',
    };
    this.fetchData = this.fetchData.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.setDirection = this.setDirection.bind(this);
  }

  componentDidMount() {
    // get all the data
    this.fetchData();
  }

  setDirection(e) {
    this.setState({ direction: e.target.value });
  }

  fetchData = () => {
    this.setState({ input: '' });
    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_${this.state.direction}/${this.state.input}/`)
      .then(response =>  response.json())
      .then(stories => this.setState({ target: stories }))
      .catch(ex => console.log('failed', ex));
  };

  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const getInfo = this.state.target;
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
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateInput}
        />
        <div onChange={this.setDirection}>
          <input type="radio" value="in" name="direction" /> In
          <input type="radio" value="out" name="direction" /> Out
        </div>
        <br />
        <Button
          onClick={this.fetchData}
          type="submit"
        >Fetch
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