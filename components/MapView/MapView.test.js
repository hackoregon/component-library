import React from 'react';
import { shallow } from 'enzyme';
import MapView from './MapView';

describe('MapView', () => {
  const wrapper = shallow(<MapView />);
  it('should render with class base', () => {
    expect(wrapper.props().className).to.contain('base');
  });
  
});
