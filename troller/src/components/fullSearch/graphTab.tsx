import { Link } from 'react-router-dom';
import { GraphTabWrapper, ProfileTab } from '../../styles/fullSearch/userInfo';

function GraphTab({ pathname }: { pathname: string }) {
  return (
    <GraphTabWrapper pathname={pathname}>
      <div>
        <ul>
          <ProfileTab isActive={pathname.includes('/kda')}>
            <Link to="kda">KDA</Link>
          </ProfileTab>
          <ProfileTab isActive={pathname.includes('/tier_ability')}>
            <Link to="tier_ability">Tier-Ability</Link>
          </ProfileTab>
        </ul>
      </div>
    </GraphTabWrapper>
  );
}
export default GraphTab;
