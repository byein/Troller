import { StatWrapper, UserStat } from '../../styles/multiSearch/stats';
import { useStats } from './searchBox';
import { Skeleton } from '../../styles/global/global';

function Stats() {
  const { load } = useStats();
  return (
    <StatWrapper>
      <UserStat>
        {load ? (
          <Skeleton>
            <div className="bar" />
          </Skeleton>
        ) : null}
      </UserStat>
      <UserStat>
        {load ? (
          <Skeleton>
            <div className="bar" />
          </Skeleton>
        ) : null}
      </UserStat>
      <UserStat>
        {load ? (
          <Skeleton>
            <div className="bar" />
          </Skeleton>
        ) : null}
      </UserStat>
      <UserStat>
        {load ? (
          <Skeleton>
            <div className="bar" />
          </Skeleton>
        ) : null}
      </UserStat>
      <UserStat>
        {load ? (
          <Skeleton>
            <div className="bar" />
          </Skeleton>
        ) : null}
      </UserStat>
    </StatWrapper>
  );
}

export default Stats;
