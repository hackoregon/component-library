import React from 'react';
import { shallow } from 'enzyme';
import MapView from './MapView';

describe('MapView', () => {
  const wrapper = shallow(<MapView />);

  it('should render a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('should render with class base', () => {
    expect(wrapper.props().className).to.contain('base');
  });
  it('should have the appropriate child text', () => {
    expect(wrapper.text()).to.eql(testString);
  });
});

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
//   });
//
//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).is('.foo')).to.equal(true);
//   });
//
//   it("contains spec with an expectation", function() {
//     expect(mount(<Foo />).find('.foo').length).to.equal(1);
//   });
// });
