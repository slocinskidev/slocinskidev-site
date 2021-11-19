import React from 'react';

import Logo, { LOGO } from 'common/Logo';
import Hamburger from 'components/Hamburger';

import { ROOT_PATH } from 'utils/constants';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo
        variant={LOGO.VARIANT.SECONDARY}
        logoAlt="logo"
        customClass="header__logo"
        link={ROOT_PATH}
      />
      <Hamburger />
    </header>
  );
};

export default Header;
