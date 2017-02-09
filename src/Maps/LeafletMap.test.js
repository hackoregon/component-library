import React from 'react';
import { shallow } from 'enzyme';
import leafletMap from './LeafletMap';

describe('<LeafletMap />', () => {
  // const mapDiv = wrapper.find('div').shallow();
  // const leafletMap = mapDiv.find('Map');

  it('should have map', function() {
    expect(leafletMap).to.have.length(1);
    expect(leafletMap).shallow().props()).to.have.property('position', )
  });


describe('<LeafletMap />', () => {
  // const mapDiv = wrapper.find('div').shallow();
  // const leafletMap = mapDiv.find('Map');
  describe('leafletMap', function() {
    it('should have map', function() {
      expect(leafletMap).to.have.length(1);
      expect(leafletMap).shallow().props()).to.have.property('position', )
    });
  });

  // it('should render a button', () => {
  //   expect(wrapper.find('button')).to.have.length(1);
  // });
  // it('should render with class base', () => {
  //   expect(wrapper.props().className).to.contain('base');
  // });
  // it('should have the appropriate child text', () => {
  //   expect(wrapper.text()).to.eql(testString);
  // });
});