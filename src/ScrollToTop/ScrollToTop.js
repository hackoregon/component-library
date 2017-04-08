import React from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.css';

const cx = classNames.bind(styles);

const className = cx({ SecondaryColor: true });

const ScrollToTop = ({ children }) => (
  <a className={className} href="#">
    {children}
  </a>
);

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
