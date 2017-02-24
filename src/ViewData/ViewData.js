import React, { Component } from 'react';
import { Chart, ChartData, Pie } from '../';
import { colors, getRandomValuesArray, randomizer } from '../../stories/shared';

// AVOID IMPORTING COLORS TO AVOID CIRCULAR DEPENDENCY

// function getMax(targetRange) {
//   let maxContribution = 0;
//   for (let i = 0; i < targetRange.length; i++) {
//     if (targetRange[i].amount > maxContribution) {
//       maxContribution = targetRange[i].amount;
//     }
//   }
//   return maxContribution;
// }

function prepareJSX(yearArray) {
  return (yearArray.map((item, idx) => {
    return <li key={idx}>{item.contributor_payee} contributed ${item.amount}</li>
  }));
}

function giveMePie() {
  const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
  const numberOfData = 3;
  const getRandomColors = colors.slice(0, numberOfData);
  const getColors = (datum, idx) =>
  (arguments.length === 2 ? getRandomColors[idx] : getRandomColors[datum]);
  const values = [3, 4, 10];
  const style = {
    width: 600,
    height: 250,
  };
  const titleText = 'TITLE';
  const subtitleText = 'subtitle';
  const titleFontSize = 24;
  const subtitleFontSize = 14;
  const innerRadius = 75;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10% auto' }} >
      <Chart width={style.width} height={style.height}>
        <ChartData data={values}>
          <Pie
            innerRadius={innerRadius} outerRadius={110}
            onClick={(e, v, i) => console.log(`${labels[i]} clicked`)}
            style={(d, i) => ({ fill: getColors(i) })}
          >
            <text
              className="donut-title" textAnchor="middle"
              x={0} y={0} fontSize={titleFontSize}
            >
              {titleText}
            </text>
            <text
              className="donut-subtitle" textAnchor="middle"
              x={0} y={18} fontSize={subtitleFontSize}
            >
              {subtitleText}
            </text>
          </Pie>
        </ChartData>
      </Chart>
    </div>
  );
}

export default class ViewData extends Component {
  static displayName = 'View Data'

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      responseData: '',
      divContent: 'Please wait while loading',
      searchYear: '2015',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  // componentWillMount() {
  //   console.log('Component will mount');
  // }

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
    .then((data) => {
      // Add fetch response to state
      this.setState({ responseData: data });
    })
    .then(() => {
      // Add initial year
      const currentYear = this.state.searchYear;
      const firstYear = this.filterByYear(currentYear);
      const divMarkup = prepareJSX(firstYear);
      // const maxReturn = this.getMax(firstYear);
      this.setState({
        divContent: divMarkup,
      });
    });
  };

  // componentWillReceiveProps(nextProps) {
  //   console.log('Component will receive props', nextProps);
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Should component update', nextProps, nextState);
  //   return true;
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Component will update', nextProps, nextState);
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Component did update', prevProps, prevState);
  // }
  //
  // componentWillUnmount() {
  //   console.log('Component will unmount');
  // }

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  filterByYear(year) {
    return (this.state.responseData.filter((value) => {
      return value.tran_date.substring(0, 4) === year;
    }));
  }

  clickHandler(input) {
    this.setState({ searchYear: input });
    const targetYearData = this.filterByYear(input);
    const divMarkup = prepareJSX(targetYearData);
    // const maxReturn = getMax(targetYearData);

    this.setState({
      divContent: divMarkup,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onValueChange}
          placeholder="Enter a number"
        />
        <button onClick={() => this.clickHandler(this.state.value)}>
          Fetch Data
        </button>
        <div className={'PieHere'}>
          {giveMePie()}
        </div>
        <div className={'Data'}>
          <h2>
            {this.state.searchYear}
          </h2>
          <ul>
            {this.state.divContent}
          </ul>
        </div>
      </div>
    );
  }
}
