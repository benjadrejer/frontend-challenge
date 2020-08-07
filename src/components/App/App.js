import React from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import './App.scss';

const App = () => {
  const [data, error] = useEndpoint('Properties');
  console.log('properties: ', data);
  return (
    <div className="novasol-properties">
      <h1>Novasol Property Listing</h1>
    </div>
  );
};

export default App;
