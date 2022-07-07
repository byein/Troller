import { useEffect, useState } from 'react';

const ACCESS_TOKEN: string | null = localStorage.getItem('refreshToken');
const REFRESH_TOKEN: string | null = localStorage.getItem('refreshToken');

const useGet = <T>(path: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(path);
        const json = await res.json();
        if (json !== null) {
          setData(json);
        }
      } catch (err) {
        // window.location.reload();
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  });
  return { data, loading, error };
};

const usePost = <T>(path: string, req: Record<string, unknown>) => {
  const fetchIntercepter = () => {
    // const res = await fetch('/refresh_api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${REFRESH_TOKEN}`,
    //   },
    //   body: JSON.stringify(req),
    // });
  };
  const [res, setRes] = useState<Response | null>();
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          body: JSON.stringify(req),
        });
        if (response.ok) {
          setRes(response);
        } else if (response.status === 401) {
          fetchIntercepter();
        }
        const json = await response.json();
        if (json !== null) {
          setData(json);
        }
      } catch (err) {
        setError(err);
      }
    })();
  });
  return { res, data, loading, error };
};

export { useGet, usePost };

// useEffect(() => {
//   if (code === verifyContent.verifyingCode) {
//     setTimeout(() => setisAuth(prev => !prev), 500);
//   } else if (
//     code !== verifyContent.verifyingCode &&
//     code.length === verifyContent.length
//   ) {
// setCode('');
// setisCorrect(prev => !prev);
// setTimeout(() => setisCorrect(prev => !prev), 200);
//   }
// }, [code, verifyContent.verifyingCode, verifyContent.length]);
