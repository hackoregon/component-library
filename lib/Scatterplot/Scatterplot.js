'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 }, { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 }, { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }];

var Scatterplot = function Scatterplot() {
  return _react2.default.createElement(
    _recharts.ScatterChart,
    { width: 400, height: 400, margin: { top: 20, right: 20, bottom: 20, left: 20 } },
    _react2.default.createElement(_recharts.XAxis, { dataKey: 'x', name: 'stature', unit: 'cm' }),
    _react2.default.createElement(_recharts.YAxis, { dataKey: 'y', name: 'weight', unit: 'kg' }),
    _react2.default.createElement(_recharts.Scatter, { name: 'A school', data: data, fill: '#8884d8' }),
    _react2.default.createElement(_recharts.CartesianGrid, null),
    _react2.default.createElement(_recharts.Tooltip, { cursor: { strokeDasharray: '3 3' } })
  );
};

exports.default = Scatterplot;