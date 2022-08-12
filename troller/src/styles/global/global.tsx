import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const BORDER_RADIUS = 10;
const DEFAULT_FONTSIZE = 15;
const LARGE_FONTSIZE = 30;
const TRANSITION = css`
  transition: all 0.2s linear;
`;
const BOX_SHADOW = css`
  box-shadow: 10px 10px 20px 5px rgba(43, 37, 37, 0.25);
`;
const FLOAT_COLOR = css`
  background-color: rgba(10, 31, 98, 0.4);
`;
const TRANSPARENT_TXTCOLOR = `rgba(255, 255, 255, 0.5)`;

const GlobalContainer = styled('div')`
  width: 100vw;
  height: auto;
  position: relative;
`; // Header와 MainContainer를 감싸는 Container!

const GlobalHeader = styled('header')<{ pathname: string }>`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${props =>
    props.pathname === '/find_duo' ||
    props.pathname.includes('/multi_search') ||
    props.pathname.includes('/rank')
      ? props.theme.bgColor.dark
      : 'none'};
  z-index: 1;
  .innerWrapper {
    width: 1400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin: auto 0 auto 0;
      color: ${props => props.theme.txtColor.primary};
    }
    .leftSideBlock {
      width: 400px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        font-size: 30px;
        color: ${props => props.theme.txtColor.primary};
      }
      div {
        width: 280px;
        height: 100%;
        font-size: ${`${DEFAULT_FONTSIZE}px`};
        display: ${props =>
          props.pathname === '/sign_in' ||
          props.pathname === '/sign_up' ||
          props.pathname === '/forgot_pw'
            ? 'none'
            : 'block'};
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
    .signin {
      height: 100%;
      margin: 0;
      font-size: ${`${DEFAULT_FONTSIZE}px`};
      color: ${props => props.theme.txtColor.primary};
      display: ${props =>
        props.pathname === '/sign_in' ||
        props.pathname === '/sign_up' ||
        props.pathname === '/forgot_pw'
          ? 'none'
          : 'flex'};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .block {
        display: block;
        .mypage {
          cursor: pointer;
        }
      }
    }
  }
`;

const Menu = styled('span')`
  width: 100px;
  height: 80px;
  background-color: ${props => props.theme.bgColor.light};
  border-radius: ${`${BORDER_RADIUS}px`};
  position: absolute;
  right: 15px;
  top: 50px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  .menues {
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    width: 100%;
    height: 40px;
    color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:first-of-type {
      border-bottom: 1px solid;
      border-bottom-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Tab = styled('li')<{ isActive: boolean }>`
  margin: auto;
  ${TRANSITION}
  color: ${props =>
    !props.isActive
      ? props.theme.txtColor.primary
      : props.theme.txtColor.selected};
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.txtColor.selected};
  }
`;

const MainContainer = styled('div')<{ pathname: string }>`
  width: 100vw;
  min-height: 100vh;
  padding: 80px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: linear-gradient(
    ${props =>
      props.pathname === '/find_duo' ||
      props.pathname.includes('/multi_search') ||
      props.pathname.includes('/rank')
        ? `0, ${props.theme.bgColor.light} 0, ${props.theme.bgColor.light} 0`
        : `180deg, ${props.theme.bgColor.blue} 0.06%, ${props.theme.bgColor.gray} 100%`}
  );
  z-index: 0;
`;

const SKELETON_ANIMATION = keyframes`
  0% {
    background-color: #7f8c8d;
    opacity: 0.5;
  }
  50% {
    background-color: #bdc3c7;
    opacity: 0.5;
  }
  100% {
    background-color: #7f8c8d;
    opacity: 0.5;
  }
`;
const SKELETON_BAR_ANIMATION = keyframes`
  0% {
    transform: translateY(0) rotate(-45deg);
    opacity: 0.3;
  }
  100% {
    transform: translateY(1000px) rotate(-45deg);
    opacity: 0.5;
  }
`;

const Skeleton = css`
  width: 100%;
  animation: ${SKELETON_ANIMATION} 0.9s linear infinite;
  position: relative;
  overflow: hidden;
`;

export {
  GlobalContainer,
  MainContainer,
  Tab,
  GlobalHeader,
  BORDER_RADIUS,
  FLOAT_COLOR,
  DEFAULT_FONTSIZE,
  LARGE_FONTSIZE,
  BOX_SHADOW,
  TRANSPARENT_TXTCOLOR,
  TRANSITION,
  Skeleton,
  Menu,
};
