import React from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.css';

const cx = classNames.bind(styles);

const className = cx({ SecondaryColor: true, RemoveUnderline: true });

const ScrollToTop = ({ children }) => (
  <a aria-label="scroll to top" className={className} href="#">
    {children}
  </a>
);

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
