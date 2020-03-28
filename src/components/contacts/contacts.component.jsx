import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import replace from 'lodash/replace';

import { Icon } from '../icon';
import { LinkToSection } from '../link-to-section';

import Styles from './contacts.module.scss';

const Contacts = ({ className }) => {
  const {
    sanityReferences: { address, telNumber },
  } = useStaticQuery(
    graphql`
      query {
        sanityReferences {
          address
          telNumber
        }
      }
    `
  );

  return (
    <div className={`${className} ${Styles.contacts}`}>
      <LinkToSection to="references-section" className={Styles.address}>
        {address}
      </LinkToSection>
      <br />
      <div className={Styles.tel}>
        <Icon className={Styles.telIcon} name="phone" />
        <a href={`tel:${replace(telNumber, /\s/g, '')}`} className={Styles.telNumber}>
          {telNumber}
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  className: PropTypes.string,
};

Contacts.defaultProps = {
  className: '',
};

export default Contacts;
