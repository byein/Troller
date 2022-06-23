import { Link } from 'react-router-dom';
import { GraphTabWrapper, ProfileTab } from '../../styles/mypage/mypage';

function GraphTab({ pathname }: { pathname: string }) {
	return (
		<GraphTabWrapper pathname={pathname}>
			<div>
				<ul>
					<ProfileTab isActive={pathname === '/my_page/kda'}>
						<Link to="kda">KDA</Link>
					</ProfileTab>
					<ProfileTab isActive={pathname === '/my_page/tier_ability'}>
						<Link to="tier_ability">Tier-Ability</Link>
					</ProfileTab>
					<ProfileTab isActive={pathname === '/my_page/item_tree'}>
						<Link to="item_tree">Item Tree</Link>
					</ProfileTab>
				</ul>
			</div>
		</GraphTabWrapper>
	);
}
export default GraphTab;
