import { useEffect, useState } from 'react';

const useApiPost = async <T>(api: string, req: Record<string, unknown>) => {
  const [res, setRes] = useState({});
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  (async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      const json = await apiResponse.json();
      setRes(apiResponse);
      setData(json);
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  })();
  return { res, data, error, loading };
};

const useApiGet = <T>(api: string) => {
  const [res, setRes] = useState({});
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(api);
        const json = await apiResponse.json();
        setRes(apiResponse);
        setData(json);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    })();
  });
  return { res, data, error, loading };
};

export { useApiPost, useApiGet };
