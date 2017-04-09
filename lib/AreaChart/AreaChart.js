'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StackedAreaChart = function StackedAreaChart(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    _recharts.AreaChart,
    { layout: 'horizontal', width: 730, height: 250, data: data },
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'linearGradient',
        { id: 'colorAa', x1: '0', y1: '0', x2: '0', y2: '1' },
        _react2.default.createElement('stop', { offset: '5%', stopColor: '#8884d8', stopOpacity: 0.8 }),
        _react2.default.createElement('stop', { offset: '95%', stopColor: '#8884d8', stopOpacity: 0 })
      ),
      _react2.default.createElement(
        'linearGradient',
        { id: 'colorBb', x1: '0', y1: '0', x2: '0', y2: '1' },
        _react2.default.createElement('stop', { offset: '5%', stopColor: '#82ca9d', stopOpacity: 0.8 }),
        _react2.default.createElement('stop', { offset: '95%', stopColor: '#82ca9d', stopOpacity: 0 })
      ),
      _react2.default.createElement(
        'linearGradient',
        { id: 'colorCc', x1: '0', y1: '0', x2: '0', y2: '1' },
        _react2.default.createElement('stop', { offset: '5%', stopColor: '#1f78b4', stopOpacity: 0.8 }),
        _react2.default.createElement('stop', { offset: '95%', stopColor: '#1f78b4', stopOpacity: 0 })
      )
    ),
    _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
    _react2.default.createElement(_recharts.YAxis, null),
    _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'aa', stroke: '#8884d8', fillOpacity: 1, fill: 'url(#colorAa)' }),
    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'bb', stroke: '#82ca9d', fillOpacity: 1, fill: 'url(#colorBb)' }),
    _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'cc', stroke: '#1f78b4', fillOpacity: 1, fill: 'url(#colorCc)' })
  );
};

StackedAreaChart.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

exports.default = StackedAreaChart;