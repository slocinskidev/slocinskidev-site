import React, { FC } from 'react';
import classNames from 'classnames';
import { toggleState } from 'utils/toggleState';

import { HamburgerProps } from './models';

import './Hamburger.scss';

const Hamburger: FC<HamburgerProps> = ({ isActive, setIsActive }) => {
  const hamburgerClasses = classNames('hamburger', {
    'hamburger--active': isActive,
  });

  return (
    <button
      className={hamburgerClasses}
      onClick={() => toggleState(setIsActive)}
    >
      <span className="hamburger__bar" />
    </button>
  );
};

export default Hamburger;
