import React from 'react';
import PropTypes from 'prop-types';

import './Listing.scss';

const Listing = ({ imageUrl, link, children }) => (
  <a href={link} className="listing"> {/* Navigate user to the Property Page */}
    <div className="listing__img-wrapper">
      <img
        className="listing__img-wrapper__image"
        src={imageUrl}
        alt="Good property alternative text from the api"
      /> {/* Would preferably have a range of images suitable for various resolutions */}
    </div>
    <div className="listing__description-wrapper">
      {children}
    </div>
  </a>
);

Listing.defaultProps = {
  imageUrl: 'https://flip2earn.com/development/img/no-image-found.png', // Should be a proper novasol placeholder
};

Listing.propTypes = {
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Listing;
