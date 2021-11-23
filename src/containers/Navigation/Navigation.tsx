import React, { FC } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import Logo, { LOGO } from 'common/Logo';
import { NAVIGATION, ROOT_PATH } from 'utils/constants';

import { NavigationProps } from './models';

import './Navigation.scss';

const Navigation: FC<NavigationProps> = ({ isActive }) => {
  const navigationClasses = classNames('navigation', {
    'navigation--active': isActive,
  });

  const renderNavigationItems = NAVIGATION?.map(({ name, path, alt }) => (
    <li key="name" className="navigation__link">
      <Link to={path} aria-label={alt}>
        {name}
      </Link>
    </li>
  ));

  return (
    <nav className={navigationClasses}>
      <Logo
        variant={LOGO.VARIANT.SECONDARY}
        logoAlt="logo"
        customClass="navigation__logo"
        link={ROOT_PATH}
      />
      <ul className="navigation__list">{renderNavigationItems}</ul>
    </nav>
  );
};

export default Navigation;
