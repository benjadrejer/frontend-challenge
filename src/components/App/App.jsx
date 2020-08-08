import React from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Grid from '../Grid/Grid';

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
      <Grid
        data={data}
      />
    </div>
  );
};

export default App;
