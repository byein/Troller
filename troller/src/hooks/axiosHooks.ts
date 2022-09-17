import axios from 'axios';

const ACCESS_TOKEN: string | undefined | null =
  localStorage.getItem('access_token');
const REFRESH_TOKEN: string | undefined | null =
  localStorage.getItem('refresh_token');

const useApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

useApi.interceptors.response.use(
  res => res,
  err => {
    const { response } = err;
    return response;
  }
);

const useAccessApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'JWT-accessToken': `${ACCESS_TOKEN}`,
  },
});

useAccessApi.interceptors.response.use(
  res => res,
  async err => {
    const { config, response } = err;
    const originalRequest = config;
    if (response.status === 401) {
      const {
        status,
        data: { accessToken },
      } = await axios.patch(
        '/api/jwt/refresh/re-issuance',
        {
          accessToken: ACCESS_TOKEN,
          refreshToken: REFRESH_TOKEN,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (status === 200) {
        localStorage.setItem('access_token', accessToken);
        originalRequest.headers = { 'JWT-accessToken': `${ACCESS_TOKEN}` };
        return useAccessApi(originalRequest);
      }
      if (status === 403) {
        localStorage.clear();
        alert('Session Expired: 로그인을 해주세요.');
        window.location.href = '/sign_in';
      }
    }
    return Promise.reject(err);
  }
);

export { useApi, useAccessApi, ACCESS_TOKEN, REFRESH_TOKEN };
