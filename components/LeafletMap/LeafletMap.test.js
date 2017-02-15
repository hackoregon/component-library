import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap', () => {
  const wrapper = shallow(<LeafletMap />);
  it('should render a map', () => {
    expect(wrapper.find('map')).to.have.length(1);
  });
});
