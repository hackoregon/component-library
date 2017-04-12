'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AreaChart = require('./AreaChart');

var _AreaChart2 = _interopRequireDefault(_AreaChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AreaChart', function () {
  var _data$colors = {
    data: [{ name: 'Year 1', Line1: 6000, Line2: 4000, Line3: 2000 }, { name: 'Year 2', Line1: 3000, Line2: 2000, Line3: 1500 }],
    colors: ['#a6cee3', '#1f78b4', '#b2df8a']
  },
      data = _data$colors.data,
      colors = _data$colors.colors;


  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AreaChart2.default, {
    data: data,
    colors: colors
  }));

  it('should render a div', function () {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render a div with one child element', function () {
    expect(wrapper.find('div').children()).to.have.length(1);
  });

  it('should render a div with one child element that itself has seven children elements', function () {
    expect(wrapper.find('div').children().props().children).to.have.length(7);
  });
});