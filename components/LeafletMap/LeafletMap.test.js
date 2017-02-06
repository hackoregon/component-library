import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap', () => {
  const position = [45.52, -122.67];
  const zoom = 11;

  it('should render a map', () => {
    const wrapper = shallow(<LeafletMap postion={position} zoom={zoom} />);
    expect(wrapper.find('map')).to.have.length(1);
  });

  it('should render with class mapSize', () => {
    const wrapper = shallow(<Leaflet postion={position} zoom={zoom} />);
    expect(wrapper.props().className).to.contain('mapStyles');
  });


});