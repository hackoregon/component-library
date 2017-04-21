import * as d3 from 'd3';

// constants
export const width = 960;
export const height = 640;
export const center = { x: width / 2, y: height / 2 };

// category titles and center position
export const category = {
  1: {
    One: { x: width / 4, y: height / 2 },
    Two: { x: width / 2, y: height / 2 },
    Three: { x: (3 / 4) * width, y: height / 2 },
  },
  2: {
    Manditory: { x: width / 3, y: height / 2 },
    Discretionary: { x: width / 1.5, y: height / 2 },
  },
};


// create nodes
/*
   * This data manipulation function takes the raw data from
   * the CSV file and converts it into an array of node objects.
   * Each node will store data and visualization values to visualize
   * a bubble.
   *
   * rawData is expected to be an array of data objects, read in from
   * one of d3's loading functions like d3.csv.
   *
   * This function returns the new node array, with a node in that
   * array for each element in the rawData input.
   */

export const createNodes = (rawData) => {
    // Use the max total_amount in the data as the max in the scale's domain
    // note we have to ensure the total_amount is a number.
  const maxAmount = d3.max(rawData, d => +d.total_amount);

    // Sizes bubbles based on area.
    // @v4: new flattened scale names.
  const radiusScale = d3.scalePow()
      .exponent(0.5)
      .range([2, 85])
      .domain([0, maxAmount]);

    // Use map() to convert raw data into node data.
  const myNodes = rawData.map(d => ({
    id: d.id,
    radius: radiusScale(+d.total_amount),
    value: +d.total_amount,
    name: d.bureau_title,
    group: d.group,
    color: d.color,
    category1: d.category1,
    category2: d.category2,
    x: Math.random() * 900,
    y: Math.random() * 800,
  }));

    // sort them descending to prevent occlusion of smaller nodes.
  myNodes.sort((a, b) => b.value - a.value);

  return myNodes;
};

// regroup bubbles to active category
export const checkProps = (nextProps, props, simulation, resetBubbles) => {
  let regroupBubbles = '';
  if (nextProps.groupByCategory1 === true) {
    regroupBubbles =  (function Cat1() {
      const { forceStrength, categoryCenters1 } = props;
      simulation.force('x', d3.forceX().strength(forceStrength).x(d => categoryCenters1[d.category1].x))
                      .force('y', d3.forceY().strength(forceStrength).y(d => categoryCenters1[d.category1].y));
      simulation.alpha(1).restart();
    }());
  } else if (nextProps.groupByCategory2 === true) {
    regroupBubbles = (function Cat2() {
      const { forceStrength, categoryCenters2 } = props;
      simulation.force('x', d3.forceX().strength(forceStrength).x(d => categoryCenters2[d.category2].x))
                      .force('y', d3.forceY().strength(forceStrength).y(d => categoryCenters2[d.category2].y));
      simulation.alpha(1).restart();
    }());
  }
  if (regroupBubbles === '') {
    return resetBubbles();
  }

  return regroupBubbles;
};
