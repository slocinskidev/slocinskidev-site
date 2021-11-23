import React, { FC } from 'react';
import Footer from 'containers/Footer';
import Header from 'containers/Header';

import './Layout.scss';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className="layout">{children}</main>
    <Footer />
  </>
);

export default Layout;
