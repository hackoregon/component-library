'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _RechartsPie = require('./RechartsPie');

var _RechartsPie2 = _interopRequireDefault(_RechartsPie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Recharts Pie', function () {
  var _data$styles$colors$c = {
    data: [{ name: 'Group A', value: 400 }],
    styles: { fontFamily: 'Roboto Condensed', fontSize: '8', color: '#706371', fill: '#706371' },
    colors: ['#a6cee3', '#1f78b4'],
    chartProportions: {
      chartWidth: 2,
      chartHeight: 1,
      iconSize: 0.075,
      pieInnerRadius: 0.2,
      pieOuterRadius: 0.4
    }
  },
      data = _data$styles$colors$c.data,
      colors = _data$styles$colors$c.colors,
      styles = _data$styles$colors$c.styles,
      chartProportions = _data$styles$colors$c.chartProportions;


  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RechartsPie2.default, {
    data: data,
    chartProportions: chartProportions,
    colors: colors,
    styles: styles
  }));

  it('should render a div', function () {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render a div with one child element', function () {
    expect(wrapper.find('div').children()).to.have.length(1);
  });

  it('should render a div with one child element that itself has two children elements', function () {
    expect(wrapper.find('div').children().props().children).to.have.length(2);
  });
});