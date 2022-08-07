import qs from 'query-string';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  AnotherWay,
  Form,
  InputBox,
  SignBox,
} from '../../styles/sign/globalSignBox';
import kakao from '../../static/img/snsSign/kakao_login_medium_wide.png';
import { useApi } from '../../hooks/axiosHooks';
import onChange from '../../hooks/hooks';

const host = '3.37.22.89';
const port = 3000;

function KakaoLogin() {
  const KAKAO_REDIRECT_URL = `http://${host}:${port}/auth/kakao`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_AUTH_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
  return (
    <a className="login" href={KAKAO_AUTH_URL}>
      <img className="login_btn" src={kakao} alt="start with kakao" />
    </a>
  );
}

function AnotherLogin() {
  return (
    <AnotherWay>
      <span className="hr">or signup with...</span>
      <KakaoLogin />
    </AnotherWay>
  );
}

function Auth() {
  const [tokens, setTokens] = useState<{
    accessToken: string;
    refreshToken: string;
  }>();
  const [isNewbie, setisNewbie] = useState(false);
  const [lolName, setlolName] = useState('');
  const [isSummoner, setisSummoner] = useState(false);
  const { search } = new URL(window.location.href);
  const { code } = qs.parse(search);
  // useEffect(() => {
  //   window.history.replaceState(null, 'Kakao Auth', '/auth/kakao/');
  //   (async () => {
  //     const {
  //       status,
  //       data: { accessToken, refreshToken },
  //     } = await useApi.post('/api/member/sign-in/kakao/login', {
  //       code,
  //     });
  //     if (status === 200) {
  //       localStorage.setItem('access_token', accessToken);
  //       localStorage.setItem('refresh_token', refreshToken);
  //       window.location.href = '/';
  //     }
  //     if (status === 401) {
  //       setTokens({ accessToken, refreshToken });
  //       setisNewbie(true);
  //     }
  //   })();
  // });
  const summonerCheck = async () => {
    const {
      data: { dupLolName, validLolName },
    } = await useApi.get('/api/member/sign-up/check/lol-name', {
      params: {
        lolName,
      },
    });
    if (dupLolName && validLolName) {
      setisSummoner(true);
    } else {
      alert('유효하지 않은 소환사 이름입니다.');
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: { accessToken, refreshToken },
    } = await useApi.post('/api/member/sign-in/kakao/sign-up', {
      lolName,
      accessToken: tokens?.accessToken,
      refreshToken: tokens?.refreshToken,
    });
    if (accessToken && refreshToken) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      alert('Welcome to Logo!');
      window.location.href = '/';
    }
  };
  return (
    <SignBox>
      {isNewbie ? (
        <Form onSubmit={onSubmit}>
          <InputBox isSummoner={isSummoner}>
            <div className="label">
              <span className="label__name">Summoner name</span>
            </div>
            <div className="summonerName">
              <input
                onChange={e => onChange(setlolName, e)}
                readOnly={!!isSummoner}
              />
              <span className="isVerifiedSummoner">
                {!isSummoner ? null : <CheckCircleOutlineIcon />}
              </span>
              <button
                type="button"
                className="verifyBtn"
                disabled={isSummoner}
                onClick={summonerCheck}
              >
                {!isSummoner ? 'Verify' : 'Verified'}
              </button>
            </div>
          </InputBox>
          <button className="createAccount" type="submit">
            Create Account
          </button>
        </Form>
      ) : null}
    </SignBox>
  );
}

export { Auth, AnotherLogin };
