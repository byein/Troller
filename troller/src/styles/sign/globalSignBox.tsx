import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  BOX_SHADOW,
  DEFAULT_FONTSIZE,
  FLOAT_COLOR,
  LARGE_FONTSIZE,
  TRANSITION,
  TRANSPARENT_TXTCOLOR,
} from '../global/global';

const LOGINBTN_RADIUS_FORKAKAO = '6px';
const ERROR_CODE = keyframes`
	0%{
		transform: translateX(0);
	}
	25%{
		transform: translateX(10px);
	}
	50%{
		transform: translateX(0);
	}
	75%{
		transform: translateX(10px);
	}
	100%{
		transform: translateX(0);
	}
`;

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
  .createAccount {
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.btnColor.primary};
    border: none;
    border-radius: ${`${BORDER_RADIUS - 5}px`};
    color: ${props => props.theme.txtColor.primary};
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.btnColor.onHover};
    }
  }
`;

const Form = styled('form')`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  .createbox {
    width: auto;
    height: auto;
    margin-bottom: 20px;
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    display: flex;
    justify-content: space-between;
    .createbox__create {
      color: ${props => props.theme.txtColor.selected};
    }
  }
`;

const InputBox = styled('div')<{ isAuth?: boolean; isSummoner?: boolean }>`
  width: 100%;
  height: auto;
  margin: 0 0 20px 0;
  position: relative;
  .label {
    width: 100%;
    height: 20px;
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    &:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
    }
    .label__name {
      color: ${props => props.theme.txtColor.primary};
    }
    .label__forgotpw {
      font-size: ${`${DEFAULT_FONTSIZE}px`};
      color: ${props => props.theme.txtColor.selected};
    }
    .errorMessage {
      color: ${props => props.theme.validation.resolve};
    }
  }
  input {
    ${FLOAT_COLOR};
    width: 100%;
    height: 50px;
    border: 0.5px solid white;
    border-radius: ${`${BORDER_RADIUS - 5}px`};
    padding: 0;
    color: ${props => props.theme.txtColor.primary};
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    text-indent: 10px;
    ${TRANSITION};
    &:focus {
      outline: none;
      border-color: ${props => props.theme.txtColor.selected};
    }
  }
  .isVerified {
    ${TRANSITION}
    color: ${props =>
      !props.isAuth ? 'transparent' : props.theme.validation.resolve};
    width: auto;
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    position: absolute;
    top: 47%;
    left: 92%;
  }
  .summonerName {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    input {
      width: 80%;
      height: 100%;
    }
    .verifyBtn {
      width: 70px;
      height: 100%;
      border-radius: ${`${BORDER_RADIUS}px`};
      background-color: ${props => props.theme.btnColor.primary};
      color: ${props => props.theme.txtColor.primary};
      font-size: ${`${DEFAULT_FONTSIZE}px`};
      border: none;
      ${TRANSITION}
      &:hover {
        background-color: ${props => props.theme.btnColor.onHover};
      }
    }
    .isVerifiedSummoner {
      ${TRANSITION}
      color: ${props =>
        !props.isSummoner ? 'transparent' : props.theme.validation.resolve};
      width: auto;
      font-size: ${`${DEFAULT_FONTSIZE}px`};
      position: absolute;
      top: 47%;
      left: 72%;
    }
  }
`;
const VerifyInputBox = styled('div')<{
  requestAuth: boolean;
}>`
  ${TRANSITION}
  width: 30%;
  height: ${props => (!props.requestAuth ? 0 : '80px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => (!props.requestAuth ? 0 : '20px')};
`;
const VerifyInput = styled('input')<{
  requestAuth: boolean;
  code: string;
  isCorrect: boolean;
}>`
  width: 120%;
  height: 50px;
  display: ${props => (!props.requestAuth ? 'none' : null)};
  text-align: center;
  font-size: ${`${LARGE_FONTSIZE - 12}px`};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  ${TRANSITION}
  border-bottom: ${props => (!props.requestAuth ? 0 : '2px')} solid
    ${props =>
    !props.isCorrect
      ? props.theme.validation.error
      : props.theme.txtColor.primary};
  border-radius: 0;
  padding: 0;
  color: ${props => props.theme.txtColor.primary};
  animation: ${props => (props.isCorrect ? null : ERROR_CODE)} 0.2s linear
    forwards;
  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled('button')<{ isEmail?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    !props.isEmail
      ? props.theme.validation.error
      : props.theme.btnColor.primary};
  border: none;
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  color: ${props => props.theme.txtColor.primary};
  font-size: ${`${DEFAULT_FONTSIZE}px`};
  margin-bottom: 10px;
  cursor: pointer;
  ${TRANSITION};
  &:hover {
    background-color: ${props =>
      !props.isEmail
        ? props.theme.validation.error
        : props.theme.btnColor.onHover};
  }
  pointer-events: ${props => (!props.isEmail ? 'none' : 'all')};
`;

const AnotherWay = styled('div')`
  width: 185px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .hr {
    color: ${TRANSPARENT_TXTCOLOR};
    margin-bottom: 10px;
  }
  .login {
    width: 100%;
    height: auto;
    margin: 2px;
    border-radius: ${LOGINBTN_RADIUS_FORKAKAO};
    .login_btn {
      width: 100%;
      height: 100%;
    }
  }
`;
export {
  SignBox,
  Form,
  InputBox,
  SubmitBtn,
  AnotherWay,
  VerifyInput,
  VerifyInputBox,
};
