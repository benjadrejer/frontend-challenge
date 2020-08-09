import React, { useState, useEffect } from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Grid from '../Grid/Grid';
import Listing from '../Listing/Listing';
import PropertyDescriptionText from '../Descriptions/PropertyDescriptionText';
// import PropertyDescriptionIcons from '../Descriptions/PropertyDescriptionIcons'; // <- Use this instead of PropertyDescriptionText for a different look
import Filter from '../Filter/Filter';

import './App.scss';

const App = () => {
  const [prices, setPrices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [data, loading, error] = useEndpoint('Properties');

  useEffect(() => {
    if (data) {
      setPrices(data.map(entry => parseFloat(entry.pricePerNight)));
      setFiltered(data);
    }
  },
  [data]);

  const handleFilter = (values) => {
    console.log(values);
    setFiltered(data.filter((entry) => {
      const price = parseFloat(entry.pricePerNight);
      return price > values[0] && price < values[1];
    }));
  };

  let component = null;
  if (loading) {
    component = <div className="novasol-properties__loading">{loading ? 'Loading' : ' Not loading'}</div>;
  } else if (error.message) {
    component = <div className="novasol-properties__error">{error.message}</div>;
  } else {
    component = (
      <Grid>
        {filtered.map(entry => (
          <Listing
            imageUrl={entry.image}
            link="#"
            key={entry.id}
          >
            <PropertyDescriptionText
              content={entry}
            />
          </Listing>
        ))}
      </Grid>
    );
  }

  return (
    <div className="novasol-properties">
      <h1 className="novasol-properties__header">Novasol Property Listing</h1>
      {prices.length > 0
      && (
      <Filter
        max={Math.ceil(Math.max(...prices) / 100) * 100}
        min={Math.floor(Math.min(...prices) / 100) * 100}
        callback={handleFilter}
        step={10}
      />
      )
      }
      {component}
    </div>
  );
};

export default App;
