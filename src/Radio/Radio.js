import React from 'react';
import classNames from 'classnames/bind';
import RadioButtonGroup from 'react-radio-button';
import styles from './Radio.styles.css';
import Select from 'react-select';

const cx = classNames.bind(styles);

const className = cx({ base: true });

const Radio = ({ options, onChange, value, clearable, searchable, disabled, isOptionUnique, isValidNewOption, onNewOptionCreator, onNewOptionClick, shouldKeyDownEventCreateNewOptions }) => (
  <Select.Creatable
      isOptionUnique={isOptionUnique}
      isValidNewOption={isValidNewOption}
      onNewOptionCreator={onNewOptionCreator}
      onNewOptionClick={onNewOptionClick}
      shouldKeyDownEventCreateNewOptions={shouldKeyDownEventCreateNewOptions}
      className={className}
      options={options}
      onChange={onChange}
      value={value}
      clearable={clearable}
      searchable={searchable}
      disabled={disabled}
  />
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  disabled: PropTypes.bool,
  isOptionUnique: PropTypes.func.isRequired,
  isValidNewOption: PropTypes.func.isRequired,
  onNewOptionCreator: PropTypes.func.isRequired,
  onNewOptionClick: PropTypes.func.isRequired,
  shouldKeyDownEventCreateNewOptions: PropTypes.func.isRequired,
}

Radio.defaultProps = {
  clearable: false,
  searchable: true,
  disabled: false,
}
export default Radio;
