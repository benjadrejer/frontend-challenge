import React from 'react';
import PropTypes from 'prop-types';

import './PropertyDescription.scss';

const PropertyDescription = ({ content }) => (
  <div className="property-description">
    <p>{content.city}</p>
    <p>{content.country}</p>
    <p>{content.numberOfBedrooms}</p>
    <p>{content.numberOfBathrooms}</p>
    <p>{content.guests}</p>
    <p>{content.pricePerNight}</p>
    <a href="#">Read More</a> {/* Navigate user to the Property Page */}
  </div>
);

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
