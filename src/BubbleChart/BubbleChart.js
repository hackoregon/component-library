import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';
import BubbleChart from './components/BubbleChart';
import Bubbles from './components/Bubbles';
import YearsTitles from './components/YearsTitles';
import GroupingPicker from './components/GroupingPicker';
import { createNodes } from './utils';
import { width, height, center, yearCenters } from './constants';

export default class App extends Component {
  state = {
    data: [],
    grouping: 'all',
  }

  componentWillMount() {
    const data = this.props.data;
    if (!data) return;
    this.setState({
      data: createNodes(data),
    });
  }

  onGroupingChanged = (newGrouping) => {
    this.setState({
      grouping: newGrouping,
    });
  }

  render() {
    const { data, grouping } = this.state;

    return (
      <div className="App">
        <GroupingPicker onChanged={this.onGroupingChanged} active={grouping} />
        <BubbleChart width={width} height={height}>
          <Bubbles data={data} forceStrength={0.03} center={center} yearCenters={yearCenters} groupByYear={grouping === 'year'} />
          {
            grouping === 'year' &&
            <YearsTitles width={width} yearCenters={yearCenters} />
          }
        </BubbleChart>
      </div>
    );
  }
}
