import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

// Getting there, will update soon...
// TESTING SAYS REFEENCE ERROR: WINDOW IS NOT DEFINED
describe('LeafletMap', () => {
  const wrapper = shallow(<LeafletMap />);
  it('should expect to find a div element', () => {
    expect(wrapper.find('div')).have.length(1);
  })
  it('should render the div with the id "map"', () => {
    expect(wrapper.find('#map')).have.length(1);
  });
});
