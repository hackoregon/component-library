import React from 'react';
import Icon from '../Icon/Icon';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import civicLogoStackStandard from '../../assets/civic-logo-stack_standard.svg';

import './Footer.css';

const Footer = props => (
  <div className="Footer">
    <div className="Container">
      <div className="copyright">&copy; Copyright {(new Date()).getFullYear()}</div>
      <img
        alt="Hack Oregon footer logo"
        className="footer-logo"
        src={civicLogoStackStandard}
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
