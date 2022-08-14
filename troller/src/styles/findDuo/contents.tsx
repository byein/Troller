import styled from '@emotion/styled';
import {
  BORDER_RADIUS,
  BOX_SHADOW,
  LARGE_FONTSIZE,
  Skeleton,
  TRANSITION,
} from '../global/global';

const kdaRateMean = 0.7;
const winRateMean = 70;

const ContentsWrapper = styled('div')`
  width: 1410px;
  columns: 3;
  column-gap: 16px;
`;

const Content = styled('div')`
  width: 100%;
  height: auto;
  display: inline-block;
  padding: 15px;
  margin-bottom: 16px;
  position: relative;
  border-radius: ${`${BORDER_RADIUS - 3}px`};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${props => props.theme.bgColor.dark};
  color: ${props => props.theme.txtColor.primary};
  ${TRANSITION}
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const Header = styled('form')<{ isLoading: boolean }>`
  ${props => (props.isLoading ? Skeleton : null)}
  width: 100%;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 0 auto 0;
  font-size: 15px;
  .user {
    .lolName {
      color: ${props => props.theme.txtColor.selected};
      font-weight: bold;
    }
  }
  .delete {
    width: auto;
    height: 100%;
    border: none;
    background-color: transparent;
    border-radius: ${`${BORDER_RADIUS - 5}px`};
    padding: 0;
    cursor: pointer;
    color: ${props => props.theme.txtColor.primary};
    ${TRANSITION}
    &:hover {
      color: #f87d64;
    }
  }
`;

const ArticleWrapper = styled('div')`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 10px 0;
`;

const Article = styled('div')<{ isLoading: boolean }>`
  width: 270px;
  min-height: 100px;
  margin: 0 5px 0 0;
  .titleBox {
    ${props => (props.isLoading ? Skeleton : null)}
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .micOn {
      font-size: 15px;
      color: ${props => props.theme.validation.resolve};
    }
    .micOff {
      font-size: 15px;
      color: ${props => props.theme.bgColor.light};
    }
    .title {
      font-size: ${`${LARGE_FONTSIZE - 10}px`};
      font-weight: bold;
    }
  }
  .content {
    ${props => (props.isLoading ? Skeleton : null)}
    display: block;
    width: 100%;
    height: 90px;
    border-radius: ${`${BORDER_RADIUS - 3}px`};
    word-wrap: break-word;
    color: ${props => props.theme.bgColor.light};
  }
`;

const UserStatus = styled('div')<{
  isLoading: boolean;
  kill: number;
  death: number;
  assist: number;
  win: number;
  lose: number;
}>`
  ${props => (props.isLoading ? Skeleton : null)}
  width: 155px;
  height: 128px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${`${BORDER_RADIUS - 3}px`};
  ${BOX_SHADOW}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .firstLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 29px;
    .positionBox {
      height: 90%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      object-position: center;
      margin: 0 5px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .position {
        width: 90%;
      }
    }
    .mostChamps {
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: ${`${BORDER_RADIUS - 5}px`};
      overflow: hidden;
      display: flex;
      align-items: center;
      border: 0.5px solid ${props => props.theme.txtColor.primary};
      img {
        width: 90%;
      }
    }
  }
  .secondLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 29px;
    .tierBox {
      height: 90%;
      aspect-ratio: 1 / 1;
      margin: 0 5px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .tier {
        width: 90%;
      }
    }
    .kda {
      font-size: ${`${LARGE_FONTSIZE - 15}px`};
      margin: 0 10px 0 0;
    }
    .kdaRate {
      font-size: ${`${LARGE_FONTSIZE - 15}px`};
      color: ${props =>
        (props.kill + props.assist) / props.death >= kdaRateMean
          ? props.theme.validation.resolve
          : props.theme.validation.error};
    }
  }
  .thirdLine {
    display: flex;
    align-items: center;
    width: 100%;
    height: 29px;
    color: ${props => props.theme.bgColor.dark};
    .winLoseBox {
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      border-radius: ${`${BORDER_RADIUS - 3}px`};
      overflow: hidden;
      border: 1px solid ${props => props.theme.bgColor.light};
      .win,
      .lose {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${`${LARGE_FONTSIZE - 17}px`};
      }
      .win {
        width: ${props => (props.win / (props.win + props.lose)) * 100}%;
        background-color: #04adef;
        opacity: 0.9;
        border-right: 1px solid ${props => props.theme.bgColor.light};
      }
      .lose {
        width: ${props => (props.lose / (props.win + props.lose)) * 100}%;
        background-color: #f172ac;
        opacity: 0.9;
      }
    }
    .winRate {
      color: ${props =>
        (props.win / (props.win + props.lose)) * 100 >= winRateMean
          ? props.theme.validation.resolve
          : props.theme.validation.error};
    }
  }
`;

const ContentFooter = styled('div')`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const ChatBtnBox = styled('div')`
  width: 100%;
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
  ${TRANSITION}
  &:hover {
    background-color: ${props => props.theme.txtColor.selected};
  }
`;

export {
  ContentsWrapper,
  Content,
  Header,
  ArticleWrapper,
  Article,
  UserStatus,
  ContentFooter,
  ChatBtnBox,
  ChatBtn,
};
