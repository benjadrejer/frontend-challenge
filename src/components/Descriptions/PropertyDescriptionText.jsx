import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './PropertyDescriptionText.scss';

const PropertyDescriptionText = memo(({ content }) => (
  <div className="property-description-text">
    <p className="property-description-text__paragraph property-description-text__paragraph--big">{`${content.city}, ${content.country}`}</p>
    <p className="property-description-text__paragraph">
      {'Bedrooms: '}
      <span>{content.numberOfBedrooms}</span>
    </p>
    <p className="property-description-text__paragraph">
      {'Bathrooms: '}
      <span>{content.numberOfBathrooms}</span>
    </p>
    <p className="property-description-text__paragraph">
      {'Guests: '}
      <span>{content.guests}</span>
    </p>
    <p className="property-description-text__paragraph property-description-text__paragraph--emphasize">
      {'Price pr. Night: '}
      <span>{content.pricePerNight}</span>
    </p>
    <button
      type="button"
      className="property-description-text__cta"
    >
      Read More
    </button>
  </div>
));

PropertyDescriptionText.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    numberOfBedrooms: PropTypes.number,
    numberOfBathrooms: PropTypes.number,
    guests: PropTypes.number,
    pricePerNight: PropTypes.number,
  }).isRequired,
};

export default PropertyDescriptionText;
