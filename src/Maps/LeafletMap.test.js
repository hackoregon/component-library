import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap', () => {
  const data = {
    position: [45.521, -122.664],
    zoom: 13,
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  const wrapper = shallow(<LeafletMap
    position={data.position}
    zoom={data.zoom}
    url={data.url}
    attribution={data.attribution}
  />);

  it('should render with Leaflet', () => {
    expect(wrapper).to.be.length(1);
  });

  it('should render a Map component', () => {
    expect(wrapper.find('Map')).to.have.length(1);
  });

  it('should render a TileLayer component', () => {
    expect(wrapper.find('TileLayer')).to.have.length(1);
  });

  it('should have a property of zoom equaling 13', () => {
    expect(wrapper.props().zoom).to.equal(13);
  });
});
