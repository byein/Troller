// eslint-disable-next-line import/no-cycle
import Stat from '../../components/fullSearch/stats';
import { Container, Header, List } from '../../styles/fullSearch/aiMatch';

export interface AiMatchType {
  id: number;
  lolName: string;
  trollPossibility: string;
  tier: string;
  ranking: string;
  winRate: string;
}

const dummyData = [
  {
    id: 1,
    lolName: '오정민',
    trollPossibility: '123412',
    tier: 'DIAMOND',
    ranking: 'II',
    winRate: '54%',
  },
  {
    id: 2,
    lolName: '김예빈',
    trollPossibility: '123412',
    tier: 'DIAMOND',
    ranking: 'II',
    winRate: '54%',
  },
  {
    id: 3,
    lolName: '김규민',
    trollPossibility: '123412',
    tier: 'DIAMOND',
    ranking: 'II',
    winRate: '54%',
  },
  {
    id: 4,
    lolName: '박인재',
    trollPossibility: '123412',
    tier: 'DIAMOND',
    ranking: 'II',
    winRate: '54%',
  },
  {
    id: 5,
    lolName: '남송휘',
    trollPossibility: '123412',
    tier: 'DIAMOND',
    ranking: 'II',
    winRate: '54%',
  },
];

function AiMatch() {
  return (
    <Container>
      <Header>
        <span className="title">AI 듀오매칭 TOP 5</span>
      </Header>
      <List>
        <div className="header">
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
          <div className="winrate">
            <span className="text">승률</span>
          </div>
        </div>
        {dummyData.map(data => (
          <Stat key={data.id} data={data} />
        ))}
      </List>
    </Container>
  );
}

export default AiMatch;
