import React, { memo } from 'react';
import PropTypes from 'prop-types';
import 'lazysizes';

import './Listing.scss';

const Listing = memo(({ imageUrl, link, children }) => (
  <a href={link} className="listing"> {/* Navigate user to the Property Page */}
    <div className="listing__img-wrapper">
      {/* Preferably a very low-res version of the actual image in question instead of 'not found' */}
      <img
        className="listing__img-wrapper__image lazyload"
        src="https://flip2earn.com/development/img/no-image-found.png"
        data-src={imageUrl}
        alt="Good property alternative text from the api"
      /> {/* Would preferably have a range of images suitable for various resolutions */}
    </div>
    <div className="listing__description-wrapper">
      {children}
    </div>
  </a>
));

Listing.propTypes = {
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Listing;
