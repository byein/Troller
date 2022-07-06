import { Outlet, useLocation } from 'react-router-dom';
import {
  MyPageContainer,
  MyPageWrapper,
} from '../../styles/fullSearch/fullSearch';
import GraphTab from '../../components/fullSearch/graphTab';
import UserInfo from '../../components/fullSearch/userInfo';

// 임시 데이터 세팅
function FullSearch() {
  const { pathname } = useLocation();
  return (
    <MyPageWrapper>
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
      <MyPageContainer pathname={pathname}>
        <Outlet />
      </MyPageContainer>
    </MyPageWrapper>
  );
}

export default FullSearch;
