'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dropdown', function () {
  var props = {};
  var testOptions = [{ value: 'dog', label: 'Dog' }, { value: 'cat', label: 'Cat' }, { value: 'giraffe', label: 'Giraffe' }];

  beforeEach(function () {
    props.onChange = _sinon2.default.spy();
    props.value = testOptions[0].value;
    props.options = testOptions;
  });

  it('should render a select dropdown', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, props));
    expect(wrapper.find('Select')).to.have.length(1);
  });

  it('should trigger onChange callback', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, props));
    wrapper.find('Select').simulate('change');

    expect(props.onChange).to.have.property('callCount', 1);
  });
});