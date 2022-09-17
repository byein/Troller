import styled from '@emotion/styled';
import { BORDER_RADIUS, FLOAT_COLOR } from '../global/global';
// SumRecords 부분 전체 wrapper
const RecordsWrapper = styled('div')`
  ${FLOAT_COLOR};
  display: inline-flex;
  flex-direction: row;
  color: white;
  width: 90%;
  margin-top: 20px;
  height: fit-content;
  border-radius: ${`${BORDER_RADIUS}px`};
  padding: 24px 21px;
`;

const RecordItemWrapper = styled('div')<{ result: string }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 96px;
  border-radius: 4px;
  border-left-width: 6px;
  border-left-style: solid;
  border-color: ${props => (props.result === 'LOSE' ? '#e84057' : '#5383E8')};
  background-color: ${props =>
    props.result === 'LOSE' ? '#fff1f3' : '#ecf2ff'};
`;
const RecordItemUl = styled('ul')`
  width: 100%;
`;

const RecordItemLi = styled('li')`
  width: 100%;
  position: relative;
  margin-bottom: 8px;
`;

const FlexDiv = styled('div')<{ result: string }>`
  display: flex;
  align-items: center;
  height: fit-content;
  .kda {
    height: 53px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 85px;
    padding-right: 12px;
    margin-right: 8px;
    margin-left: 12px;
    border-right: 1px solid
      ${props => (props.result === 'LOSE' ? '#ffd8d9' : '#D5E3FF')};
    .k-d-a {
      line-height: 22px;
      font-size: 15px;
      font-family: 'Roboto', sans-serif;
      color: #9aa4af;
      span {
        font-weight: bold;
        color: #202d37;
      }
      .d {
        color: #d31a45;
      }
    }
    .ratio {
      color: #758592;
    }
  }
  .stats {
    height: 53px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80px;
    color: #758592;
    font-size: 11px;
    justify-content: space-evenly;
    .p-kill {
      color: #d31a45;
    }
    .average-tier {
      font-weight: 700;
      text-transform: capitalize;
      font-family: 'Roboto', sans-serif;
    }
  }
  .items {
    display: flex;
    ul {
      display: flex;
      li {
        width: 22px;
        height: 22px;
        margin-left: 2px;
        background-color: #ffbac3;
        border-radius: 4px;
        img {
          border-radius: 4px;
        }
      }
    }
    .ward {
      width: 22px;
      height: 22px;
      margin-left: 2px;
      margin-right: 4px;
      background-color: #ffbac3;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }
`;
const RecordItemGame = styled('div')<{ result: string }>`
  width: 50px;
  margin-left: 12px;
  color: #758592;
  line-height: 16px;
  font-size: 11px;
  .result {
    font-weight: bold;
    color: ${props => (props.result === 'LOSE' ? '#d31a45' : '#4171D6')};
  }
  .bar {
    width: 48px;
    height: 1px;
    margin: 8px 0 4px;
    background-color: ${props =>
      props.result === 'LOSE' ? '#ffd8d9' : '#D5E3FF'};
  }
  .type {
    font-weight: bold;
  }
`;

const RecordItemInfo = styled('div')`
  margin-left: 8px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .champion {
    height: 53px;
    display: flex;
    align-items: center;
    .icon {
      display: block;
      width: 48px;
      height: 48px;
      img {
        display: block;
        border-radius: 50%;
      }
      .champion-level {
        position: relative;
        right: -30px;
        bottom: 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        font-size: 11px;
        border-radius: 50%;
        color: #fff;
        background: #202d37;
        font-family: 'Roboto', sans-serif;
      }
    }
  }
  .spells {
    margin-left: 4px;
    .spell {
      width: 22px;
      height: 22px;
      margin-bottom: 2px;
    }
    img {
      position: relative;
      border-radius: 4px;
    }
  }
  .runes {
    margin-left: 2px;
    .rune {
      width: 22px;
      height: 22px;
    }
  }
`;

const RecordItemInfoWrapper = styled('div')`
  display: inline-block;
  width: fit-content;
  font-size: 12px;
  vertical-align: top;
`;
const RecordItemParticipants = styled('div')`
  display: flex;
  ul {
    margin-right: 8px;
    li {
      display: flex;
      align-items: center;
      width: 88px;
      height: 18px;
      text-align: left;
      white-space: nowrap;
      .icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
        img {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }
      }
      .name {
        display: inline-block;
        max-width: 60px;
        vertical-align: middle;
        text-align: left;
        white-space: nowrap;
        font-size: 12px;
        color: #758592;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;
const RecordItemAction = styled('div')<{ result: string }>`
  position: absolute;
  right: 0px;
  width: 40px;
  height: 96px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  .detail {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    width: 40px;
    height: 96px;
    background-color: ${props =>
      props.result === 'LOSE' ? '#FFD8D9' : '#D5E3FF'};
    img {
      position: absolute;
      bottom: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
    }
  }
`;

export {
  FlexDiv,
  RecordsWrapper,
  RecordItemWrapper,
  RecordItemUl,
  RecordItemLi,
  RecordItemGame,
  RecordItemInfo,
  RecordItemParticipants,
  RecordItemAction,
  RecordItemInfoWrapper,
};
