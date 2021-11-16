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
        alt="logo"
        customClass="header__logo"
        url={ROOT_PATH}
      />
      <Button variant={BUTTON.VARIANT.OUTLINE} icon />
      <Button variant={BUTTON.VARIANT.CONTAINED} icon>
        Contained
      </Button>
      <Button variant={BUTTON.VARIANT.LINK} icon>
        LINK
      </Button>
    </header>
  );
};

export default Header;
