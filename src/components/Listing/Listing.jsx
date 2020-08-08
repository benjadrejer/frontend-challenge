import React from 'react';
import PropTypes from 'prop-types';

import './Listing.scss';

const Listing = ({ imageUrl, children }) => (
  <div className="listing">
    <div className="listing__img-wrapper">
      <img
        className="listing__img-wrapper__image"
        src={imageUrl}
        alt="Good property alternative text from the api"
      />
    </div>
    <div className="listing__description-wrapper">
      {children}
    </div>
  </div>
);

Listing.defaultProps = {
  imageUrl: 'https://flip2earn.com/development/img/no-image-found.png', // Should of course be a proper in-house placeholder
};

Listing.propTypes = {
  imageUrl: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Listing;
