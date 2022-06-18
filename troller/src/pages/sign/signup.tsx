// import { useRecoilState } from 'recoil';
// import isEmailAtom from '../../recoil/sign/atom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignForm, { ISignType } from '../../components/sign/signForm';
import {
	Form,
	InputBox,
	SubmitBtn,
	VerifyInput,
} from '../../styles/sign/globalSignBox';

function Signup() {
	// const [isEmail, setisEmail] = useRecoilState(isEmailAtom); /=> 자식끼리 props공유가 안될 줄 알고 recoil썼는데 자식끼리 공유가 돼서 혹시몰라 주석처리만 해놓은 것
	const [emailValue, setemailValue] = useState(''); // 이메일 입력란값 => 이메일 형식이 맞는지 실시간 감시
	const [isEmail, setisEmail] = useState(false); // 이메일형식이 맞으면(true) 인증코드전송버튼 접근가능, 아니면 접근불가
	const [verifyContent, setverifyContent] = useState({
		verifyingCode: '1234',
		length: 4,
	}); // temporal(이메일 인증코드, 서버 개설되면 백에서 대조?) && 인증코드 길이 고정되면 setverifyContent로 변경
	const [code, setCode] = useState(''); // 이메일 인증코드 입력란값 만약 백에서 대조한다면 fetch
	const [isCorrect, setisCorrect] = useState(true); // 인증코드가 맞는지 판별
	const [isAuth, setisAuth] = useState(false); // 인증코드가 인증이 되었는지 안되었는지 판별
	const [requestAuth, setrequestAuth] = useState(false); // 인증코드 요청여부 확인
	const {
		register,
		handleSubmit,
		// watch,
		// formState: { errors },
	} = useForm<ISignType>();

	// email입력값이 공백이거나 @를 포함하지 않으면 인증코드 전송버튼 못누르게 하는 기능
	useEffect(() => {
		const regExEmail =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 정규식
		if (regExEmail.test(emailValue)) {
			setisEmail(true);
		} else {
			setisEmail(false);
		} // 이메일 형식 검사
	}, [emailValue, setisEmail]);

	// 이메일 인증코드 대조과정
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

	// email && 인증코드 검수하는 커스텀 함수
	const onChange = (
		modifierFn: (src: string) => void,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		modifierFn(e.currentTarget.value);
	};

	// 회원가입 API 요청
	const onSubmit = handleSubmit((userRegist: ISignType) => {
		console.log(userRegist);
		// fetch or axios
	});
	return (
		<SignForm>
			<Form onSubmit={onSubmit}>
				<InputBox>
					<div className="label">
						<span className="label__name">Email address</span>
					</div>
					<input
						{...register('email')}
						onChange={e => onChange(setemailValue, e)}
						readOnly={!!isAuth}
						type="email"
						placeholder="Logo@example.com"
					/>
					<span className="isVerified">{!isAuth ? null : 'Verified!'}</span>
				</InputBox>
				{!isAuth ? (
					<>
						<VerifyInput
							value={code}
							isCorrect={isCorrect}
							onChange={e => onChange(setCode, e)}
							code={code}
							requestAuth={requestAuth}
							placeholder="verify code"
						/>
						{!requestAuth ? (
							<SubmitBtn
								as="div"
								isEmail={isEmail}
								onClick={() => {
									setrequestAuth(prev => !prev); // + 인증코드 전송코드 ==> 함수 외부에 만들거임.
								}}
							>
								{!isEmail ? 'Please Enter An Email' : 'Request Verify Code'}
							</SubmitBtn>
						) : (
							<SubmitBtn
								as="div"
								isEmail={isEmail}
								onClick={
									undefined // + 인증코드 전송코드 ==> 함수 외부에 만들거임.
								}
							>
								Request Code Again
							</SubmitBtn>
						)}
					</>
				) : (
					<>
						<InputBox>
							<div className="label">
								<span className="label__name">Password</span>
							</div>
							<input {...register('password')} />
						</InputBox>
						<InputBox>
							<div className="label">
								<span className="label__name">Password again</span>
							</div>
							<input {...register('password_again')} />
						</InputBox>
						<InputBox>
							<div className="label">
								<span className="label__name">Summoner name</span>
							</div>
							<input {...register('nickname')} />
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
