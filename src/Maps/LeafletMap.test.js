import React from 'react';
import { mount, shallow } from 'enzyme';
import Leaflet from './LeafletMap';

describe('Leaflet', () => {
  const markers = [
    { neighborhood: 'Laurelhurst', position: [45.5234500, -122.6762100], popText: 'Marker One.', popUpKey: '1 pop' },
    { neighborhood: 'Ladds Addition', position: [45.5204500, -122.6562100], popText: 'Marker Two.', popUpKey: '2 pop' },
  ];
  const map = {
    zoom: 14,
    minZoom: 12,
    position: [45.5234500, -122.6762100],
    maxBounds: [[45.6500000, -122.8000000], [45.4000000, -122.5000000]],
  };
  const data = { map, markers };

  describe('Map', () => {
    it('should render with Leaflet', () => {
      const wrapper = shallow(<Leaflet data={data} />);
      expect(wrapper).to.be.length(1);
    });

    it('should render with class mapSize', () => {
      const wrapper = shallow(<Leaflet data={data} />);
      expect(wrapper.props().className).to.contain('mapSize');
    });

    it('should render with zoom of 14', () => {
      const wrapper = shallow(<Leaflet data={data} />);
      expect(wrapper.props().zoom).to.equal(14);
    });
  });

  describe('Marker', () => {
    it('should render on Map', () => {
      const wrapper = mount(<Leaflet data={data} />);
      expect(wrapper.node.props.data.markers).to.have.length(2);
    });

    it('should render with Neighborhood tag', () => {
      const wrapper = mount(<Leaflet data={data} />);
      const marker = wrapper.node.props.data.markers;
      expect(marker[0].neighborhood).to.contain('Laurelhurst');
    });
  });
});
