import React from 'react';

import Logo, { LOGO } from 'common/Logo';
import { ROOT_PATH } from 'utils/constants';

import './Header.scss';
import Button, { BUTTON } from 'components/Button';

const Header = () => {
  return (
    <header className="header">
      <Logo
        variant={LOGO.VARIANT.SECONDARY}
        logoAlt="logo"
        customClass="header__logo"
        link={ROOT_PATH}
      />
      <Button variant={BUTTON.VARIANT.OUTLINE} isIcon />
      <Button variant={BUTTON.VARIANT.CONTAINED} isIcon>
        Contained
      </Button>
      <Button variant={BUTTON.VARIANT.LINK} isIcon>
        LINK
      </Button>
    </header>
  );
};

export default Header;
