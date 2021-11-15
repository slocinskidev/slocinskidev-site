import React, { FC } from 'react';
import { Link as InternalLink } from 'gatsby';
import classNames from 'classnames';

import { LinkProps } from './models';

import './Link.scss';

const Link: FC<LinkProps> = ({ url, ariaLabel, children, customClass, activeClass, ...rest }) => {
  const linkClassnames = classNames('link', customClass);

  const isInternal = /^\/(?!\/)/.test(url);

  const renderLink = isInternal ? (
    <InternalLink
      className={linkClassnames}
      activeClassName={activeClass}
      aria-label={ariaLabel}
      to={url}
      {...rest}
    >
      {children}
    </InternalLink>
  ) : (
    <a
      className={linkClassnames}
      aria-label={ariaLabel}
      href={url}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
    </a>
  );

  return renderLink;
};

export default Link;
