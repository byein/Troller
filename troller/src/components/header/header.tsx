import { Link } from 'react-router-dom';
import { GlobalHeader, Tab } from '../../styles/global/global';

function Header({ pathname }: { pathname: string }) {
	return (
		<GlobalHeader pathname={pathname}>
			<span className="logo">
				<Link to="/">Logo</Link>
			</span>
			<div>
				<ul>
					<Tab isActive={pathname === '/find_duo'}>
						<Link to="find_duo">듀오찾기</Link>
					</Tab>
					<Tab isActive={pathname === '/multi_search'}>
						<Link to="multi_search">멀티서치</Link>
					</Tab>
					<Tab isActive={pathname === '/normal_rank'}>
						<Link to="normal_rank">노멀랭킹</Link>
					</Tab>
				</ul>
			</div>
			<span className="signin">
				<Link to="signin">sign in</Link>
			</span>
		</GlobalHeader>
	);
}
export default Header;
