import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignForm, { ISignType } from '../../components/sign/signForm';
import {
	Form,
	InputBox,
	SubmitBtn,
	VerifyInput,
} from '../../styles/sign/globalSignBox';

const VerifyingCode = '1234'; // temporal(이메일 인증코드, 서버 개설되면 백에서 대조?)
const CodeLength = 4; // 인증코드 길이 고정되면 변경

function Signup() {
	const [code, setCode] = useState(''); // 이메일 인증코드 입력란값 만약 백에서 대조한다면 fetch
	const [isCorrect, setisCorrect] = useState(true); // 인증코드가 맞는지 판별
	const [isAuth, setisAuth] = useState(false); // 인증코드가 인증이 되었는지 안되었는지 판별
	const [requestAuth, setrequestAuth] = useState(false); // 인증코드 요청여부 확인
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<ISignType>();

	// 이메일 인증코드 대조과정
	useEffect(() => {
		if (code === VerifyingCode) {
			setTimeout(() => setisAuth(prev => !prev), 500);
		} else if (code !== VerifyingCode && code.length === CodeLength) {
			setCode('');
			setisCorrect(prev => !prev);
			setTimeout(() => setisCorrect(prev => !prev), 200);
		}
	}, [code]);
	const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.currentTarget.value);
	};

	const onSubmit = handleSubmit((data: ISignType) => {
		console.log(data);
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
							onChange={onChangeCode}
							code={code}
							requestAuth={requestAuth}
							placeholder="verify code"
						/>
						<SubmitBtn
							as="div"
							onClick={
								!requestAuth
									? () => {
											setrequestAuth(prev => !prev); // + 인증코드 전송코드
									  }
									: undefined // + 인증코드 전송코드 ==> 함수 외부에 만들거임.
							}
						>
							{!requestAuth ? 'Request Verify Code' : 'Request Code Again'}
						</SubmitBtn>
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
						<SubmitBtn type="submit">Create Account</SubmitBtn>
					</>
				)}
			</Form>
		</SignForm>
	);
}
export default Signup;
