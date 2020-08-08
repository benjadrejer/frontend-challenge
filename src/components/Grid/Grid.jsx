import React from 'react';
import PropTypes from 'prop-types';

import Listing from '../Listing/Listing';
import PropertyDescription from '../Descriptions/PropertyDescription';

import './Grid.scss';

const Grid = ({ data }) => (
  <div className="grid">
    {data.map(entry => (
      <Listing
        imageUrl={entry.image}
        key={entry.id}
      >
        <PropertyDescription
          content={entry}
        />
      </Listing>
    ))}
  </div>
);

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
