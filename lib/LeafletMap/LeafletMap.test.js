'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactLeaflet = require('react-leaflet');

var _LeafletMap = require('./LeafletMap');

var _LeafletMap2 = _interopRequireDefault(_LeafletMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LeafletMap', function () {
  var props = {
    width: 600,
    height: 400,
    zoom: 5,
    center: [20, 10],
    scrollWheelZoom: true
  };

  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
    _LeafletMap2.default,
    props,
    _react2.default.createElement('div', null),
    _react2.default.createElement('span', null)
  ));

  /**
   * shorthand getter function to find react-leaflet map
   */
  var getMap = function getMap() {
    return wrapper.find(_reactLeaflet.Map).at(0);
  };

  it('should render a react-leaflet map', function () {
    expect(wrapper.find(_reactLeaflet.Map)).to.have.length(1);
  });

  it('should pass all "extra" props to react-leaflet map', function () {
    var zoom = props.zoom,
        center = props.center,
        scrollWheelZoom = props.scrollWheelZoom;

    expect(getMap()).to.have.props({ zoom: zoom, center: center, scrollWheelZoom: scrollWheelZoom });
  });

  it('should render at least one tile-layer inside react-leaflet map', function () {
    expect(getMap().find(_reactLeaflet.TileLayer)).to.have.length.above(0);
  });

  it('should create a map of specified width and height', function () {
    expect(getMap()).to.have.style('width', '600px');
    expect(getMap()).to.have.style('height', '400px');
  });

  it('should pass children to react-leaflet map', function () {
    expect(getMap().children().find('div')).to.have.length(1);
    expect(getMap().children().find('span')).to.have.length(1);
  });
});