import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  GlobalRankWrapper,
  RankItemStyle,
  RankTable,
  RankTableTR,
  RankTitle,
  RankTRBar,
  TableBody,
  TDLeaguePoint,
  TDNickname,
  TDRank,
} from '../../styles/home/home';

interface RankItemProps {
  rank: number;
  nickname: string;
  leaguePoints: string;
}

function RankTableTRBar() {
  return (
    <RankTRBar>
      <td />
      <td />
      <td />
      <td />
    </RankTRBar>
  );
}

function RankItem({ rank, nickname, leaguePoints }: RankItemProps) {
  return (
    <RankTableTR>
      <TDRank>{rank}</TDRank>
      <TDNickname>{nickname}</TDNickname>
      <TDLeaguePoint>League Point:{leaguePoints}</TDLeaguePoint>
    </RankTableTR>
  );
}

function RankTableRender() {
  const [rankData, setRankData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/rank/main')
      .then(async response => {
        const data = await response.data;
        setRankData(data.entries);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const rendering = () => {
    const result: JSX.Element[] = [];
    let idx = 0;
    let i = 0;
    Object.entries(rankData).forEach(entrie => {
      let name = '';
      let leaguePoints = '';
      Object.entries(entrie[1]).forEach(item => {
        if (idx % 2 === 0) {
          name = item[1] as string;
        } else {
          leaguePoints = item[1] as string;
          i += 1;
        }
        if (i === 10 && name && leaguePoints) {
          result.push(
            <div>
              <RankItem
                key={i}
                rank={i}
                nickname={name}
                leaguePoints={leaguePoints}
              />
            </div>
          );
        } else if (name && leaguePoints) {
          result.push(
            <RankItemStyle>
              <RankItem
                key={i}
                rank={i}
                nickname={name}
                leaguePoints={leaguePoints}
              />
              <RankTableTRBar />{' '}
            </RankItemStyle>
          );
        }
        leaguePoints = '';
        idx += 1;
      });
    });
    return result;
  };
  return <TableBody>{rendering()}</TableBody>;
}
function GeneralRank() {
  return (
    <GlobalRankWrapper>
      <RankTitle>노멀 랭킹</RankTitle>
      <RankTable>
        <RankTableRender />
      </RankTable>
    </GlobalRankWrapper>
  );
}
function ProRank() {
  return (
    <GlobalRankWrapper>
      <RankTitle>트롤 랭킹</RankTitle>
      <RankTable>
        <RankTableRender />
      </RankTable>
    </GlobalRankWrapper>
  );
}
export { GeneralRank, ProRank };
