import React, { useState } from 'react';

import Logo, { LOGO } from 'common/Logo';
import Navigation from 'containers/Navigation';
import Hamburger from 'components/Hamburger';

import { ROOT_PATH } from 'utils/constants';

import './Header.scss';

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo
          variant={LOGO.VARIANT.SECONDARY}
          logoAlt="logo"
          customClass="header__logo"
          link={ROOT_PATH}
        />
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
        <Navigation isActive={isActive} />
      </div>
    </header>
  );
};

export default Header;
