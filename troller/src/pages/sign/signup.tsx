import SignForm from '../../components/sign/signForm';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signup() {
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
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Password again</span>
					</div>
					<input type="email" />
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Name</span>
					</div>
					<input type="email" />
				</InputBox>
				<SubmitBtn>Create Account</SubmitBtn>
			</Form>
		</SignForm>
	);
}
export default Signup;
