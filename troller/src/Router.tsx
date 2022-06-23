import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hub from './pages/hub';
import FindDuo from './pages/main/findDuo';
import MultiSearch from './pages/main/multiSearch';
import NormalRank from './pages/main/normalRank';
import ItemTree from './pages/mypage/itemTree';
import KDA from './pages/mypage/kda';
import MyPage from './pages/mypage/mypage';
import TierAbility from './pages/mypage/tierAbility';
import ForgotPw from './pages/sign/forgot';
import Login from './pages/sign/signin';
import Signup from './pages/sign/signup';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Hub />}>
					<Route path="find_duo" element={<FindDuo />} />
					<Route path="multi_search" element={<MultiSearch />} />
					<Route path="normal_rank" element={<NormalRank />} />
					<Route path="sign_in" element={<Login />} />
					<Route path="sign_up" element={<Signup />} />
					<Route path="forgot_pw" element={<ForgotPw />} />
					<Route path="my_page" element={<MyPage />}>
						<Route path="kda" element={<KDA />} />
						<Route path="tier_ability" element={<TierAbility />} />
						<Route path="item_tree" element={<ItemTree />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
