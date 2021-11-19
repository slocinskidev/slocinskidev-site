import React, { FC } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import { LogoProps, LOGO } from './models.d';

import './Logo.scss';

const Logo: FC<LogoProps> = ({
  variant,
  customClass,
  link,
  logoAlt,
  linkAlt,
}) => {
  const variantClassnames = classNames('logo', customClass);

  const getLogo = (logoVariant?: LOGO.VARIANT) => {
    const variantsMap = {
      [LOGO.VARIANT.PRIMARY]: (
        <StaticImage
          src="../../assets/images/logo/logo-svg.svg"
          alt={logoAlt}
          placeholder="blurred"
          className={variantClassnames}
        />
      ),
      [LOGO.VARIANT.SECONDARY]: (
        <StaticImage
          src="../../assets/images/logo/logo-svg-light.svg"
          alt={logoAlt}
          placeholder="blurred"
          className={variantClassnames}
        />
      ),
      [LOGO.VARIANT.TERTIARY]: (
        <StaticImage
          src="../../assets/images/logo/logo.png"
          alt={logoAlt}
          placeholder="blurred"
          className={variantClassnames}
        />
      ),
    };

    return logoVariant
      ? variantsMap[logoVariant]
      : variantsMap[LOGO.VARIANT.PRIMARY];
  };

  const renderComponent = link ? (
    <Link to={link} aria-label={linkAlt} className="logo__link">
      {getLogo(variant)}
    </Link>
  ) : (
    getLogo(variant)
  );
  return renderComponent;
};

export default Logo;
