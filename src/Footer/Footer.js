import React from 'react';
// import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './Footer.css';
import civicLogoStackStandard from '../../assets/civic-logo-stack_standard.svg';

const Footer = props => (
  <div className="Footer">
    <div className="Container">
      <div className="copyright">&copy; Copyright {(new Date()).getFullYear()}</div>
      <img
        alt="Hack Oregon footer logo"
        className="footer-logo"
        src={civicLogoStackStandard}
      />
      {/* <ScrollToTop className="scroll-to-top">
        Back to Top ^
      </ScrollToTop> */}
    </div>
  </div>
);

Footer.displayName = 'Footer';

export default Footer;
