import React, { forwardRef } from 'react';
import classNames from 'classnames';

import RightArrow from 'common/Icons/RightArrow';
import { Link } from 'gatsby';

import { BUTTON, ButtonProps } from './models.d';

import './Button.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON.VARIANT.LINK,
      isIcon,
      link,
      children = '',
      className,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames('button', className, {
      [`button--${variant}`]: variant,
      [`button--${variant}--icon`]: isIcon,
    });

    const showIcon = isIcon ? <RightArrow /> : null;

    const buttonContent = (
      <span className="button__content">
        <span className="button__label">{children}</span>
        {showIcon}
      </span>
    );

    const renderButton = link ? (
      <Link className={buttonClasses} to={link}>
        {buttonContent}
      </Link>
    ) : (
      <button className={buttonClasses} {...props} ref={ref}>
        {buttonContent}
      </button>
    );

    return renderButton;
  }
);

export default Button;
