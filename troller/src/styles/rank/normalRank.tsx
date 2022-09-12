import styled from '@emotion/styled';

const RankWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const RankTable = styled('table')`
  width: 80%;
  background-color: #1c1c1f;
  color: #ffffff;
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #000;
  tr:nth-last-child(1) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const RankTR = styled('tr')`
  width: 100%;
  height: fit-content;
  margin: 1px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #000;
  border-radius: 10px;
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #000;
  }
  td:nth-last-child(1) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-style: hidden;
  }
`;
const RankTH = styled('th')`
  background-color: #282830;
  height: 30px;
  vertical-align: middle;
  color: #7b7a8e;
`;
const RankTD = styled('td')`
  height: 40px;
  background-color: #31313c;
  vertical-align: middle;
  text-align: center;
  progress {
    text-align: center;
    height: 2em;
  }
  progress:after {
    content: attr(value) '%';
    vertical-align: -0.5em;
    color: black;
  }
`;

const IconWrapper = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export { RankWrapper, RankTable, RankTR, RankTH, RankTD, IconWrapper };
