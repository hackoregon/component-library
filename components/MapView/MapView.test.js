import React from 'react';
import { shallow } from 'enzyme';
import MapView from './MapView';

describe('MapView', () => {
  // const data = data
  const wrapper = shallow(<MapView></MapView>);

  it('should render with class mapDimensions', () => {
    expect(wrapper.props().className).to.contain('mapDimensions');
  });

});
