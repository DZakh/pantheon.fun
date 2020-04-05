import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Styles from './first-section.module.scss';

import { Contacts } from './components/contacts';
import { Banner } from './components/banner';
import { ArrowToDown } from './components/arrow-to-down';
import { Carousel, SwipeArrow } from './components/carousel/carousel.component';

const FirstSection = ({ sectionRef }) => {
  const {
    sanityFirstSection: { siteTitle, hints, siteLogo, mainReservationButton, carousel },
  } = useStaticQuery(
    graphql`
      query {
        sanityFirstSection {
          siteTitle
          hints
          siteLogo {
            alt
            img {
              asset {
                fixed(width: 200) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
          mainReservationButton
          carousel {
            img {
              asset {
                fluid(maxWidth: 1920) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alt
          }
        }
      }
    `
  );

  return (
    <header className={Styles.first} ref={sectionRef} id="first-section">
      <div className={Styles.inner}>
        <Contacts className={Styles.contacts} />
        <Banner
          className={Styles.banner}
          siteTitle={siteTitle}
          hints={hints}
          siteLogo={siteLogo}
          mainReservationButton={mainReservationButton}
        />
        <ArrowToDown className={Styles.arrowToDown} />
        <SwipeArrow swipeTo="next" className={Styles.swipeNext} />
        <SwipeArrow swipeTo="prev" className={Styles.swipePrev} />
      </div>
      <Carousel slides={carousel} />
    </header>
  );
};

FirstSection.propTypes = {
  sectionRef: PropTypes.func,
};

FirstSection.defaultProps = {
  sectionRef: null,
};

export default FirstSection;
