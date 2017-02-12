import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap', () => {
  const center = [45.51, -122.68];
  const zoom = 13;
  it('should render a map', () => {
    const wrapper = shallow(<LeafletMap center={center} zoom={zoom} />);
    expect(wrapper.find('map')).to.have.length(1);
  });
});