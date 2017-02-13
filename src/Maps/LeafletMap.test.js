import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Leaflet from './LeafletMap';

describe('Leaflet', () => {
  const markers = [
    { neighborhood: 'Lauralhurst', position: [45.5234500, -122.6762100], popText: 'Marker One.', popUpKey: '1 pop' },
    { neighborhood: 'Ladds Addition', position: [45.5204500, -122.6562100], popText: 'Marker Two.', popUpKey: '2 pop' },
  ];

  const map = {
    zoom: 14,
    minZoom: 12,
    position: [45.5234500, -122.6762100],
    maxBounds: [[45.6500000, -122.8000000], [45.4000000, -122.5000000]],
  };

  describe('Map', () => {
    it('should render with Leaflet', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper).to.be.length(1);
    });

    it('should render with class mapSize', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().className).to.contain('mapSize');
    });

    it('should render with zoom of 14', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().zoom).to.equal(14);
    });
  });

  describe('Marker', () => {
    it('should render with Map', () => {
      const wrapper = mount(<Leaflet map={map} markers={markers} />);
      console.log(wrapper.nodes[0].props);
      expect(wrapper.nodes[0].markers).to.have.length(markers.length);
    });

    it('should render with class mapSize', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().className).to.contain('mapSize');
    });

    it('should render with zoom of 14', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().zoom).to.equal(14);
    });
  });

  describe('Popup', () => {
    it('should render with Leaflet', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper).to.be.length(1);
    });

    it('should render with class mapSize', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().className).to.contain('mapSize');
    });

    it('should render with zoom of 14', () => {
      const wrapper = shallow(<Leaflet map={map} markers={markers} />);
      expect(wrapper.props().zoom).to.equal(14);
    });
  });
});
