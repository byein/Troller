import { Outlet, useMatch, useLocation } from 'react-router-dom';
import { GlobalContainer, MainContainer } from '../../styles/global/global';
import Header from '../../components/header/header';
import Home from '../main/home';
import { MyPageContainer, MyPageWrapper } from '../../styles/mypage/mypage';
import GraphTab from '../../components/mypage/graphTab';
import UserInfo, { UserInfoProps } from '../../components/mypage/userInfo';

function MyPage() {
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

export default MyPage;
