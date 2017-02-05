import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.styles.css';

const cx = classNames.bind(styles);
// It seems this line binds a style guide to classNames

const className = cx({ base: true });

const Button = ({ children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

Button.displayName = 'Button';

Button.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
  // check that `children` and `onClick` are the
  // data types we expect
};

export default Button;
