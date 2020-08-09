import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ children }) => (
  <div className="header">
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
