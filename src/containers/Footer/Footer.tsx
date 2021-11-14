import React from 'react';
import { Link } from 'gatsby';
import { FOOTER_URL, FOOTER_TEXT } from 'utils/constants';
import Logo from 'common/Logo';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo customClass="footer__logo" />
      <Link to={FOOTER_URL}>
        <p className="footer__link">{FOOTER_TEXT}</p>
      </Link>
    </footer>
  );
};

export default Footer;
