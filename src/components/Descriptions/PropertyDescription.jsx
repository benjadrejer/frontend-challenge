import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './PropertyDescription.scss';

const PropertyDescription = memo(({ content }) => (
  <div className="property-description">
    <p>{`${content.city}, ${content.country}`}</p>
    <p>{`Bedrooms: ${content.numberOfBedrooms}`}</p>
    <p>{`Bathrooms: ${content.numberOfBathrooms}`}</p>
    <p>{`Guests: ${content.guests}`}</p>
    <p>{`Price pr. Night: ${content.pricePerNight}`}</p>
    <button
      type="button"
      className="property-description__cta"
    >
      Read More
    </button>
  </div>
));

PropertyDescription.propTypes = {
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

export default PropertyDescription;
