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
      dataByYear: {},
      filterYear: '2016',
      candidate: '5591',
      topFiveContrib: [5, 4, 3, 2, 1],
    };
    this.goFetch = this.goFetch.bind(this);
    this.whatData = this.whatData.bind(this);
    this.updatefilterYear = this.updatefilterYear.bind(this);
    this.setCandidate = this.setCandidate.bind(this);
  }

  componentDidMount() {
    this.goFetch();
  }

  setCandidate(e) {
    this.setState({ candidate: e.target.value });
  }

  whatData() {
    console.log(this.state.dataByYear);
  }

  goFetch = () => {
    fetch(`http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/${this.state.candidate}/`)
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
      .then(dataByYear => this.setState({ dataByYear }))
      .catch(ex => console.log('failed', ex));
  };

  updatefilterYear(e) {
    this.setState({ filterYear: e.target.value });
  }

  render() {
    const getInfo = this.state.filteredData;

    return (
      <div>
        <div onChange={this.setCandidate}>
          <input type="radio" value="5591" name="candidate" /> Ted
          <span>     </span>
          <input type="radio" value="5588" name="candidate" /> Faye
        <Button
          onClick={this.goFetch}
          type="submit"
        >Fetch
        </Button>
        </div>
        <input
          type="text"
          value={this.state.filterYear}
          onChange={this.updatefilterYear}
        />
        <Button
          onClick={this.whatData}
          type="submit"
        >Top Contribs
        </Button>
      </div>
    );
  }
}
