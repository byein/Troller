import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import Visibility from '../../components/sign/pwVisible';
import SignForm, { ISignType } from '../../components/sign/signForm';
import Timer from '../../components/sign/timer';
import pwVisibleAtom from '../../recoil/sign/atom';
import {
	Form,
	InputBox,
	SubmitBtn,
	VerifyInput,
	VerifyInputBox,
} from '../../styles/sign/globalSignBox';

// interface IVerifyContentType {
// 	verifyingCode: string;
// 	length: number;
// 	time: number;
// }

function Signup() {
	const show = useRecoilValue(pwVisibleAtom);
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

	// 이메일 인증코드 대조과정 => 프론트용 임시 로직이라 나중에 백으로 인증코드 보내고 true반환 받아야 인증풀리도록 만들어야 할 듯
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

	const onChange = (
		modifierFn: (src: string) => void,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		modifierFn(e.currentTarget.value);
	};

	const codeSender = async () => {
		alert(`${emailValue}로 코드가 전송되었습니다!`);
		setrequestAuth(true);
		// const res = await (
		// 	await fetch('blahblah', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application.json',
		// 		},
		// 		body: JSON.stringify(emailValue),
		// 	})
		// ).json();
		// setverifyContent({
		// 	verifyingCode: res.verifyingCode,
		// 	length: res.length,
		//  time: res.time
		// });
		const res = {
			verifyingCode: '1234',
			length: 4,
			expiredAt: 180,
		}; // res값이 없어 임시로 만들어준 응답값
		setverifyContent(res); // res값이 없어 임시로 만들어준 응답값; ==> Timer props로 업데이트 안됨.
		console.log(verifyContent);
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
								expiredAt={verifyContent.expiredAt}
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
						<InputBox>
							<div className="label">
								<span className="label__name">Password</span>
							</div>
							<input
								{...register('password')}
								type={!show ? 'password' : 'text'}
							/>
							<Visibility />
						</InputBox>
						<InputBox>
							<div className="label">
								<span className="label__name">Password again</span>
							</div>
							<input {...register('password_again')} type="password" />
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
