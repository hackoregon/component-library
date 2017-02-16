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

    };
    this.goFetch = this.goFetch.bind(this);
  }

  goFetch = () => {
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_out/931/')
      .then(response =>  response.json())
      .then(stories => console.log(stories))
      .catch(ex => console.log('failed', ex));
  };

  render() {
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <Button onClick={this.goFetch}> get my data </Button>
        <div className="panel-list">Return data here!</div>
      </div>
    );
  }
}
