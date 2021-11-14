import React, { FC } from 'react';
import { Link } from 'gatsby';
import { ROOT_PATH } from 'utils/constants';

import { ILogo } from './models';

const Logo: FC<ILogo> = ({ to = ROOT_PATH }) => {
  return <Link to={to}>Logo</Link>;
};

export default Logo;
