import React from 'react';

import WaveImage from 'common/SVG/WaveImage';

import './RecentArticles.scss';

const Header = () => {
  console.log('hero');

  return (
    <section className="recent-articles">
      <WaveImage className="recent-articles__image" />
      <div className="recent-articles__wrapper">
        <div className="recent-articles__content">
          <h2 className="recent-articles__title">Ostatnie artykuły</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
