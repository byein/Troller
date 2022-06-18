// import { useRecoilValue } from 'recoil';
// import isEmailAtom from '../../recoil/sign/atom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm, { ISignType } from '../../components/sign/signForm';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
	// const isEmail = useRecoilValue(isEmailAtom); //=> 자식끼리 props공유가 안될 줄 알고 recoil썼는데 자식끼리 공유가 돼서 혹시몰라 주석처리만 해놓은 것(여기서 isEmail받는 이유는 SubmitBtn이 글로벌스타일이라 !isEmail일 떄 로그인 버튼까지 영향을 받아서 전달 받은것)
	const { register, handleSubmit } = useForm<ISignType>();

	// 로그인 API 요청
	const onSubmit = (userAuth: ISignType) => {
		console.log(userAuth);
		// fetch or axios
	};
	return (
		<SignForm>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputBox>
					<div className="label">
						<span className="label__name">Email address</span>
					</div>
					<input
						{...register('email', {
							required: true,
						})}
						type="email"
					/>
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Password</span>
						<Link to="/forgot_pw">
							<span className="label__forgotpw">forgot password?</span>
						</Link>
					</div>
					<input
						{...register('password', {
							required: true,
						})}
					/>
				</InputBox>
				<SubmitBtn isEmail type="submit">
					Log In
				</SubmitBtn>
			</Form>
			<Link to="/sign_up">
				<SubmitBtn className="createAccount">Create Account</SubmitBtn>
			</Link>
			<AnotherLogin />
		</SignForm>
	);
}
export default Signin;
