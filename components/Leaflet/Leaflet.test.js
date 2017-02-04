import React from 'react';
import { shallow } from 'enzyme';
import Leaflet from './Leaflet';

describe('Leaflet', () => {
  const testString = 'Hello';
  const wrapper = shallow(<Leaflet>{testString}</Leaflet>);
  it('should render a leaflet', () => {
    expect(wrapper.find('leaflet')).to.have.length(1);
  });
  it('should render with class base', () => {
    expect(wrapper.props().className).to.contain('base');
  });
  it('should have the appropriate child text', () => {
    expect(wrapper.text()).to.eql(testString);
  });
});
