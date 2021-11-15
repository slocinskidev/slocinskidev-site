import React, { FC } from 'react';
import Link from 'common/Link';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import { LogoProps, LOGO } from './models.d';

import './Logo.scss';

const Logo: FC<LogoProps> = ({ variant, customClass, url, alt }) => {
  const variantClassnames = classNames('logo', customClass);

  const renderLogo = () => {
    switch (variant) {
      case LOGO.VARIANT.PRIMARY:
        return (
          <StaticImage
            src="../../assets/images/logo/logo-svg.svg"
            alt={alt}
            placeholder="blurred"
            className={variantClassnames}
          />
        );
      case LOGO.VARIANT.SECONDARY:
        return (
          <StaticImage
            src="../../assets/images/logo/logo-svg-light.svg"
            alt={alt}
            placeholder="blurred"
            className={variantClassnames}
          />
        );
      case LOGO.VARIANT.TERTIARY:
        return (
          <StaticImage
            src="../../assets/images/logo/logo.png"
            alt={alt}
            placeholder="blurred"
            className={variantClassnames}
          />
        );
      default:
        return (
          <StaticImage
            src="../../assets/images/logo/logo.png"
            alt={alt}
            placeholder="blurred"
            className={variantClassnames}
          />
        );
    }
  };

  const renderComponent = url ? (
    <Link url={url} ariaLabel="logo">
      {renderLogo()}
    </Link>
  ) : (
    renderLogo()
  );

  return renderComponent;
};

export default Logo;
