import React, { Component, PropTypes } from 'react';
import BubbleContainer from './components/BubbleContainer';
import Bubbles from './components/Bubbles';
import createNodes from './createNodes';
import GroupingPicker from './components/GroupingPicker';
import YearsTitles from './components/YearsTitles';
import { width, height, center, yearCenters } from './constants';

export default class BubleAreaChart extends Component {

  state = {
    data: [],
    grouping: 'all',
  }

  componentWillMount() {
    this.setState({
      data: createNodes(this.props.data),
    });
  }

  onGroupingChanged = (newGrouping) => {
    this.setState({
      grouping: newGrouping,
    });
  };

  render() {
    const { data, grouping } = this.state;
    return (
      <div>
        <GroupingPicker onChanged={this.onGroupingChanged} active={grouping} />
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
          <BubbleContainer width={width} height={height}>
            <Bubbles
              data={data}
              forceStrength={0.03}
              center={center}
              yearCenters={yearCenters}
              groupByYear={grouping === 'year'}
              color={this.props.colors}
            />
            {
              grouping === 'year' &&
              <YearsTitles width={width} yearCenters={yearCenters} />
            }
          </BubbleContainer>
        </div>
      </div>
    );
  }
}

BubleAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
};
