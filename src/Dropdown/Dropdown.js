import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';
import isClient from '../utils/isClient';
import styles from './Dropdown.styles.css';

// NOTE: temporary fix until webpack 2 comes to storybook - otherwise don't use ! syntax for webpack loaders
// if (isClient) require('!style-loader!css-loader!react-select/dist/react-select.css'); // eslint-disable-line
if (isClient) require('../../assets/react-select.min.css'); // eslint-disable-line

const cx = classNames.bind(styles);

const className = cx({ base: true });

const Dropdown = ({ label, options, onChange, value, clearable, searchable, disabled }) => (
  <div className={className}>
    { label && <h3>{label}</h3> }
    <Select
      options={options}
      onChange={onChange}
      value={value}
      clearable={clearable}
      searchable={searchable}
      disabled={disabled}
    />
  </div>
  );

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,  // eslint-disable-line react/forbid-prop-types
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  clearable: false,
  searchable: true,
  disabled: false,
};

export default Dropdown;
