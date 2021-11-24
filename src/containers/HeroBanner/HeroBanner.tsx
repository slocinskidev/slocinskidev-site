import React from 'react';

import HeroImage from 'common/SVG/HeroImage';
import Button, { BUTTON } from 'components/Button';

import './HeroBanner.scss';

const Header = () => {
  console.log('hero');

  return (
    <section className="hero-banner">
      <div className="hero-banner__wrapper">
        <article className="hero-banner__content">
          <h1 className="hero-banner__title">Eryk Słociński</h1>
          <p className="hero-banner__description">
            I`m baby actually pork belly sartorial, organic hell of migas
            ethical palo santo. Paleo tumeric 3 wolf moon tattooed heirloom.
            Etsy health goth occupy put a bird on it activated charcoal portland
            taiyaki tilde meditation deep v taxidermy pinterest. Schlitz forage
            farm-to-table polaroid.
          </p>
          <Button
            variant={BUTTON.VARIANT.CONTAINED}
            className="hero-banner__button"
          >
            Zacznij tutaj
          </Button>
        </article>
        <HeroImage className="hero-banner__image" />
      </div>
    </section>
  );
};

export default Header;
