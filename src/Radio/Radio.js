import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import RadioButtonGroup from 'react-radio-button';
import styles from './Radio.styles.css';
import Select from 'react-select';

const cx = classNames.bind(styles);

const className = cx({ base: true });

const Radio = ({ listOfItems, selectedItemCallback}) => {
  return
    <RadioButtonGroup
    listOfItems={listOfItems}
    selectedItemCallback={selectedItemCallback}
  />
};

Radio.displayName = 'Radio';

Radio.propTypes = {
  listOfItems: PropTypes.array.isRequired,
  selectedItemCallback: PropTypes.func.isRequired,
}

export default Radio;
