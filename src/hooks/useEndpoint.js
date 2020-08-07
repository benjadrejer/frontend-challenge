import { useState, useEffect } from 'react';
import client from '../utils/client';

const useEndpoint = (endpoint = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    if (endpoint) {
      client.get(endpoint)
        .then(res => setData(res.data))
        .catch(err => setError(err));
    }
  }, [endpoint]);

  return [data, error];
};

export default useEndpoint;
