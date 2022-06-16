import { Link } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm from '../../components/sign/signForm';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
	return (
		<SignForm>
			<Form>
				<InputBox>
					<div className="label">
						<span className="label__name">Email address</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Password</span>
						<Link to="/forgot_pw">
							<span className="label__forgotpw">forgot password</span>
						</Link>
					</div>
					<input type="text" />
				</InputBox>
				<SubmitBtn>Log In</SubmitBtn>
			</Form>
			<Link to="/sign_up">
				<SubmitBtn>Create Account</SubmitBtn>
			</Link>
			<AnotherLogin />
		</SignForm>
	);
}
export default Signin;
