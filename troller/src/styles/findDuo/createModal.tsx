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

const TEXT_FADE_IN = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalWrapper = styled('div')`
  width: 100%;
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
  .welcome {
    font-size: ${`${LARGE_FONTSIZE}px`};
    font-weight: 600;
    color: ${props => props.theme.bgColor.dark};
    animation: ${TEXT_FADE_IN} 2s ease-out forwards 0.5s;
  }
`;

const Modal = styled('form')<{ mike: boolean }>`
  width: 32.6%;
  height: 100%;
  background-color: ${props => props.theme.bgColor.dark};
  border-radius: ${`${BORDER_RADIUS}px`};
  border: 5px double ${props => props.theme.txtColor.selected};
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
    justify-content: space-between;
    .validTime {
      width: 150px;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: 1px solid ${props => props.theme.bgColor.light};
      .title {
        width: auto;
        margin: 0 5px 0 0;
      }
      .time {
        width: 20%;
        height: 50%;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${props => props.theme.bgColor.light};
        &:focus {
          outline: none;
        }
      }
    }
    .mike {
      width: 115px;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      border: 1px solid ${props => props.theme.bgColor.light};
      .title {
        width: auto;
        margin: 0 5px 0 0;
      }
      .switch {
        width: 45px;
        height: 28px;
        border-radius: 14px;
        border: none;
        padding: 0;
        display: flex;
        ${TRANSITION}
        background-color: ${props =>
          props.mike
            ? props.theme.validation.resolve
            : props.theme.validation.error};
        .toggle {
          width: 28px;
          height: 28px;
          ${TRANSITION}
          transform: ${props =>
            props.mike ? 'translateX(0)' : 'translateX(17px)'};
          background-color: ${props => props.theme.bgColor.dark};
          border: 1px solid ${props => props.theme.bgColor.light};
          border-radius: 14px;
          cursor: pointer;
          box-shadow: ${props => props.theme.txtColor.selected} 0px 1.5px 5px;
        }
      }
    }
    .submit {
      width: calc(100% - 280px);
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
