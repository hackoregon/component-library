import React, { Component } from 'react';
import { TransitionMotion, Motion, spring } from 'react-motion';

export default class BarChartFromScratch extends Component {
  static displayName = 'BarChartFromScratch'

  constructor(props) {
    super(props);
    this.state = {
      contributionData: null,
      divContent: 'Please wait while loading',
      annualContributionSums: 0,
    };
  }

  componentDidMount() {
    // console.log('Component did mount');
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
    .then((response) => {
      // Handle fetch response
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((contributionData) => {
      const dataSortedByYear = this.sortByYear(contributionData);
      const annualContributionSums = this.sumAnnualContributions(dataSortedByYear);

      this.setState({ contributionData, annualContributionSums });
    });
  }

  sortByYear(contributionData) {
    const returnData = {};
    contributionData.forEach((object) => {
      const localYear = object.tran_date.substring(0, 4);
      if (returnData[localYear]) {
        returnData[localYear].push(object.amount);
      } else {
        returnData[localYear] = [object.amount];
      }
    });
    return returnData;
  }

  sumAnnualContributions = (dataSortedByYear) => {
    const annualContributionSums = dataSortedByYear;
    for (const year in dataSortedByYear) {
      annualContributionSums[year] = dataSortedByYear[year].reduce((a, b) => a + b, 0);
    }
    return annualContributionSums;
  }

  // MAKE BAR DIVS
  makeBarDivs = (annualContributionSums) => {
    let barDivs = null;
    for (const year in annualContributionSums) {
      barDivs +=   (<Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[year]) }}>
        {value => <div key={year} style={{ height: value.x / 1900, width: 200, color: 'white', backgroundColor: 'blue' }}>year</div>}
      </Motion>);
    }
    return barDivs;
  }

// <div key={year} style={{ height: {annualContributionSums[year] / 1000}, width: 200, backgroundColor: 'red' }}/>

  // FORMER POINTS IN PROMISE SEQUENCE
  // const targetYearData = this.filterByYear(contributionData, this.state.contributionYear);
  // const targetYearAmounts = this.mungeAmounts(targetYearData);
  // const barDivs = this.makeBarDivs(annualContributionSums);

  // LEAVING OFF ARRAY OF BARS
  // const barsMap = this.state.annualContributionSums;
  //   for (const bar of barsMap) {
  //     bars.push(<Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[bar]) }}>
  //       {value => <div key={bar} style={{ height: value.x / 1900, width: 200, color: 'white', backgroundColor: 'blue' }}>{bar}</div>}
  //     </Motion>);
  //   }

  render() {
    return (
      <div>
        <h2>
          Total annual contributions
        </h2>
        {this.state.annualContributionSums &&
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2010]) }}>
              {value => <div key={2010} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'blue' }}>2010</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2011]) }}>
              {value => <div key={2011} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'red' }}>2011</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2012]) }}>
              {value => <div key={2012} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'blue' }}>2012</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2013]) }}>
              {value => <div key={2013} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'red' }}>2013</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2014]) }}>
              {value => <div key={2014} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'blue' }}>2014</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2015]) }}>
              {value => <div key={2015} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'red' }}>2015</div>}
            </Motion>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.annualContributionSums[2016]) }}>
              {value => <div key={2016} style={{ height: value.x / 3000, width: 125, color: 'white', backgroundColor: 'blue' }}>2016</div>}
            </Motion>

          </div>
      }
      </div>
    );
  }
}
