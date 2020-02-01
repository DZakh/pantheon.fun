import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import Styles from './banner.module.scss';

export const Banner = ({ className, siteTitle, hints, siteLogo, mainReservationButton }) => {
  console.log(siteLogo.alt);
  return (
    <div className={`${className} ${Styles.banner}`}>
      <Img fixed={siteLogo.img.asset.fixed} className={Styles.siteLogo} alt={siteLogo.alt} />
      <h1 className={Styles.siteTitle}>{siteTitle}</h1>
      <p className={Styles.hints}>
        {hints
          .map((hint, i) => <span key={i}>{hint}</span>)
          .reduce((acc, el, i) => {
            return acc === null
              ? [el]
              : [
                  ...acc,
                  <i key={-i} className={`icon-crosshairs ${Styles.crosshairsIcon}`}></i>,
                  el,
                ];
          }, null)}
      </p>
      <button
        data-smooth-scroll-to="reservation-section"
        data-smooth-scroll-block="center"
        className="first__reservation-btn reservation-btn"
      >
        {mainReservationButton}
      </button>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};
