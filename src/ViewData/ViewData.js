import React from 'react';
import classNames from 'classnames/bind';
import styles from './ViewData.styles.css';

const cx = classNames.bind(styles);

const className = cx({ base: true });

const ViewData = ({ children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

ViewData.displayName = 'ViewData';

ViewData.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default ViewData;
