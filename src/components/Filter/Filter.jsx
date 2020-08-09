import React from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Filter.scss';

const Filter = ({
  max, min, step, callback,
}) => {
  const steps = Math.floor((max - min) / step);

  const handleMarks = () => {
    const marks = {};
    for (let i = min; i <= max; i += steps) {
      marks[i] = <span>{i}</span>;
    }
    return marks;
  };

  return (
    <div className="filter">
      <h3>Filter by Price</h3>
      <Range
        min={min}
        max={max}
        step={Math.floor((max - min) / 10)}
        dots
        defaultValue={[min, max]}
        allowCross={false}
        pushable
        onChange={callback}
        marks={handleMarks()}
      />
    </div>
  );
};

Filter.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Filter;
