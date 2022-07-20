const ACCESS_TOKEN: string | null | undefined =
  localStorage.getItem('access_token');
const REFRESH_TOKEN: string | null | undefined =
  localStorage.getItem('refresh_token');

const refreshJWT = async (): Promise<{ res: Response | undefined }> => {
  const res = await fetch('/refresh_jwt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: REFRESH_TOKEN }),
  });
  if (res.ok) {
    const { accessToken, refreshToken } = await res.json();
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  } else if (res.status === 403) {
    // when refresh token is expired
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    alert('SignIn required');
    window.location.replace('http://localhost:3000/sign_in'); // redirect to mainpage
  }
  return { res };
};

class Axios {
  static async get<DataType>(path: string): Promise<{
    res: Response | undefined;
    data: DataType;
    isLoading: boolean | undefined;
  }> {
    let res;
    let data;
    let isLoading;
    try {
      isLoading = true;
      const response = await fetch(path);
      const json = await response.json();
      res = response;
      data = json;
      if (data) {
        isLoading = false;
      }
    } catch (err) {
      console.log(err);
    }
    return { res, data, isLoading };
  }

  static async post<DataType>(
    path: string,
    req: any // reassign type later
  ): Promise<{
    res: Response | undefined;
    data: DataType;
    isLoading: boolean | undefined;
  }> {
    let res;
    let data;
    let isLoading;
    try {
      isLoading = true;
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(req),
      });
      const json = await response.json();
      res = response;
      data = json;
      if (data) {
        isLoading = false;
      }
      if (response.status === 403) {
        // when access token is expired
        const { res: refreshRes } = await refreshJWT();
        if (refreshRes?.ok) {
          isLoading = false;
        }
      }
    } catch (err) {
      console.log(err);
    }
    return { res, data, isLoading };
  }
}

export { Axios, ACCESS_TOKEN, REFRESH_TOKEN };
