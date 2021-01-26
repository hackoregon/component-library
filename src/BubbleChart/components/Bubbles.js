import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import tooltip from './Tooltip';
import styles from './Tooltip.css';
import { checkProps } from '../utils';

export default class Bubbles extends React.Component {
  constructor(props) {
    super(props);
    const { forceStrength, center } = props;
    this.simulation = d3.forceSimulation()
      .velocityDecay(0.2)
      .force('x', d3.forceX().strength(forceStrength).x(center.x))
      .force('y', d3.forceY().strength(forceStrength).y(center.y))
      .force('charge', d3.forceManyBody().strength(this.charge.bind(this)))
      .on('tick', this.ticked.bind(this))
      .stop();
  }

  state = {
    g: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.renderBubbles(nextProps.data);
    } else {
      checkProps(nextProps, this.props, this.simulation, this.resetBubbles);
    }
  }

  shouldComponentUpdate() {
    // we will handle moving the nodes on our own with d3.js
    // make React ignore this component
    return false;
  }

  onRef = (ref) => {
    this.setState({ g: d3.select(ref) }, () => this.renderBubbles(this.props.data));
  }

  ticked() {
    this.state.g.selectAll('.bubble')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
  }

  charge(d) {
    return -this.props.forceStrength * (d.radius ** 2.0);
  }

  resetBubbles = () => {
    const { forceStrength, center } = this.props;
    this.simulation.force('x', d3.forceX().strength(forceStrength).x(center.x))
                    .force('y', d3.forceY().strength(forceStrength).y(center.y));
    this.simulation.alpha(1).restart();
  }

  renderBubbles(data) {
    const bubbles = this.state.g.selectAll('.bubble').data(data, d => d.id);

    // Exit
    bubbles.exit().remove();

    // Enter
    const bubblesE = bubbles.enter()
      .append('circle')
      .classed('bubble', true)
      .attr('r', 0)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('fill', d => d.color)
      .attr('stroke', d => d3.rgb(d.color).darker())
      .attr('stroke-width', 2)
      .on('mouseover', showDetail)  // eslint-disable-line
      .on('mouseout', hideDetail) // eslint-disable-line

    bubblesE.transition().duration(2000).attr('r', d => d.radius).on('end', () => {
      this.simulation.nodes(data)
      .alpha(1)
      .restart();
    });
  }

  render() {
    return (
      <g ref={this.onRef} className={styles.tooltip} />
    );
  }
}

Bubbles.propTypes = {
  center: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  forceStrength: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

/*
* Function called on mouseover to display the
* details of a bubble in the tooltip.
*/
export function showDetail(d) {
    // change outline to indicate hover state.
  d3.select(this).attr('stroke', 'black');

  const content = `<span class=${styles.name}>Title: </span>
                   <span class="value">
                    ${d.name}
                   </span><br/>`
                    +
                  `<span class=${styles.name}>Amount: </span>
                   <span class="value">
                    ${d.value}
                   </span><br/>`
                    +
                  `<span class=${styles.name}>Category: </span>
                   <span class="value">
                    ${d.category}
                   </span><br/>`
                   +
                 `<span class=${styles.name}>Spending: </span>
                  <span class="value">
                   ${d.spending}
                  </span><br/>`;
  tooltip.showTooltip(content, d3.event);
}

/*
* Hides tooltip
*/
export function hideDetail() {
    // reset outline
  d3.select(this)
      .attr('stroke', d => d3.rgb(d.color).darker());

  tooltip.hideTooltip();
}
