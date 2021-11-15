import React from 'react';
import Link from 'common/Link';
import { FOOTER_URL, FOOTER_TEXT, ROOT_PATH } from 'utils/constants';
import Logo, { LOGO } from 'common/Logo';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo
        url={ROOT_PATH}
        customClass="footer__logo"
        alt="logo"
        variant={LOGO.VARIANT.TERTIARY}
      />
      <Link url={FOOTER_URL}>
        <p className="footer__link">{FOOTER_TEXT}</p>
      </Link>
    </footer>
  );
};

export default Footer;
