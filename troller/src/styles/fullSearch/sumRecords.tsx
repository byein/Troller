import styled from '@emotion/styled';
import { BORDER_RADIUS, FLOAT_COLOR } from '../global/global';
// SumRecords 부분 전체 wrapper
const SumRecordsWrapper = styled('div')`
  ${FLOAT_COLOR};
  display: inline-flex;
  flex-direction: row;
  color: white;
  width: 90%;
  height: 180px;
  border-radius: ${`${BORDER_RADIUS}px`};
  padding: 24px 21px;
`;

// stat, chmapion, position 각각 wrapepr
const StatsWrapper = styled('div')`
  flex: 1;
  padding-right: 10px;
`;
const ChampionWrapper = styled('div')`
  flex: 1;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;
const PositionWrapper = styled('div')`
  flex: 1;
  padding-left: 10px;
`;

// 각 wrapper 사이 bar
const Bar = styled('div')`
  border: 0.1px solid white;
`;

// stat 부분 style
const KDAWrapper = styled('div')`
  width: 100%;
  // flex-direction: row;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const PieChart = styled('div')`
  position: relative;
  width: 88px;
  height: 88px;
  background-color: #444444;
  margin-right: 12px;
`;
const ChartText = styled('div')`
  position: absolute;
  width: 88px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 14px;
`;
const SumRecordTitleWrapper = styled('div')`
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 10px;
`;
const KillWrapper = styled('div')``;

const AverageKDA = styled('div')`
  margin-top: 2px;
  line-height: 26px;
  font-size: 20px;
  font-weight: bold;
`;

const KillParticipation = styled('div')`
  color: red;
  font-size: 12px;
  line-height: 16px;
  margin-top: 2px;
`;

// champion 부분 style
const ChampionProfile = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
`;

const ChampionImageWrapper = styled('img')`
  width: 30px;
  height: 30px;
  background-color: #444444;
  margin-right: 10px;
  border-radius: 50%;
`;
const ChampionInfoWrapper = styled('div')``;

const ChampionName = styled('div')`
  font-size: 12px;
  margin-bottom: 4px;
`;
const ChampionWinLose = styled('div')`
  font-size: 11px;
`;
// position 부분 style
const PositionItemWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
`;

const PositionImageWrapper = styled('img')`
  width: 50px;
  height: 50px;
  background-color: #444444;
  margin-right: 10px;
`;
const PositionInfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const PositionName = styled('div')`
  font-size: 16px;
  margin-bottom: 12px;
`;
const PositionProb = styled('div')`
  font-size: 12px;
  color: #458cc8;
`;
const PositionWinProb = styled('span')`
  font-size: 12px;
  border-left: 0.1px solid gray;
  margin-left: 10px;
  padding-left: 10px;
  color: white;
`;

export {
  SumRecordsWrapper,
  StatsWrapper,
  KDAWrapper,
  SumRecordTitleWrapper,
  KillWrapper,
  KillParticipation,
  AverageKDA,
  PieChart,
  ChartText,
  ChampionWrapper,
  PositionWrapper,
  Bar,
  ChampionProfile,
  ChampionInfoWrapper,
  ChampionImageWrapper,
  ChampionName,
  ChampionWinLose,
  PositionItemWrapper,
  PositionImageWrapper,
  PositionInfoWrapper,
  PositionName,
  PositionProb,
  PositionWinProb,
};
