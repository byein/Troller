import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm, { FormData } from '../../components/sign/signForm';
import { useApi } from '../../hooks/axiosHooks';
import onChange from '../../hooks/hooks';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isPassword, setisPassword] = useState(true);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (userData: FormData) => {
    const {
      status,
      data: { accessToken, refreshToken },
    } = await useApi.post('/api/member/sign-in/', {
      email: userData.email,
      password: userData.password,
    });
    if (status === 200) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      navigate('/');
    } else {
      alert('SignIn: 회원정보가 잘못 되었습니다.');
      setpassword('');
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
            // type="email"
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
            value={!isPassword ? '' : password}
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
