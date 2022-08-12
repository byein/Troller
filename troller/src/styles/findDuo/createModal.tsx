import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  DEFAULT_FONTSIZE,
  LARGE_FONTSIZE,
  TRANSITION,
} from '../global/global';

const MODAL_FADE_IN = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  60% {
    height: 250px;
    opacity: 0;
  }
  100% {
    height: 250px;
    opacity: 1;
  }
`;

const TEXT = keyframes`
0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;

const ModalWrapper = styled('div')`
  width: 1410px;
  display: flex;
  justify-content: flex-end;
  animation: ${MODAL_FADE_IN} 0.5s ease-out forwards;
  margin: 0 0 15px 0;
`;

const Welcome = styled('div')`
  width: ${`${100 - 32.6}%`};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    color: #fff;
    font-size: 70px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 120px;
    left: 52%;
    text-align: center;
    &:first-of-type {
      color: transparent;
      -webkit-text-stroke: 2px ${props => props.theme.bgColor.dark};
    }
    &:nth-of-type(2) {
      color: ${props => props.theme.bgColor.dark};
      animation: ${TEXT} 4s ease-in-out infinite;
    }
  }
`;

const Modal = styled('form')<{ mike: boolean }>`
  width: 32.6%;
  height: 100%;
  background-color: ${props => props.theme.bgColor.dark};
  border-radius: ${`${BORDER_RADIUS}px`};
  ${TRANSITION}
  border: 5px double
    ${props =>
    props.mike ? props.theme.validation.resolve : props.theme.bgColor.light};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: ${props => props.theme.bgColor.light};
  font-size: ${`${DEFAULT_FONTSIZE}px`};
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  .header {
    width: 100%;
    height: 19%;
    display: flex;
    .validTime {
      width: 105px;
      height: 90%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 5px 0 0;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: 1px solid ${props => props.theme.bgColor.light};
      .title {
        width: auto;
        margin: 0 10px 0 0;
      }
      .time {
        width: 30%;
        height: 50%;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${props => props.theme.bgColor.light};
        color: ${props => props.theme.bgColor.light};
        padding: 0;
        &:focus {
          outline: none;
        }
      }
    }
    .mike {
      width: 85px;
      height: 90%;
      margin: 0 5px 0 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: 1px solid ${props => props.theme.bgColor.light};
      .title {
        width: auto;
        margin: 0 5px 0 0;
        color: ${props =>
          props.mike
            ? props.theme.validation.resolve
            : props.theme.bgColor.light};
      }
      .switch {
        width: 45px;
        height: 28px;
        border-radius: 14px;
        display: flex;
        ${TRANSITION}
        background-color: ${props =>
          props.mike
            ? props.theme.validation.resolve
            : props.theme.bgColor.light};
        .toggle {
          width: 28px;
          height: 28px;
          ${TRANSITION}
          transform: ${props =>
            props.mike ? 'translateX(17px)' : 'translateX(0)'};
          background-color: ${props => props.theme.bgColor.dark};
          border: 1px solid
            ${props =>
              props.mike
                ? props.theme.validation.resolve
                : props.theme.bgColor.light};
          color: transparent;
          border-radius: 14px;
          cursor: pointer;
        }
      }
    }
    .submit {
      width: calc(100% - 200px);
      height: 90%;
      cursor: pointer;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: none;
      background-color: ${props => props.theme.bgColor.light};
      ${TRANSITION}
      &:hover {
        background-color: ${props => props.theme.txtColor.selected};
      }
    }
  }
  .body {
    width: 98%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 20%;
      text-indent: 5px;
      border: none;
      background-color: transparent;
      color: ${props => props.theme.bgColor.light};
      font-size: ${`${DEFAULT_FONTSIZE + 5}px`};
      padding: 0;
      ${TRANSITION}
      &:focus {
        outline: none;
      }
    }
    .seperator {
      width: 100%;
    }
    .content {
      width: 90%;
      height: 80%;
      text-indent: 5px;
      background-color: transparent;
      border: none;
      color: ${props => props.theme.bgColor.light};
      font-size: ${`${DEFAULT_FONTSIZE + 2}px`};
      padding: 0;
      resize: none;
      ${TRANSITION}
      &:focus {
        outline: none;
        border-bottom-color: ${props => props.theme.txtColor.selected};
      }
    }
  }
`;

export { ModalWrapper, Welcome, Modal };
