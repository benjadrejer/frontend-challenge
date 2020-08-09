import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Bed from '../Svgs/Bed';
import Price from '../Svgs/Price';
import Group from '../Svgs/Group';

import './PropertyDescriptionIcons.scss';

const PropertyDescriptionIcons = memo(({ content }) => (
  <div className="property-description-icons">
    <p
      className="property-description-icons__paragraph property-description-icons__paragraph--big property-description-icons__paragraph--full property-description-icons__paragraph--no-margin"
    >
      {`${content.city}, ${content.country}`}
    </p>
    <div className="property-description-icons__wrapper">
      <p className="property-description-icons__paragraph">
        <Bed />
        <span>{`${content.numberOfBedrooms} Bedrooms`}</span>
      </p>
      <p className="property-description-icons__paragraph">
        <Group />
        <span>{`${content.guests} Guests`}</span>
      </p>
      <p className="property-description-icons__paragraph property-description-icons__paragraph--emphasize">
        <Price />
        <span>{`${content.pricePerNight} Pr. Night`}</span>
      </p>
    </div>
  </div>
));

PropertyDescriptionIcons.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    numberOfBedrooms: PropTypes.number,
    guests: PropTypes.number,
    pricePerNight: PropTypes.number,
  }).isRequired,
};

export default PropertyDescriptionIcons;
