import React from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Listing from '../Listing/Listing';
import PropertyDescription from '../Descriptions/PropertyDescription';

import './App.scss';

const App = () => {
  const [data, loading, error] = useEndpoint('Properties');
  console.log(
    'properties: ',
    data,
  );
  return (
    <div className="novasol-properties">
      <h1>Novasol Property Listing</h1>
      <div>{loading ? 'Loading' : ' Not loading'}</div>
      <div>{error.message}</div>
      {data.map((entry) => {
        return (
          <Listing
            imageUrl={entry.image}
            key={entry.id}
          >
            <PropertyDescription
              content={entry}
            />
          </Listing>
        );
      })}
    </div>
  );
};

export default App;
