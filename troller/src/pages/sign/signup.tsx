import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import onChange from '../../hooks/hooks';
import Visibility from '../../components/sign/pwVisible';
import SignForm, { FormData } from '../../components/sign/signForm';
import Timer from '../../components/sign/timer';
import {
  Form,
  InputBox,
  SubmitBtn,
  VerifyInput,
  VerifyInputBox,
} from '../../styles/sign/globalSignBox';
import { useApi } from '../../hooks/axiosHooks';

const CODE_VALID_TIME = 60 * 3;
const CODE_LENGTH = 8;

function Signup() {
  const navigate = useNavigate();
  const [validTime, setvalidTime] = useState(0);
  const [show, setShow] = useState(false);
  const [email, setemail] = useState('');
  const [isEmail, setisEmail] = useState(false);
  const [code, setCode] = useState('');
  const [isCorrect, setisCorrect] = useState(true);
  const [isAuth, setisAuth] = useState(false);
  const [requestAuth, setrequestAuth] = useState(false);
  const [lolName, setlolName] = useState('');
  const [isSummoner, setisSummoner] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const regexEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regexEmail.test(email)) {
      setisEmail(true);
    } else {
      setisEmail(false);
    }
  }, [email, setemail]);

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      (async () => {
        const { status } = await useApi.post(
          '/api/member/sign-up/email/auth/code',
          {
            code,
            validTime,
          }
        );
        if (status === 200) {
          setisAuth(true);
        } else if (status === 400) {
          setisCorrect(false);
          setTimeout(() => setisCorrect(true), 300);
          setCode('');
        } else {
          alert('ServerError');
          setCode('');
        }
      })();
    }
  }, [code, setCode, validTime]);

  const CodeSender = async () => {
    const { status } = await useApi.get('/api/member/sign-up/email/duplicate', {
      params: {
        email,
      },
    });
    if (status === 200) {
      const { status: statusCode } = await useApi.get(
        'api/member/sign-up/email/send/code',
        {
          params: { email },
        }
      );
      if (statusCode === 200) {
        setrequestAuth(true);
        setvalidTime(CODE_VALID_TIME);
      } else if (statusCode === 400) {
        alert('SignUp: 유효하지 않은 코드입니다.');
      } else {
        alert('ServerError');
      }
    }
    if (status === 403) {
      alert(`SignUp: ${email}은 이미 등록되어 있습니다.`);
    }
  };
  const summonerCheck = async () => {
    const {
      data: { dupLolName, validLolName },
    } = await useApi.get('/api/member/sign-up/check/lol-name', {
      params: {
        lolName,
      },
    });
    if (dupLolName && validLolName) {
      setisSummoner(true);
    } else {
      alert('유효하지 않은 소환사 이름입니다.');
    }
  };

  const onSubmit = handleSubmit(async (userData: FormData) => {
    const { status } = await useApi.post('/api/member/sign-up/register', {
      email: userData.email,
      password: userData.password,
      lolName: userData.lolName,
    });
    if (status === 201) {
      alert('Welcome to Logo!');
      navigate('/sign_in');
    } else {
      alert('ServerError');
    }
  });

  return (
    <SignForm>
      <Form onSubmit={onSubmit}>
        <InputBox isAuth={isAuth}>
          <div className="label">
            <span className="label__name">Email address</span>
          </div>
          <input
            {...register('email', { required: true })}
            onChange={e => onChange(setemail, e)}
            readOnly={!!isAuth}
            placeholder="example@example.com"
          />
          <span className="isVerified">
            {!isAuth ? null : <CheckCircleOutlineIcon />}
          </span>
        </InputBox>
        {!isAuth ? (
          <>
            <VerifyInputBox requestAuth={requestAuth}>
              <VerifyInput
                isCorrect={isCorrect}
                code={code}
                requestAuth={requestAuth}
                onChange={e => onChange(setCode, e)}
                placeholder="Verify Code"
                maxLength={CODE_LENGTH}
                value={!isCorrect ? '' : code}
              />
              <Timer
                validTime={validTime}
                setvalidTime={setvalidTime}
                setrequestAuth={setrequestAuth}
              />
            </VerifyInputBox>
            {!requestAuth ? (
              <SubmitBtn as="div" isEmail={isEmail} onClick={CodeSender}>
                {!isEmail ? 'Please Enter An Email' : 'Request Verify Code'}
              </SubmitBtn>
            ) : (
              <SubmitBtn as="div" isEmail={isEmail} onClick={CodeSender}>
                Request Code Again
              </SubmitBtn>
            )}
          </>
        ) : (
          <>
            <InputBox isSummoner={isSummoner}>
              <div className="label">
                <span className="label__name">Summoner name</span>
              </div>
              <div className="summonerName">
                <input
                  {...register('lolName', { required: true })}
                  onChange={e => onChange(setlolName, e)}
                  readOnly={!!isSummoner}
                />
                <span className="isVerifiedSummoner">
                  {!isSummoner ? null : <CheckCircleOutlineIcon />}
                </span>
                <button
                  type="button"
                  className="verifyBtn"
                  disabled={isSummoner}
                  onClick={summonerCheck}
                >
                  {!isSummoner ? 'Verify' : 'Verified'}
                </button>
              </div>
            </InputBox>
            <InputBox>
              <div className="label">
                <span className="label__name">Password</span>
                {errors.password?.type === 'pattern' && (
                  <span className="errorMessage">
                    길이 6~15, 1개이상의 문자, 1개이상의 특수문자
                  </span>
                )}
              </div>
              <input
                {...register('password', {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/,
                })}
                placeholder="길이 6~15, 1개이상의 문자, 1개이상의 특수문자"
                type={!show ? 'password' : 'text'}
              />
              <Visibility show={show} setShow={setShow} />
            </InputBox>
            <InputBox>
              <div className="label">
                <span className="label__name">Password again</span>
                {errors.password_again?.type === 'validate' && (
                  <span className="errorMessage">
                    It is not the same as the password
                  </span>
                )}
              </div>
              <input
                {...register('password_again', {
                  required: true,
                  validate: value => value === watch('password'),
                })}
                type="password"
              />
            </InputBox>
            <SubmitBtn isEmail type="submit">
              Create Account
            </SubmitBtn>
          </>
        )}
      </Form>
    </SignForm>
  );
}

export default Signup;
