import React from 'react';
import Icon from '../Icon/Icon';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import isClient from '../utils/isClient';
// import civicLogoStackStandard from ;
import styles from './Footer.css';

console.log(styles.Footer);

const Footer = props => (
  <div className={styles.Footer}>
    <div className={styles.Container}>
      <div className={styles.copyright}>&copy; Copyright {(new Date()).getFullYear()}</div>

      <img
        alt="Hack Oregon footer logo"
        className="footer-logo"
        src={isClient ? require('../../assets/civic-logo-stack_standard.svg') : ''}

      />
      <ScrollToTop>
        <div className="scroll-to-top">
          <Icon className="fa fa-angle-up" />
          <br />
          Back to Top
        </div>
      </ScrollToTop>
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
// src={isClient ? require('../../assets/civic-logo-stack_standard.svg') : ''}
