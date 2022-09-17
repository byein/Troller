import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  IconWrapper,
  RankTable,
  RankTD,
  RankTH,
  RankTR,
  RankWrapper,
} from '../../styles/rank/normalRank';

interface RankProps {
  player: {
    rank: string;
    name: string;
    icon: string;
    leaguePoints: string;
    summonerLevel: string;
    tier: string;
    tierImg: string;
    winRate: string;
  }[];
}

function NormalRank() {
  const [rankData, setRankData] = useState<RankProps>();

  const getRankData = () => {
    axios
      .get('/api/rank/normal')
      .then(async response => {
        const data = await response.data;
        setRankData(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };
  useEffect(() => {
    getRankData();
  }, []);
  return (
    <RankWrapper>
      <RankTable>
        <thead>
          <RankTR>
            <RankTH
              style={{
                borderTopLeftRadius: 10,
              }}
            >
              #
            </RankTH>
            <RankTH>소환사</RankTH>
            <RankTH>티어</RankTH>
            <RankTH>LP</RankTH>
            {/* <RankTH>모스트 챔피언</RankTH> */}
            <RankTH>레벨</RankTH>
            <RankTH
              style={{
                borderTopRightRadius: 10,
              }}
            >
              승률
            </RankTH>
          </RankTR>
        </thead>
        <tbody>
          {rankData?.player.map((v, i) => {
            // eslint-disable-next-line no-param-reassign
            v.rank = String(i + 1);
            return (
              <RankTR>
                <RankTD style={{ fontWeight: 'bold' }}>{v.rank}</RankTD>
                <RankTD style={{ fontWeight: 'bold' }}>
                  <IconWrapper src={v.icon} />
                  {v.name}
                </RankTD>
                <RankTD>{v.tier}</RankTD>
                <RankTD>{v.leaguePoints}</RankTD>
                <RankTD>{v.summonerLevel}</RankTD>
                <RankTD>
                  <progress value={v.winRate.split('%')[0]} max="100">
                    {v.winRate}
                  </progress>
                </RankTD>
              </RankTR>
            );
          })}
        </tbody>
      </RankTable>
    </RankWrapper>
  );
}
export default NormalRank;
