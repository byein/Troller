import { Link, Outlet, useLocation } from 'react-router-dom';
import { RankTab, RankTabItem, RankWrapper } from '../../styles/rank/rank';

function Rank() {
  const { pathname } = useLocation();
  return (
    <RankWrapper>
      <RankTab pathname={pathname}>
        <div>
          <ul>
            <RankTabItem isActive={pathname.includes('/normal')}>
              <Link to="normal">일반랭킹</Link>
            </RankTabItem>
            <RankTabItem isActive={pathname.includes('/troll')}>
              <Link to="troll">트롤랭킹</Link>
            </RankTabItem>
          </ul>
        </div>
      </RankTab>
      <Outlet />
    </RankWrapper>
  );
}
export default Rank;
