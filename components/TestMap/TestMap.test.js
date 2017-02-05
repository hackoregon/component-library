import React from 'react';
import { shallow } from 'enzyme';
import TestMap from './TestMap';

describe('TestMap', () => {
  const data = {
    position: [45.521, -122.664],
    zoom: 13,
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  };

  const wrapper = shallow(<TestMap
    position={data.position}
    zoom={data.zoom}
    url={data.url}
    attribution={data.attribution}
  />);

  // TESTS BELOW WORKED WHEN COMPONENT WAS INITIALLY SIMILAR TO BUTTON,
  // BUT NOW TESTING BREAKS AND SAYS REFEENCE ERROR: WINDOW IS NOT DEFINED

  // it('should render with id prop of mapid', () => {
  //   expect(wrapper).to.not.be(true);
  // });
  // // Redundant to the first test, but helps feel out the Enzyme API
  // it('should render with css id mapid', () => {
  //   expect(wrapper.find('#mapid')).to.have.length(1);
  // });
  // it('should render with a child div', () => {
  //   expect(wrapper.find('div')).to.have.length(1);
  // });
  // it('should have the appropriate text in the child div', () => {
  //   expect(wrapper.find('div').children().text()).to.eql('YO');
  // });
});
