import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import './ShortBio.scss';
import Button, { BUTTON } from 'components/Button';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <section className="short-bio">
      <h2 className="short-bio__title">Kim jestem?</h2>

      <article className="short-bio__content">
        <StaticImage
          className="short-bio__avatar"
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../../assets/images/avatar.png"
          width={200}
          height={200}
          quality={100}
          alt="Profile picture"
        />
        {author?.name && (
          <h3 className="short-bio__description">
            Nazywam się <strong>{author.name}</strong>.{' '}
            {author?.summary || null} {` `}Możesz obserwować mnie na{' '}
            <a
              className="short-bio__twitter"
              href={`https://twitter.com/${social?.twitter || ``}`}
            >
              Twitterze! 🚀
            </a>
          </h3>
        )}
        <div className="short-bio__more">
          <h3 className="short-bio__more-info">
            chcesz dowiedzieć się więcej o mnie?
          </h3>
          <Link to="/">
            <Button
              variant={BUTTON.VARIANT.OUTLINE}
              isIcon
              className="short-bio__button"
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Bio;
