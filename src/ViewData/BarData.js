import React, {Component} from 'react';
// import { Motion, spring } from 'react-motion';

class BarData extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://54.213.83.132/hackoregon/http/current_candidate_transactions_out/931/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const contributionData = this.state.data.map(item => item.amount);
    const filedDates = this.state.data.map((item, idx) => item.filed_date);
    let years = filedDates.map(value => {
      let firstFour = value.substring(0, 4);
      return firstFour;
    });
    const sortHighToLow = (a,b) => b-a;
    const containerHeight = 300;
    const containerWidth = 950;

    const topFiveContributors = contributionData.sort(sortHighToLow)
                                                .slice(0, 50)
                                                .map((item, idx) => {
      //pushes bars to bottom of container, instead of hanging like stalactites
      const marginFromTop = containerHeight-(item/1000);
      return(
        <div
          key={idx}
          style={{ height: `${item/1000}px`, width: '100px', backgroundColor: 'blue', margin: `${marginFromTop}px 5px 0 5px`}}>
        </div>
      )
    });

    return (
      <div style={{ height: `${containerHeight}px`, width: `${containerWidth}px`, border: '1px solid black', display: 'flex'}}>
        { topFiveContributors }
      </div>
    );
  }

}

export default BarData;
