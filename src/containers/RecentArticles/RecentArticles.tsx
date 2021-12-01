import React from 'react';

import WaveImage from 'common/SVG/WaveImage';

import './RecentArticles.scss';
import Button, { BUTTON } from 'components/Button';

const Header = () => {
  console.log('hero');

  return (
    <section className="recent-articles">
      <WaveImage className="recent-articles__wave" />
      <div className="recent-articles__wrapper">
        <div className="recent-articles__content">
          <h2 className="recent-articles__title">Ostatnie artykuły</h2>
          <article className="recent-articles__article">
            Miejsce na artykuły
          </article>
          <Button
            variant={BUTTON.VARIANT.LINK}
            isIcon
            className="recent-articles__button"
          >
            sprawdź pozostałe artykuły
          </Button>
        </div>
      </div>
      <WaveImage className="recent-articles__wave recent-articles__wave--reversed" />
    </section>
  );
};

export default Header;
