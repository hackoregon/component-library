import React, { Component, PropTypes } from 'react';
import BubbleContainer from './components/BubbleContainer';
import Bubbles from './components/Bubbles';
import GroupingPicker from './components/GroupingPicker';
import CategoryTitles from './components/CategoryTitles';

import { createNodes, width, height, center, category } from './utils';

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
              categoryCenters1={category[1]}
              groupByCategory1={grouping === 'category1'}
              categoryCenters2={category[2]}
              groupByCategory2={grouping === 'category2'}
              color={this.props.colors}
            />
            {
              grouping === 'category1' &&
              <CategoryTitles width={width} categoryCenters={category[1]} />
            }
            {
              grouping === 'category2' &&
              <CategoryTitles width={width} categoryCenters={category[2]} />
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
