import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { BORDER_RADIUS, DEFAULT_FONTSIZE } from '../global/global';

const StatWrapper = styled('div')`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 0 0;
`;
const UserStat = styled('div')<{ load: boolean }>`
  width: 270px;
  height: 100%;
  color: ${props => props.theme.txtColor.primary};
  text-align: center;
  border-radius: ${`${BORDER_RADIUS - 5}px`};
  background-color: ${props =>
    props.load ? props.theme.txtColor.primary : props.theme.bgColor.dark};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .trollBox {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${`${DEFAULT_FONTSIZE}px`};
    color: ${props => props.theme.bgColor.light};
    padding: 0 5px;
    .troll .trollPer {
      color: ${props => props.theme.txtColor.selected};
    }
    .trollAlert {
      display: block;
      padding: 4px;
      border-radius: 5px;
      color: ${props => props.theme.bgColor.light};
      background-color: ${props => props.theme.bgColor.dark};
    }
  }
  .userBox {
    width: 100%;
    height: 70px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.3);
    .name {
      width: 100%;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.bgColor.light};
      font-size: ${`${DEFAULT_FONTSIZE + 5}px`};
    }
    .tier {
      width: 100%;
      height: 45px;
      display: flex;
      color: ${props => props.theme.bgColor.light};
      align-items: center;
      .tierContainer {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0 5px 0 0;
        .tierIcon {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px 0 0;
          .icon {
            width: 100%;
            height: 100%;
          }
        }
      }
      .pointContainer {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: flex-start;
        margin: 0 0 0 5px;
      }
    }
  }
  .championBox {
    width: 100%;
    height: 120px;
    padding: 0 5px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.3);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    .title {
      display: flex;
      align-items: center;
      color: ${props => props.theme.bgColor.light};
      width: 100%;
      height: 35px;
      font-size: ${`${DEFAULT_FONTSIZE}px`};
    }
    .content {
      width: 100%;
      height: 85px;
      .inner {
        width: 60%;
        height: 90%;
        display: flex;
        justify-content: space-between;
        margin: auto;
        .champs {
          width: 33%;
          height: 100%;
          .imgBox {
            width: 90%;
            margin: 0 auto;
            border-radius: 50%;
            overflow: hidden;
            aspect-ratio: 1 / 1;
            .img {
              width: 100%;
            }
          }
          .desc {
            width: 100%;
            color: ${props => props.theme.bgColor.light};
            .winrate,
            .played {
              display: block;
              width: 100%;
              font-size: ${`${DEFAULT_FONTSIZE - 2}px`};
              margin: 0 0 3px 0;
            }
          }
        }
      }
    }
  }
  .positionBox {
    width: 100%;
    height: 120px;
    background-color: ${props => props.theme.bgColor.dark};
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    .pos {
      width: 50%;
      height: 100%;
      box-shadow: rgba(255, 255, 255, 0.25) 0px 30px 60px -12px inset,
        rgba(255, 255, 255, 0.3) 0px 18px 30px -18px inset;
      &:first-of-type {
        border-right: 0.5px solid rgba(255, 255, 255, 0.3);
      }
      .iconBox {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 50px;
          height: 50px;
        }
      }
      .desc {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          display: block;
          width: 100%;
        }
        .played {
          display: block;
          width: 100%;
          height: 15%;
        }
      }
    }
  }
  .recordBox {
    width: 100%;
    height: calc(100% - 340px);
    padding: 10px;
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: ${`${DEFAULT_FONTSIZE}px`};
        color: ${props => props.theme.bgColor.light};
      }
    }
    .records {
      width: 100%;
      height: 125px;
    }
  }
`;

const Record = styled.div<{ win: boolean }>`
  width: 100%;
  height: 20px;
  margin: 5px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .championBox {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
      .championUi {
        width: 23px;
        height: 100%;
      }
    }
    .isWin {
      font-size: ${`${DEFAULT_FONTSIZE - 2}px`};
      font-weight: 600;
      color: ${props => (props.win ? '#149eda' : '#DB6A9E')};
    }
  }
  .kdaBox {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${props => (props.win ? '#149eda' : '#DB6A9E')};
    .kda {
      font-size: ${`${DEFAULT_FONTSIZE - 2}px`};
      color: ${props => props.theme.bgColor.light};
    }
  }
  .time {
    font-size: ${`${DEFAULT_FONTSIZE - 2}px`};
    color: white;
  }
`;

const LOADER_ANIMATION = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 3px solid transparent;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  animation: ${LOADER_ANIMATION} 1s linear infinite;
`;

export { StatWrapper, UserStat, Record, Loader };
