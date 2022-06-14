import styled from '@emotion/styled';
import { BORDER_RADIUS, BOX_SHADOW, DEFAULT_FONTSIZE, FLOAT_COLOR } from '../global/global';

const SignBox = styled('div')`
	${FLOAT_COLOR};
	${BOX_SHADOW};
	width: 450px;
	min-height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-radius: ${`${BORDER_RADIUS}px`};
`;

const Form = styled('form')`
	width: 400px;
	height: auto;
	/* margin: 20px auto; */
	display: flex;
	flex-direction: column;
	align-items: center;
	.createbox {
		width: auto;
		height: auto;
		margin-bottom: 20px;
		font-size: ${`${DEFAULT_FONTSIZE}px`};
		display: flex;
		justify-content: space-between;
		.createbox__create {
			color: ${(props) => props.theme.txtColor.selected};
		}
	}
`;

const InputBox = styled('div')`
	width: 100%;
	height: auto;
	margin: 0 0 20px 0;
	.label {
		width: 100%;
		height: 20px;
		font-size: ${`${DEFAULT_FONTSIZE}px`};
		&:nth-of-type(1) {
			display: flex;
			justify-content: space-between;
		}
		.label__name {
			color: ${(props) => props.theme.txtColor.primary};
		}
		.label__forgotpw {
			font-size: ${`${DEFAULT_FONTSIZE}px`};
			color: ${(props) => props.theme.txtColor.selected};
		}
	}
	input {
		${FLOAT_COLOR};
		width: 100%;
		height: 50px;
		border: 0.5px solid white;
		border-radius: ${`${BORDER_RADIUS - 5}px`};
		padding: 0;
		color: ${(props) => props.theme.txtColor.primary};
		font-size: ${`${DEFAULT_FONTSIZE}px`};
		text-indent: 10px;
		&:focus {
			outline: none;
			border-color: ${(props) => props.theme.txtColor.selected};
		}
	}
`;

const SubmitBtn = styled('button')`
	width: 400px;
	height: 50px;
	background-color: ${(props) => props.theme.btnColor};
	border: none;
	border-radius: ${`${BORDER_RADIUS - 5}px`};
	color: ${(props) => props.theme.txtColor.primary};
	font-size: ${`${DEFAULT_FONTSIZE}px`};
	margin-bottom: 10px;
	cursor: pointer;
`;

const AnotherWay = styled('div')`
	width: 260px;
	height: auto;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.hr {
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 10px;
	}
	.another__google,
	.another__kakao,
	.another__naver {
		width: 100%;
		height: 55px;
		display: flex;
		align-items: center;
		border-radius: ${`${BORDER_RADIUS}px`};
		padding: 10px;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.another__img {
		width: 45px;
		height: 45px;
		margin-right: 25px;
	}
	.another__google {
		color: ${(props) => props.theme.txtColor.primary};
		background-color: #4284f3;
	}
	.another__kakao {
		color: '#3E1C32';
		background-color: #fae100;
	}
	.another__naver {
		color: ${(props) => props.theme.txtColor.primary};
		background-color: #00c83b;
	}
	.another__txt {
		display: inline-block;
		width: 130px;
		text-align: center;
	}
`;
export { SignBox, Form, InputBox, SubmitBtn, AnotherWay };
