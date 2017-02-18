import React from 'react';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames/bind';
import styles from './ViewData.styles.css';
import { Button } from '../../src';

const cx = classNames.bind(styles);
const className = cx({ base: true });

export default class ViewData extends React.Component {
  static displayName = 'ViewData';
  static props = {
    //  children: React.PropTypes.string,
  }
  constructor(props) {
    super(props);

    this.state = {
      target: {},
      input: '',
    };
    this.goFetch = this.goFetch.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  goFetch = () => {
    this.setState({ input: '' });
    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_out/${this.state.input}/`)
      .then(response =>  response.json())
      .then(stories => this.setState({ target: stories }))
      .catch(ex => console.log('failed', ex));
  };

  render() {
    const getInfo = this.state.target;
    let header = [];
    let rows = [];
    //  if not empty, grabs a record to pull header tags
    if (Object.keys(getInfo).length !== 0 && getInfo.constructor !== Object) {
      const forHeader = getInfo[0];
      header = Object.keys(forHeader).map((key) => {
        return (
          <th>{key}</th>
        );
      });
    }
    // wraps each item in a <td> tag
    for (let i = 0; i < getInfo.length; i += 1) {
      const pullInfo = Object.keys(getInfo[i]).map((key) => {
        return (
          <td>{getInfo[i] !== null ? getInfo[i][key] : 'null'}</td>
        );
      });
      // builds rows list from each mapped record
      rows.push(pullInfo);
    }
    // warps each row with a <tr> tag
    rows = rows.map((row, i) => {
      return (
        <tr key={i}>{row}</tr>
      );
    });

    return (
      <div>
        <input
          className="dontHaveOne"
          type="text"
          value={this.state.input}
          onChange={this.updateInput}
        />
        <br />
        <button
          onClick={this.goFetch}
          className="dontHaveOne"
          type="submit"
        >Fetch
        </button>
        <table>
          <thead>
            {header}
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
