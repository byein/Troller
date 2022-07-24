import axios from 'axios';

const ACCESS_TOKEN: string | undefined | null =
  localStorage.getItem('access_token');
const REFRESH_TOKEN: string | undefined | null =
  localStorage.getItem('refresh_token');

const useApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
}); // A request that do not requires Authentication

const useAccessApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}); // A request that requires Authentication

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
        originalRequest.headers = { Authorization: `Bearer ${accessToken}` };
        return axios(originalRequest);
      }
      if (status === 401) {
        localStorage.clear();
        alert('Logo: 로그인을 해주세요.');
        window.location.href = '/sign_in';
      }
    }
    return Promise.reject(err);
  }
); // To do JWTToken Authorization in useAccessApi

export { useApi, useAccessApi };
