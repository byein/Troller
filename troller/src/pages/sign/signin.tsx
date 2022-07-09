import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm, { FormData } from '../../components/sign/signForm';
import onChange from '../../hooks/hooks';
import { Axios as axios } from '../../hooks/axiosMethod';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (userData: FormData) => {
    const { res, data } = await axios.post('/sign_in', userData);
    if (data) {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_tokem', data.refresh_token);
      navigate('/');
    } else {
      alert('Error: inValid email or password');
      setemail('');
      setpassword('');
    }
    if (!res?.ok) {
      alert('Server Error: SignIn is Failed');
    }
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
            onChange={e => onChange(setemail, e)}
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
            onChange={e => onChange(setpassword, e)}
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
