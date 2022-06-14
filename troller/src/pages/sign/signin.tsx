import { Link } from 'react-router-dom';
import SignForm from '../../components/sign/signForm';
import { AnotherWay, Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
	return (
		<SignForm>
			<Form>
				<InputBox>
					<div className="label">
						<span className="label__name">E-mail address</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Password</span>
						<Link to="/forgot_pw">
							<span className="label__forgotpw">Forgot Password?</span>
						</Link>
					</div>
					<input type="text" />
				</InputBox>
				<SubmitBtn>Sign In</SubmitBtn>
				<div className="createbox">
					<span className="createbox__txt">new to Logo?</span>
					<Link to="/terms">
						<span className="createbox__create">create account</span>
					</Link>
				</div>
			</Form>
			<AnotherWay>
				<span className="hr">or</span>
				<div className="another__google">
					<img
						className="another__img"
						src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
						alt="google"
					/>
					<span className="another__txt">구글 로그인</span>
				</div>
				<div className="another__kakao">
					<img className="another__img" src="https://cdn-icons-png.flaticon.com/512/2111/2111466.png" alt="kakao" />
					<span className="another__txt">카카오 로그인</span>
				</div>
				<div className="another__naver">
					<img
						className="another__img"
						src="https://www.apkmirror.com/wp-content/uploads/2019/03/5ca729695cde8.png"
						alt="naver"
					/>
					<span className="another__txt">네이버 로그인</span>
				</div>
			</AnotherWay>
		</SignForm>
	);
}
export default Signin;
