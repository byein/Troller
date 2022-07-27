import { AnotherWay } from '../../styles/sign/globalSignBox';
import kakao from '../../statics/img/snsSign/kakao_login_medium_wide.png';

function KakaoLogin() {
  const KAKAO_REDIRECT_URL = 'http://localhost:3000/auth/kakao';
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
  return null;
}

export { AnotherLogin, Auth };
