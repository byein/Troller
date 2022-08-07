import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { BORDER_RADIUS, LARGE_FONTSIZE } from '../global/global';

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
  width: 65%;
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

const Modal = styled('form')`
  width: 35%;
  height: 100%;
  background-color: ${props => props.theme.bgColor.dark};
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export { ModalWrapper, Welcome, Modal };
