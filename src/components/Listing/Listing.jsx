import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({ imageUrl, children }) => (
  <div className="listing">
    <div className="listing_img_wrapper">
      <img src={imageUrl} alt="Good property alternative text from the api" />
    </div>
    <div className="listing_description_wrapper">
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
