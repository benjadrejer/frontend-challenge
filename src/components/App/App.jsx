import React from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Grid from '../Grid/Grid';
import Listing from '../Listing/Listing';
import PropertyDescription from '../Descriptions/PropertyDescription';

import './App.scss';

const App = () => {
  const [data, loading, error] = useEndpoint('Properties');
  console.log(
    'properties: ',
    data,
  );

  let component = null;
  if (loading) {
    component = <div className="novasol-properties__loading">{loading ? 'Loading' : ' Not loading'}</div>;
  } else if (error.message) {
    component = <div className="novasol-properties__error">{error.message}</div>;
  } else {
    component = (
      <Grid>
        {data.map(entry => (
          <Listing
            imageUrl={entry.image}
            link="#"
            key={entry.id}
          >
            <PropertyDescription
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
      {component}
    </div>
  );
};

export default App;
