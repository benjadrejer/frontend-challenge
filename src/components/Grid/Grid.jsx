import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

const Grid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Grid;
