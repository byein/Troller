import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm, { ISignType } from '../../components/sign/signForm';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
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
            placeholder="example@example.com"
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
            type="password"
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
