import React from 'react';

import Layout from 'layout/Layout';
import Seo from 'common/Seo';
import HeroBanner from 'containers/HeroBanner';
import RecentArticles from 'containers/RecentArticles';
import ShortBio from 'containers/ShortBio';

const Homepage = () => (
  <Layout>
    <Seo title="Homepage" />
    <HeroBanner />
    <RecentArticles />
    <ShortBio />
  </Layout>
);

export default Homepage;
