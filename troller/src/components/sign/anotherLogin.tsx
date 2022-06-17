import { AnotherWay } from '../../styles/sign/globalSignBox';
import google from '../../statics/img/btn_google_signin_light_focus_web@2x.png';
import kakao from '../../statics/img/kakao_login_large_narrow.png';

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

function AnotherLogin() {
	return (
		<AnotherWay>
			<span className="hr">or signup with...</span>
			<GoogleLogin />
			<KakaoLogin />
		</AnotherWay>
	);
}
export default AnotherLogin;
