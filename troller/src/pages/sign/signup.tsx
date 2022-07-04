import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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

function Signup() {
  const [timer, setTimer] = useState(0);
  const [show, setShow] = useState(false);
  const [verifyContent, setverifyContent] = useState({
    verifyingCode: '1234',
    length: 4,
    expiredAt: 180, // 코드전송버튼 누를 때마다 res로 받아서 Timer로 넘겨줌(180초 디폴트) ==> 고쳐야 함
  }); // temporal(이메일 인증코드, 서버 개설되면 백에서 대조?) && 인증코드 길이 고정되면 setverifyContent로 변경
  const [emailValue, setemailValue] = useState(''); // 이메일 입력란값 => 이메일 형식이 맞는지 실시간 감시
  const [isEmail, setisEmail] = useState(false); // 이메일형식이 맞으면(true) 인증코드전송버튼 접근가능, 아니면 접근불가
  const [code, setCode] = useState(''); // 이메일 인증코드 입력란값 만약 백에서 대조한다면 fetch
  const [isCorrect, setisCorrect] = useState(true); // 인증코드가 맞는지 판별
  const [isAuth, setisAuth] = useState(false); // 인증코드가 인증이 되었는지 안되었는지 판별
  const [requestAuth, setrequestAuth] = useState(false); // 인증코드 요청여부 확인
  const [summonerValue, setsummonerValue] = useState(''); // 소환사 입력란값
  const [isSummoner, setisSummoner] = useState(false); // 백에서 검증후 존재하는 소환사일 때 true값 반환
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const countDown = () => {
    setTimer(prev => prev - 1);
  };
  const regexPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/; // 길이 6~15, 1개이상의 문자, 1개이상의 특수문자

  // email입력값이 공백이거나 @를 포함하지 않으면 인증코드 전송버튼 못누르게 하는 기능
  useEffect(() => {
    const regexEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 정규식
    if (regexEmail.test(emailValue)) {
      setisEmail(true);
    } else {
      setisEmail(false);
    } // 이메일 형식 검사
  }, [emailValue, setisEmail]);

  // backend 관련코드들
  // 이메일 인증코드 대조과정 ==> 회의 후 다시 수정해야 할 듯
  useEffect(() => {
    if (code === verifyContent.verifyingCode) {
      setTimeout(() => setisAuth(prev => !prev), 500);
    } else if (
      code !== verifyContent.verifyingCode &&
      code.length === verifyContent.length
    ) {
      setCode('');
      setisCorrect(prev => !prev);
      setTimeout(() => setisCorrect(prev => !prev), 200);
    }
  }, [code, verifyContent.verifyingCode, verifyContent.length]);

  // 이메일 입력 후 코드전송 || 코드재전송 버튼 ==> 회의 후 다시 수정해야 할 듯 && 타이머 작동도 안됨
  const codeSender = async () => {
    const res = await fetch('/check_dup_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
      }),
    });
    console.log(res);
    const json = await res.json();
    // setrequestAuth(true);
  };

  const summonerCheck = async () => {
    // if (summonerValue === '') {
    //   alert('소환사명을 입력해주세요!');
    // } else {
    //   const res = await (
    //     await fetch(`${BASE_URL}/check_lol_name`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application.json',
    //       },
    //       body: JSON.stringify(summonerValue),
    //     })
    //   ).json();
    //   if (res.dupLolName && res.validLolName) {
    //     setisSummoner(true);
    //   } else {
    //     alert('소환사명을 찾지 못했습니다!');
    //   }
    // }
  };
  // 회원가입 API 요청
  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const res = await (
        await fetch('/sign_up', {
          method: 'POST',
          headers: {
            'Content-Type': 'applicaion/json',
          },
          body: JSON.stringify({
            eMail: emailValue,
            password: data.password,
            lolName: data.lolName,
          }),
        })
      ).json();
    console.log(data);
    // if (check_dup === true) {
    //   const mail_auth = await (
    //     await fetch('/mail_auth', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'applicaion/json',
    //       },
    //       body: JSON.stringify({
    //         userId: emailValue,
    //       }),
    //     })
    //   ).json();
    // }
    // } catch (err) {
    //   console.log(err);
    // }
  });
  return (
    <SignForm>
      <Form onSubmit={onSubmit}>
        <InputBox isAuth={isAuth}>
          <div className="label">
            <span className="label__name">Email address</span>
          </div>
          <input
            {...register('eMail', { required: true })}
            onChange={e => onChange(setemailValue, e)}
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
                value={code}
                placeholder="verify code"
              />
              <Timer
                requestAuth={requestAuth}
                timer={timer}
                countDown={countDown}
              />
            </VerifyInputBox>
            {!requestAuth ? (
              <SubmitBtn as="div" isEmail={isEmail} onClick={codeSender}>
                {!isEmail ? 'Please Enter An Email' : 'Request Verify Code'}
              </SubmitBtn>
            ) : (
              <SubmitBtn as="div" isEmail={isEmail} onClick={codeSender}>
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
                  onChange={e => onChange(setsummonerValue, e)}
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
                {...register('password', { required: true, pattern: regexPw })}
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
