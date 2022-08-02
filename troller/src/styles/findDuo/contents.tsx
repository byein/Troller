import styled from '@emotion/styled';
import { BORDER_RADIUS, LARGE_FONTSIZE } from '../global/global';

const ContentsWrapper = styled('div')`
  width: 100%;
  columns: 3;
  column-gap: 16px;
`;

const Content = styled('div')`
  width: 100%;
  min-height: 100px;
  display: inline-block;
  padding: 15px;
  margin-bottom: 16px;
  position: relative;
  border-radius: ${`${BORDER_RADIUS - 3}px`};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${props => props.theme.bgColor.dark};
  color: ${props => props.theme.txtColor.primary};
`;

const Timer = styled('span')<{ validTime: number }>`
  width: 100%;
  margin: 0 0 10px 0;
  display: block;
  padding: auto 0 auto 0;
  color: ${props =>
    props.validTime > 0
      ? props.theme.txtColor.primary
      : props.theme.validation.error};
`;

const ArticleWrapper = styled('div')`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 10px 0;
`;

const Article = styled('div')`
  width: 45%;
  min-height: 100px;
  .titleBox {
    width: 100%;
    display: flex;
    align-items: center;
    .title {
      font-size: ${`${LARGE_FONTSIZE - 10}px`};
      font-weight: bold;
      margin: 0 5px 0 0;
    }
    .micOn {
      font-size: 20px;
      color: ${props => props.theme.validation.resolve};
    }
    .micOff {
      font-size: 20px;
      color: ${props => props.theme.validation.error};
    }
  }
  .content {
    display: block;
    width: 100%;
    padding-top: 10px;
    word-wrap: break-word;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const UserStatus = styled('div')<{ kdaRate: number }>`
  width: 55%;
  height: 100px;
  padding: 0 0 0 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${`${BORDER_RADIUS - 3}px`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .firstLine {
    display: flex;
    align-items: center;
    width: 100%;
    height: 29px;
    .positionBox {
      height: 90%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      object-position: center;
      margin: 0 5px 0 0;
      .position {
        width: 110%;
      }
    }
    .lolName {
      font-size: ${`${LARGE_FONTSIZE - 15}px`};
    }
  }
  .secondLine {
    display: flex;
    align-items: center;
    width: 100%;
    height: 29px;
    .tierBox {
      height: 90%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      object-position: center;
      margin: 0 5px 0 0;
      .tier {
        width: 110%;
      }
    }
    .kda {
      font-size: ${`${LARGE_FONTSIZE - 15}px`};
      margin: 0 10px 0 0;
    }
    .kdaRate {
      font-size: ${`${LARGE_FONTSIZE - 15}px`};
      color: ${props =>
        props.kdaRate >= 0.7
          ? props.theme.validation.resolve
          : props.theme.validation.error};
    }
  }
  .thirdLine {
    display: flex;
    align-items: center;
    width: 100%;
    height: 29px;
    background-color: wheat;
    color: black;
  }
`;

const ContentFooter = styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .mostChampBox {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .mostChamps {
      height: 90%;
      aspect-ratio: 1 / 1;
      background-color: wheat;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      overflow: hidden;
      object-position: center;
      img {
        width: 110%;
      }
    }
  }
`;

const ChatBtnBox = styled('div')`
  width: 55%;
  height: 100%;
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ChatBtn = styled('button')`
  width: 49%;
  height: 100%;
  border: none;
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  cursor: pointer;
  background-color: ${props => props.theme.bgColor.light};
`;

export {
  ContentsWrapper,
  Content,
  Timer,
  ArticleWrapper,
  Article,
  UserStatus,
  ContentFooter,
  ChatBtnBox,
  ChatBtn,
};
