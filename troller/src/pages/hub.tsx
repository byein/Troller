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
		</GlobalContainer>
	);
}

export default Hub;
