// eslint-disable-next-line import/no-cycle
import { AiMatchType } from '../../pages/fullSearch/aiMatch';
import { StatWrapper } from '../../styles/fullSearch/aiMatch';

function Stat({
  data: { lolName, trollPossibility, tier, winRate, ranking },
  index,
}: {
  data: AiMatchType;
  index: number;
}) {
  return (
    <StatWrapper>
      <div className="rank">
        <span>{index}</span>
      </div>
      <div className="name">
        <span>{lolName}</span>
      </div>
      <div className="tier">
        <span>{tier}</span>
      </div>
      <div className="ranking">
        <span>{ranking}</span>
      </div>
      <div className="winRate">
        <span>{winRate}</span>
      </div>
      <div className="trollPossibility">
        <span>{parseFloat(trollPossibility).toFixed(3)}%</span>
      </div>
    </StatWrapper>
  );
}

export default Stat;
