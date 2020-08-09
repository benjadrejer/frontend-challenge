import { useState, useEffect } from 'react';
import client from '../utils/client';

const useEndpoint = (endpoint = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (endpoint) {
      setLoading(true);
      client.get(endpoint)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    } else {
      setError('Something went wrong');
    }
  },
  [endpoint]);

  return [data, loading, error];
};

export default useEndpoint;
