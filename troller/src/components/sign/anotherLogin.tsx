import { AnotherWay } from '../../styles/sign/globalSignBox';
import google from '../../statics/img/btn_google_signin_light_focus_web@2x.png';
import kakao from '../../statics/img/kakao_login_large_narrow.png';
import naver from '../../statics/img/btnG_official.png';

function GoogleLogin() {
	return (
		<div className="login">
			<img className="login_btn" src={google} alt="start with google" />
		</div>
	);
}
function KakaoLogin() {
	return (
		<div className="login">
			<img className="login_btn" src={kakao} alt="start with kakao" />
		</div>
	);
}
function NaverLogin() {
	return (
		<div className="login">
			<img className="login_btn" src={naver} alt="start with naver" />
		</div>
	);
}

function AnotherLogin() {
	return (
		<AnotherWay>
			<span className="hr">or signup with...</span>
			<GoogleLogin />
			<KakaoLogin />
			<NaverLogin />
		</AnotherWay>
	);
}
export default AnotherLogin;
