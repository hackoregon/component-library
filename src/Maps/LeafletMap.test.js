import React from 'react';
import { shallow } from 'enzyme';
import Leaflet from './Leaflet';

describe('Leaflet', () => {
  const data = 'data';

  it('should render with Leaflet', () => {
    const wrapper = shallow(<Leaflet data={data} />);
    expect(wrapper).to.be.length(1);
  });

  it('should render with class mapSize', () => {
    const wrapper = shallow(<Leaflet data={data} />);
    expect(wrapper.props().className).to.contain('mapSize');
  });

  it('should render with zoom of 14', () => {
    const wrapper = shallow(<Leaflet zoom={14} position={[45.5234500, -122.6762100]} />);
    expect(wrapper.props().zoom).to.equal(14);
  });
});
