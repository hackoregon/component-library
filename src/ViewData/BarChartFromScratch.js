import React, { Component } from 'react';

// function sumAnnualContributions(contributionData) {
//
//
//   const annualSums =
//     [
//       {
//         name: 2010,
//         x: mungedData.Y2010.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2011,
//         y: mungedData.Y2011.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2012,
//         x: mungedData.Y2012.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2013,
//         y: mungedData.Y2013.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2014,
//         x: mungedData.Y2014.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2015,
//         y: mungedData.Y2015.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//       {
//         name: 2016,
//         x: mungedData.Y2016.reduce((a, b) => {
//           return a + b;
//         }, 0),
//       },
//     ]
//   console.log(annualSums);
//   return annualSums;
// }

export default class BarChartFromScratch extends Component {
  static displayName = 'BarChartFromScratch'

  constructor(props) {
    super(props);
    this.state = {
      contributionData: '',
      divContent: 'Please wait while loading',
      searchYear: '2016',
      totalYearContributions: '',
    };
  }

  componentDidMount = () => {
    // console.log('Component did mount');
    require('es6-promise').polyfill();
    require('isomorphic-fetch');

    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_in/5591/')
    .then((response) => {
      // Handle fetch response
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((contributionData) => {
      this.setState({ contributionData });
    })
  }

    // this.sumAnnualContributions(data);


  //
  //   .then(() => {
  //     // Add initial year
  //     const currentYear = this.state.searchYear;
  //     const firstYear = this.filterByYear(currentYear);
  //     const divMarkup = prepareJSX(firstYear);
  //     const topFive = getTopFive(firstYear);
  //     const totalContributions = firstYear.length;
  //     const mungedData = mungeData(this.state.responseData);
  //     const barGraphReturn = getYearTotals(mungedData);
  //     this.setState({
  //       divContent: divMarkup,
  //       topFiveData: topFive,
  //       totalYearContributions: totalContributions,
  //       reducedDataObject: mungedData,
  //       barGraphData: barGraphReturn,
  //     });
  //   });
  // };

  // filterByYear(year) {
  //   return (this.state.responseData.filter((value) => {
  //     return value.tran_date.substring(0, 4) === year;
  //   }));
  // }

  render() {
    return (
      <div>
        <h2>
          Total annual contributions
        </h2>
        <div style={{ height: 200, width: 200, backgroundColor: 'red' }} />
      </div>
    );
  }
}
