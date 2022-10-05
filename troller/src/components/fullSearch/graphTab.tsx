import { Link } from 'react-router-dom';
import { GraphTabWrapper, ProfileTab } from '../../styles/fullSearch/userInfo';

function GraphTab({ pathname }: { pathname: string }) {
  return (
    <GraphTabWrapper pathname={pathname}>
      <div>
        <ul>
          <ProfileTab isActive={pathname.includes('/troll_possibility')}>
            <Link to="troll_possibility">나의 트롤확률</Link>
          </ProfileTab>
          <ProfileTab isActive={pathname.includes('/ai_match')}>
            <Link to="ai_match">AI 듀오매칭</Link>
          </ProfileTab>
        </ul>
      </div>
    </GraphTabWrapper>
  );
}
export default GraphTab;
