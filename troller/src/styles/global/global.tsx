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
  min-height: 100vh;
  position: relative;
`;

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
    props.pathname.includes('/rank') ||
    props.pathname.includes('/sub')
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
      .alert {
        display: block;
        position: absolute;
        top: 27px;
        right: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${props => props.theme.validation.resolve};
      }
      .block {
        height: 50px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border: none;
        background-color: transparent;
        .mypage {
          cursor: pointer;
          color: ${props => props.theme.txtColor.primary};
        }
        .menuBox {
          width: 350%;
          height: auto;
          position: absolute;
          top: 50px;
          border: 1px solid ${props => props.theme.txtColor.primary};
          border-bottom: none;
          .menues {
            .menu {
              width: 100%;
              height: 30px;
              background-color: ${props => props.theme.bgColor.dark};
              color: ${props => props.theme.txtColor.primary};
              cursor: pointer;
              border: none;
              border-bottom: 1px solid ${props => props.theme.txtColor.primary};
              position: relative;
              .alert {
                position: absolute;
                top: 12.5px;
                right: 8px;
                display: block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: ${props => props.theme.validation.resolve};
              }
              ${TRANSITION}
              &:hover {
                color: ${props => props.theme.txtColor.selected};
              }
            }
          }
        }
      }
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
  min-height: 100%;
  padding: ${props =>
    props.pathname.includes('/sub') ? `80px 0 0 0` : `80px 15px 0 15px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: linear-gradient(
    ${props =>
      props.pathname === '/find_duo' ||
      props.pathname.includes('/multi_search') ||
      props.pathname.includes('/rank') ||
      props.pathname.includes('/sub')
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
};
