import { Outlet, useLocation } from 'react-router-dom';
import {
  FullSearchGlobalWrapper,
  RecordSection,
  UserSection,
} from '../../styles/fullSearch/fullSearch';
import GraphTab from '../../components/fullSearch/graphTab';
import UserInfo from '../../components/fullSearch/userInfo';
import SumRecord from '../../components/fullSearch/sumRecords';
import {
  FullSearchContainer,
  FullSearchWrapper,
} from '../../styles/fullSearch/userInfo';
import RecordList from '../../components/fullSearch/recordList';

// 임시 데이터 세팅
function FullSearch() {
  const { pathname } = useLocation();
  return (
    <FullSearchGlobalWrapper>
      <UserSection>
        <FullSearchWrapper>
          <UserInfo
            nickname="My_LOL_NickName"
            profileImg="https://dimg.donga.com/wps/NEWS/IMAGE/2013/12/18/59635708.3.jpg"
            tier="Platinum"
            winRate={1}
            winRecord={1}
            loseRecord={99}
            level={30}
          />
          <GraphTab pathname={pathname} />
          <FullSearchContainer pathname={pathname}>
            <Outlet />
          </FullSearchContainer>
        </FullSearchWrapper>
      </UserSection>
      <RecordSection>
        <SumRecord />
        <RecordList />
      </RecordSection>
    </FullSearchGlobalWrapper>
  );
}

export default FullSearch;
