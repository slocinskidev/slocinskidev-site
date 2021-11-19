import React from 'react';
import classNames from 'classnames';

import './Hamburger.scss';

const Hamburger = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  const hamburgerClasses = classNames('hamburger', {
    'hamburger--active': isActive,
  });

  return (
    <button className={hamburgerClasses} onClick={() => toggleActive()}>
      <span className="hamburger__bar" />
    </button>
  );
};

export default Hamburger;
