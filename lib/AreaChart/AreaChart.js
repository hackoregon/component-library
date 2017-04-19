'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StackedAreaChart = function StackedAreaChart(_ref) {
  var data = _ref.data,
      colors = _ref.colors;

  var gradients = [];
  var lines = [];

  var myKeys = Object.keys(data[0]);
  myKeys.forEach(function (key, index) {
    if (key !== 'name') {
      lines.push(_react2.default.createElement(_recharts.Area, {
        type: 'monotone',
        key: '' + myKeys[index],
        dataKey: '' + myKeys[index],
        stroke: colors[index],
        fillOpacity: 1,
        fill: 'url(#color' + index + ')'
      }));
      gradients.push(_react2.default.createElement(
        'linearGradient',
        {
          key: 'color' + index,
          id: 'color' + index,
          x1: '0', y1: '0', x2: '0', y2: '1'
        },
        _react2.default.createElement('stop', { offset: '5%', stopColor: colors[index], stopOpacity: 0.8 }),
        _react2.default.createElement('stop', { offset: '95%', stopColor: colors[index], stopOpacity: 0.1 })
      ));
    }
  });

  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'space-around', margin: 'auto' } },
    _react2.default.createElement(
      _recharts.AreaChart,
      { width: 730, height: 250, data: data },
      _react2.default.createElement(_recharts.Legend, { layout: 'vertical', iconType: 'square', verticalAlign: 'top', align: 'left' }),
      _react2.default.createElement(
        'defs',
        null,
        gradients
      ),
      _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
      _react2.default.createElement(_recharts.YAxis, null),
      _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
      _react2.default.createElement(_recharts.Tooltip, null),
      lines
    )
  );
};

StackedAreaChart.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  colors: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
};

exports.default = StackedAreaChart;