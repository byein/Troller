/* eslint-disable import/no-cycle */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stat from '../../components/fullSearch/stats';
import { useApi } from '../../hooks/axiosHooks';
import {
  Container,
  Header,
  List,
  StatHeader,
} from '../../styles/fullSearch/aiMatch';

export interface AiMatchType {
  lolName: string;
  trollPossibility: string;
  tier: string;
  winRate: string;
  ranking: string;
}

function AiMatch() {
  const { userId } = useParams();
  const [aiMatchData, setAiMatchData] = useState<AiMatchType[]>();
  const a = 1;
  useEffect(() => {
    (async () => {
      const { status, data } = await useApi.get('/api/search/user/cluster', {
        params: {
          lolName: userId,
        },
      });
      if (status === 200) {
        setAiMatchData(data);
      }
    })();
  }, [a, userId]);
  return (
    <Container>
      <Header>
        <span className="title">AI 듀오매칭 TOP 5</span>
      </Header>
      <List>
        <StatHeader>
          <div className="rank">
            <span>순위</span>
          </div>
          <div className="name">
            <span className="text">이름</span>
          </div>
          <div className="tier">
            <span className="text">티어</span>
          </div>
          <div className="ranking">
            <span className="text">랭크</span>
          </div>
          <div className="winRate">
            <span className="text">승률</span>
          </div>
          <div className="trollPossibility">
            <span className="text">트롤확률</span>
          </div>
        </StatHeader>
        {aiMatchData?.map((data, index) => (
          <Stat key={data.winRate} data={data} index={index} />
        ))}
      </List>
    </Container>
  );
}

export default AiMatch;
