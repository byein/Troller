import SignForm from '../../components/sign/signForm';
import { AnotherWay, Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signup() {
	return (
		<SignForm>
			<Form>
				<InputBox>
					<div className="label">
						<span className="label__name">이메일 주소</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">비밀번호</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">비밀번호 확인</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">닉네임</span>
					</div>
					<input type="email" />
				</InputBox>
				<SubmitBtn>계정생성</SubmitBtn>
			</Form>
			<AnotherWay>
				<span className="hr">or</span>
				<div className="another__google">
					<img
						className="another__img"
						src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
						alt="google"
					/>
					<span className="another__txt">구글 회원가입</span>
				</div>
				<div className="another__kakao">
					<img className="another__img" src="https://cdn-icons-png.flaticon.com/512/2111/2111466.png" alt="kakao" />
					<span className="another__txt">카카오 회원가입</span>
				</div>
				<div className="another__naver">
					<img
						className="another__img"
						src="https://www.apkmirror.com/wp-content/uploads/2019/03/5ca729695cde8.png"
						alt="naver"
					/>
					<span className="another__txt">네이버 회원가입</span>
				</div>
			</AnotherWay>
		</SignForm>
	);
}
export default Signup;
