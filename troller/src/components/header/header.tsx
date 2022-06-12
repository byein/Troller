import { Link } from 'react-router-dom';
import { GlobalHeader } from '../../styles/global/global';

function Header() {
	return (
		<GlobalHeader>
			<span className="logo">
				<Link to="/">Logo </Link>
			</span>
			<div>
				<ul>
					<li>
						<Link to="/duo">듀오찾기</Link>
					</li>
					<li>
						<Link to="/multi">멀티서치</Link>
					</li>
					<li>
						<Link to="/login">트롤랭킹</Link>
					</li>
				</ul>
			</div>
			<span className="signin">
				<Link to="/signin">sign in</Link>
			</span>
		</GlobalHeader>
	);
}
export default Header;
