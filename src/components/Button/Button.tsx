import React, { forwardRef } from 'react';
import classNames from 'classnames';

import ButtonBase from 'common/ButtonBase';
import RightArrow from 'common/IconsSVG/RightArrow';
import Link from 'common/Link';

import { BUTTON, ButtonProps } from './models.d';

import './Button.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON.VARIANT.LINK,
      icon,
      link,
      children = '',
      customClass,
      ...baseProps
    },
    ref
  ) => {
    const buttonClasses = classNames(customClass, {
      [`button--${variant}`]: variant,
      [`button--${variant}--icon`]: icon,
    });

    const showIcon = icon ? <RightArrow /> : null;

    const buttonContent = (
      <span className="button__content">
        <span className="button__label">{children}</span>
        {showIcon}
      </span>
    );

    const buttonReturn = link ? (
      <Link customClass={`button ${buttonClasses}`} url={link}>
        {buttonContent}
      </Link>
    ) : (
      <ButtonBase className={buttonClasses} {...baseProps} ref={ref}>
        {buttonContent}
      </ButtonBase>
    );

    return buttonReturn;
  }
);

export default Button;
