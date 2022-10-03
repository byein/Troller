// eslint-disable-next-line import/no-cycle
import { AiMatchType } from '../../pages/fullSearch/aiMatch';
import { StatWrapper } from '../../styles/fullSearch/aiMatch';

function Stat({
  data: { id, lolName, trollPossibility, tier, ranking, winRate },
}: {
  data: AiMatchType;
}) {
  return (
    <StatWrapper>
      <div className="rank">
        <span>{id}</span>
      </div>
      <div className="name">
        <span className="text">{lolName}</span>
      </div>
      <div className="tier">
        <span className="text">{tier}</span>
      </div>
      <div className="ranking">
        <span className="text">{ranking}</span>
      </div>
      <div className="winrate">
        <span className="text">{winRate}</span>
      </div>
    </StatWrapper>
  );
}

export default Stat;
