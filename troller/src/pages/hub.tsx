import { Outlet, useMatch, useLocation } from 'react-router-dom';
import { GlobalContainer, MainContainer } from '../styles/global/global';
import Header from '../components/header/header';
import Home from './main/home';

function Hub() {
	const match = useMatch('/');
	const { pathname } = useLocation();
	return (
		<GlobalContainer>
			<Header pathname={pathname} />
			<MainContainer pathname={pathname}>{match ? <Home /> : <Outlet />}</MainContainer>
			{/* MainContainer를 큰틀으로 제작해주세요!(옵션) */}
		</GlobalContainer>
	);
}

export default Hub;
