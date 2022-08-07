import { StatWrapper, UserStat } from '../../styles/multiSearch/stats';
import { useStats } from './searchBox';
import { Skeleton } from '../../styles/global/global';

function Stats() {
  const { load } = useStats();
  return (
    <StatWrapper>
      <UserStat isLoading={load} />
      <UserStat />
      <UserStat />
      <UserStat />
      <UserStat />
    </StatWrapper>
  );
}

export default Stats;
