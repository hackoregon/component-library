import React, { Component, PropTypes } from 'react';
import BubbleContainer from './components/BubbleContainer';
import Bubbles from './components/Bubbles';
import createNodes from './createNodes';
import GroupingPicker from './components/GroupingPicker';
import CategoryTitles from './components/CategoryTitles';
import SpendingTitles from './components/SpendingTitles';

import { width, height, center, categoryCenters, spendingCenters } from './constants';

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
              categoryCenters={categoryCenters}
              groupByCategory={grouping === 'category'}
              spendingCenters={spendingCenters}
              groupBySpending={grouping === 'spending'}
              color={this.props.colors}
            />
            {
              grouping === 'category' &&
              <CategoryTitles width={width} categoryCenters={categoryCenters} />
            }
            {
              grouping === 'spending' &&
              <SpendingTitles width={width} spendingCenters={spendingCenters} />
            }
          </BubbleContainer>
        </div>
      </div>
    );
  }
}

BubleAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
};
