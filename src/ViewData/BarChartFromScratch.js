import React, { Component } from 'react';

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
      annualContributionSums: '',
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
      // const targetYearData = this.filterByYear(contributionData, this.state.contributionYear);
      // const targetYearAmounts = this.mungeAmounts(targetYearData);
      const annualContributionSums = this.sumAnnualContributions(dataSortedByYear);
      // const barDivs = this.makeBarDivs(annualContributionSums)
      console.log(annualContributionSums);
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
    })
    return returnData;
  }

  sumAnnualContributions = (dataSortedByYear) => {
    const annualContributionSums = dataSortedByYear;
    for (const year in dataSortedByYear) {
      annualContributionSums[year] = dataSortedByYear[year].reduce((a, b) => { return a + b; }, 0);
    }
    return annualContributionSums;
  }

  // makeBarDivs = (annualContributionSums) => {
  //   let barDivs = '';
  //   for (const year in annualContributionSums) {
  //     barDivs += `<div key=${year} style={{ height: ${annualContributionSums[year] / 1000}, width: 200, backgroundColor: 'red' }} />`
  //   }
  //   return barDivs;
  // }

  // filterByYear(contributionData, contributionYear) {
  //   const contributionsFilteredByYear = contributionData.filter((value) => {
  //     return value.tran_date.substring(0, 4) === contributionYear;
  //   });
  //   return contributionsFilteredByYear;
  // }

  // mungeAmounts(targetYearData) {
  //   const targetYearAmounts = targetYearData.map((value) => {
  //     return value.amount;
  //   });
  //   return targetYearAmounts;
  // }
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

  render() {
    return (
      <div>
        <h2>
          Total annual contributions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
          <div key={2010} style={{ height: this.state.annualContributionSums[2010] / 1900, width: 200, color: 'white', backgroundColor: 'red' }}>2010</div>
          <div key={2011} style={{ height: this.state.annualContributionSums[2011] / 1900, width: 200, color: 'white', backgroundColor: 'blue' }}>2011</div>
          <div key={2012} style={{ height: this.state.annualContributionSums[2012] / 1900, width: 200, color: 'white', backgroundColor: 'red' }}>2012</div>
          <div key={2013} style={{ height: this.state.annualContributionSums[2013] / 1900, width: 200, color: 'white', backgroundColor: 'blue' }}>2013</div>
          <div key={2014} style={{ height: this.state.annualContributionSums[2014] / 1900, width: 200, color: 'white', backgroundColor: 'red' }}>2014</div>
          <div key={2015} style={{ height: this.state.annualContributionSums[2015] / 1900, width: 200, color: 'white', backgroundColor: 'blue' }}>2015</div>
          <div key={2016} style={{ height: this.state.annualContributionSums[2016] / 1900, width: 200, color: 'white', backgroundColor: 'red' }}>2016</div>
        </div>
      </div>
    );
  }
}
