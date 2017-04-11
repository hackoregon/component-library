import React from 'react';
import { shallow } from 'enzyme';
import BarChart from './BarChart';

describe('BarChart', () => {
  const { data, colors } = {
    data: [{ name: 'Year 1', Bar1: 6000, Bar2: 4000 },
           { name: 'Year 2', Bar1: 3000, Bar2: 2000 }],
    colors: ['#a6cee3', '#1f78b4'],
  };

  const wrapper = shallow(
    <BarChart
      data={data}
      colors={colors}
    />,
  );

  it('should render a div', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render a div with one child element', () => {
    expect(wrapper.find('div').children()).to.have.length(1);
  });

  it('should render a div with one child element that itself has seven children elements', () => {
    expect(wrapper.find('div').children().props().children).to.have.length(7);
  });
});
